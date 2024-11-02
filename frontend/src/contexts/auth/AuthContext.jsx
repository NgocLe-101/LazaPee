import { createContext, useEffect, useLayoutEffect, useReducer } from 'react';
import { initialize, login, logout, reducer } from './reducers';
import PropTypes from 'prop-types';
import { initialState } from './constant';
import { getMe, getRefreshToken } from '../../api/user/auth';
import { instance } from '../../api/config';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const { accessToken } = await getMe();
        dispatch(
          initialize({ isAuthenticated: true, userAccessToken: accessToken })
        );
      } catch {
        dispatch(initialize({ isAuthenticated: false, userAccessToken: null }));
      }
    };
    fetchMe();
  }, []);

  useLayoutEffect(() => {
    const interceptor = instance.interceptors.request.use((config) => {
      config.headers.Authorization =
        state.userAccessToken && !config._retry
          ? `Bearer ${state.userAccessToken}`
          : config.headers.Authorization;
      console.log('request used');
      return config;
    });
    return () => instance.interceptors.request.eject(interceptor);
  }, [state.userAccessToken]);

  useLayoutEffect(() => {
    const interceptor = instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401) {
          try {
            const refreshToken = await getRefreshToken();
            dispatch(login({ userAccessToken: refreshToken }));

            originalRequest.headers.Authorization = `Bearer ${refreshToken}`;
            originalRequest._retry = true;

            return instance(originalRequest);
          } catch {
            dispatch(logout());
          }
        }
      }
    );
    return () => instance.interceptors.response.eject(interceptor);
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
