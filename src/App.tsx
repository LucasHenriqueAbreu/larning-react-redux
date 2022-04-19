import './App.css';
import ReactLogo from './components/logo-react/logo-react-animation';

function App() {
  return (
    <div>
      <div className='relative flex flex-col flex-0 justify-center w-full overflow-hidden z-49 shadow dark:shadow-none print:hidden'>
        {/* Header */}
        <div className="relative flex flex-auto justify-center w-full px-4 md:px-8 bg-gray-800 p-10">
          <div className='flex flex-row items-center w-full max-w-6xl'>
            <div className='flex items-center ng-star-inserted'>
              <ReactLogo></ReactLogo>
              <div className='flex flex-col items-start'>
                <span className='text-4xl font-bold text-white'>Aprendendo React</span>
                <span className='text-sm font-light text-white'>Aplicação que contém vários apps para estudo do react</span>
              </div>
            </div>
            <div className='flex items-center pl-2 ml-auto space-x-0.5 sm:space-x-2 text-white'>
              <div><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></div>
              <div><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></div>
              <div><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></div>
            </div>
          </div>
        </div>
        {/* Navegação */}
        <div className='relative flex flex-auto justify-center w-full px-4 md:px-8 bg-card dark:bg-gray-700 ng-star-inserted'>
          <div className='relative flex items-center w-full max-w-6xl h-16'>
            <div className='-mx-4 ng-tns-c48-57 ng-star-inserted'>
              <div className="flex">
                navegação
              </div>
            </div>
            <div className='flex items-center pl-2 ml-auto space-x-0.5 sm:space-x-2 '>
              <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 ring-1 ring-slate-900/10 dark:ring-slate-200/20">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rotas */}
      <div>
        routes
      </div>
    </div>
  );
}

export default App;
