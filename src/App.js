
import Auth from './contexts/Auth';
import './App.css';
import { Route, BrowserRouter, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/home/home';
import HommeLazi from './pageLazy/hommeLazi';
import Erroraa from './components/401Error/error401';
import Contacts from './pages/conatac/contacts';
import Cursoss from './pages/cursos/cursoss';
import Admins from './pages/admin/admins';
import Medic from './pages/especia/medic';
import CcSocial from './pages/especia/ccsocial';
import CcEcono from './pages/especia/ccecono';
import Tecno from './pages/especia/tecno';
import Sociales from './pages/cursos/sociales';
import Economicas from './pages/cursos/economicas';
import PatOffice from './pages/cursos/pOfiice';
import Idiomas from './pages/cursos/idiomas';
import Profes from './pages/admin/profes';
import Qsomos from './pages/admisiones/qsomos';
import Reglamento from './pages/admisiones/reglamento';
import Ventagas from './pages/admisiones/ventagas';
import EqAdmision from './pages/admisiones/eqAdmision';
import AdminPage from './pages/adminPage/adminPage';
import VerEvents from './pages/verEvent/verEvents';
import AllEvent from './pages/allEvents/allEvent';
import AllVideos from './pages/allVideos/allVideos';
import Especialidades from './pages/especia/especialidades';
function App() {
  return (
    <Auth>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HommeLazi/>} />
          <Route exact path="/tecno" element={<Tecno/>} />
          <Route exact path="/contacts" element={<Contacts/>} />
          <Route exact path="/administracion" element={<Admins/>} />
          <Route exact path="/profesores" element={<Profes/>} />
          <Route exact path="/especialidades" element={<Especialidades/>} />
          <Route exact path="/cursos" element={<Cursoss/>} />
          <Route exact path="/social" element={<Sociales/>} />
          <Route exact path="/qsomos" element={<Qsomos/>} />
          <Route exact path="/allvideos" element={<AllVideos/>} />
          <Route exact path="/verEvent/:id" element={<VerEvents/>} />
          <Route exact path="/allEvent" element={<AllEvent/>} />
          <Route exact path="/reglamento" element={<Reglamento/>} />
          <Route exact path="/ventagas" element={<Ventagas/>} />
          <Route exact path="/adminPage/:id" element={<AdminPage/>} />
          <Route exact path="/eqadmision" element={<EqAdmision/>} />
          <Route exact path="/economia" element={<Economicas/>} />
          <Route exact path="/patoffice" element={<PatOffice/>} />
          <Route exact path="/idiomas" element={<Idiomas/>} />
          <Route exact path="/ccecono" element={<CcEcono/>} />
          <Route exact path="/wafsfsfsfsfsfsfsf" element={<Erroraa/>}/>
        </Routes>
      </HashRouter>
    </Auth>
  );
}

export default App;
