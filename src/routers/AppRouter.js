import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import MainPage from '../pages/main/MainPage';
import { firebase } from '../firebase/config';
import { Loading } from '../components/Loading';
import { PrivateRoute } from '../pages/PrivateRoute';

const AppRouter = () => {
	const { setUserAuth } = useContext(AuthContext);
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				const { uid, displayName } = user;
				setUserAuth({ uid, displayName });
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [setUserAuth, setChecking, setIsLoggedIn]);

	if (checking) {
		return <Loading />;
	}

	return (
		<Router>
			<Switch>
				<PrivateRoute
					exact
					path="/"
					component={MainPage}
					isAuthenticated={isLoggedIn} />
				{isLoggedIn ? (
					<Redirect to="/" />
				) : (
					<Switch>
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/register" component={RegisterPage} />
            <Redirect to="/login" />
					</Switch>
				)}
        <Redirect to="/" />
			</Switch>
		</Router>
	);
};

export default AppRouter;
