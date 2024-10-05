import Template from './pages/Teamplate';
import './styles/index.css';

function App() {
  return (
    <Template>
      <div className='flex flex-1 flex-col items-center justify-center'>
        <h1 className='font-display text-6xl font-bold'>404</h1>
        <p className='font-primary text-xl'>Page not found</p>
      </div>
    </Template>
  );
}

export default App;
