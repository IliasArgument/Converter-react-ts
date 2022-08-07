import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContext from './provider/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
  </>
);
