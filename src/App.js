
import Auth from './contexts/Auth';
import './App.css';
import { Route, BrowserRouter, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/home/home';
import HommeLazi from './pageLazy/hommeLazi';
import Erroraa from './components/401Error/error401';
import Contacts from './pages/conatac/contacts';
import Cursoss from './pages/cursos/cursoss';
import Admins from './pages/admin/admins';


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
import { MantineProvider } from '@mantine/core';
function App() {
  return (
    <Auth>
      <MantineProvider>

        <HashRouter>

          <Routes>
            <Route exact path="/" element={<HommeLazi />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/administracion" element={<Admins />} />
            <Route exact path="/profesores" element={<Profes />} />
            <Route exact path="/especialidades" element={<Especialidades />} />
            <Route exact path="/cursos" element={<Cursoss />} />
            <Route exact path="/qsomos" element={<Qsomos />} />
            <Route exact path="/allvideos" element={<AllVideos />} />
            <Route exact path="/verEvent/:id" element={<VerEvents />} />
            <Route exact path="/allEvent" element={<AllEvent />} />
            <Route exact path="/reglamento" element={<Reglamento />} />
            <Route exact path="/ventagas" element={<Ventagas />} />
            <Route exact path="/adminPage/:id" element={<AdminPage />} />
            <Route exact path="/eqadmision" element={<EqAdmision />} />
            <Route exact path="/wafsfsfsfsfsfsfsf" element={<Erroraa />} />
          </Routes>
        </HashRouter>
        
      </MantineProvider>

    </Auth>
  );
}

export default App;
