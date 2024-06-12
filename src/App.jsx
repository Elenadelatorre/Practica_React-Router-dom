import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header>
        <nav>
          <NavLink to=''>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contacts/parameter1'>Contacts with parameter</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Creado por Elena de la Torre. 2024</footer>
    </div>
  );
}

export default App;
