import reducers from './redux/reducers';
import * as authActions from './redux/actions';
import AuthModal from './components/AuthModal';

export const getAuthReducers = () => reducers;

export { authActions };

export default AuthModal;
