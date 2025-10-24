import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginLink = () => {
  return <Link to="/cart" className="shopcart-link">
      <div className="shopcart-icon-container">
          <PersonIcon className="cart-icon" role="img" aria-label="LogIn"></PersonIcon>
      </div>
      <span className="person-text"></span>
  </Link>;
}

export default LoginLink;