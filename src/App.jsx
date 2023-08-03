import './App.css';
import Navbar from './components/header';
import Sigin from './pages/signin';
import { Register } from './pages/register';
import { Footer } from './components/footer';
import { ListTemplates } from './pages/listTemplates';
import { Route, Routes } from 'react-router-dom';
import { StepperPage } from './pages/stepperPage';
import { LandingPage } from './pages/landingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Template from './pages/template';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Sigin />} />
        <Route path='/steps' element={<StepperPage />} />
        <Route path='/list' element={<ListTemplates />} />
        <Route path='/template/:template' element={<Template />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
