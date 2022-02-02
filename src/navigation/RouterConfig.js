import { Routes, Route } from 'react-router-dom';
import ListLink from '../components/ListLink';
import NewLink from '../components/NewLink';

const RouterConfig = () => {
    return (
        <Routes>
            <Route exact path="/" element={<ListLink/>}/>
            <Route exact path="/new" element={<NewLink/>}/>
        </Routes>
    );
};

export default RouterConfig;