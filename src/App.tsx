import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicLayout from './core/components/layouts/basic/BasicLayout';
import EmptyLayout from './core/components/layouts/empty/EmptyLayout';

function App() {
  return (
    <BrowserRouter>
      <div className='relative flex flex-col flex-0 justify-center w-full overflow-hidden z-49 shadow dark:shadow-none print:hidden'>
        <Routes>
          <Route path="/" element={<BasicLayout />} />
          <Route path="/empty" element={<EmptyLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
