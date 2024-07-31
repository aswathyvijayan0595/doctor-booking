import { Routes, Route } from 'react-router-dom';
import DocLogin from './Pages/DocLogin/doclogin';
import DocHome from './Pages/DocHome/dochome';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="doctor/login" element={<DocLogin />} />
      <Route path="doctor/home" element={<DocHome />} />
    </Routes>
  );
};

export default App;
