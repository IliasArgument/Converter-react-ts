import { FC } from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/HomePage/Home';
import ThemeContext from './provider/ThemeContext';

const App: FC = () => {
  return (
    <div className="App">
      <ThemeContext>
        <Header />
        <Home />
      </ThemeContext>
    </div>
  );
}

export default App;
