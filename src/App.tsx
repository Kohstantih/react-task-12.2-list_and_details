import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ListServices from './components/ListServices/ListServices';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import NotFound from './components/NotFound/NotFound';

import './App.css';
import { useAppSelector } from './hooks/redux';

function App() {
  const { isActive } = useAppSelector(state => state.activeStatus);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListServices />} />
          {isActive && <Route path='/:id/details' element={<ServiceDetails />} />}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
