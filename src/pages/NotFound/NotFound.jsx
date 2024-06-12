import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Error 404. Page not found</h2>
      <Link to='/'>Go back to Home</Link>
    </div>
  );
};

export default NotFound;
