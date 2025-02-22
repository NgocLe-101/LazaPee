import './styles/index.css';
import { Outlet } from 'react-router-dom';
import Template from './components/templates/Template';
import PropTypes from 'prop-types';

function App() {
  return (
    <Template>
      <Outlet />
    </Template>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
