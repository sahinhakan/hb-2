import './App.css';
import RouterConfig from './navigation/RouterConfig';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <RouterConfig/>
      </BrowserRouter>
    </div>
  );
}

export default App;
