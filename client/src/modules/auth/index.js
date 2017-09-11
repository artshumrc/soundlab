import reducers from './reducers';
import * as authActions from './actions';
import AuthModal from './components/AuthModal';

export const getAuthReducers = () => reducers;

export { authActions };

export default AuthModal;
