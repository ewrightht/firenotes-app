import { useContext } from 'react';
import {
	Route,
	BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import MainPage from '../pages/main/MainPage';

const AppRouter = () => {
	const { user } = useContext(AuthContext);
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/register" component={RegisterPage} />
				{user.logged ? (
					<Route exact path="/" component={MainPage} />
				) : (
					<Redirect to="/login" />
				)}
			</Switch>
		</Router>
	);
};

export default AppRouter;
