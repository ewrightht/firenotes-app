import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthContext } from './context/AuthContext';
import AppRouter from './routers/AppRouter';

function App() {
	const [userAuth, setUserAuth] = useState(
		JSON.parse(localStorage.getItem('user')) || { uid: '', displayName: '' }
	);

	const theme = {
		primaryColor: '#55efc4',
		secondaryColor: '#00b894',
		backColor: '#c1f5e6',
		headerColor: '#00343D',
	};
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(userAuth));
	}, [userAuth]);

	return (
		<div>
			<AuthContext.Provider value={{ userAuth, setUserAuth }}>
				<ThemeProvider theme={theme}>
					<AppRouter />
				</ThemeProvider>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
