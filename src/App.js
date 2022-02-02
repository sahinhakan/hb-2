import './App.css';
import RouterConfig from './navigation/RouterConfig';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { LinkProvider } from './context/LinkContext';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <LinkProvider>
          <RouterConfig/>
        </LinkProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
