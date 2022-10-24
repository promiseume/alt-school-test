import AllUsers from './Pages/Users/AllUsers'
import PageNotFound from './Pages/404';
import LandingPage from './Pages/LandingPage/landingpage';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
     <Route path="/user" element={<AllUsers/>}/>
    <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;
