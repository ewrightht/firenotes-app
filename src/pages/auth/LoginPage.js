import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { CircleButton } from '../../components/CircleButton';
import { FormContainer, FormControl, PanelInfo, PanelForm } from '../../components/PanelLogin';
import { Paragraph, Typography, Wrapper, SizedBox } from '../../components/utils';
import { errorAlert } from '../../components/alerts';
import { AuthContext } from '../../context/AuthContext';
import { firebase, googleAuthProvider } from '../../firebase/config';
import { useForm } from '../../hooks/useForm';

const LoginPage = () => {
	const { values, handleOnChange } = useForm({ email: '', password: '' });
	const { setUserAuth } = useContext(AuthContext);

	const { email, password } = values;

	const handleGoogleLogin = () => {
		firebase.auth().signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				const { uid, displayName } = user;
				setUserAuth({ uid, displayName });
			})
			.catch((error) => {
				const { message } = error;
				errorAlert(message);
			});
	};

	const loginWithEmailPassword = (email, password) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				const { uid, displayName } = user;
				setUserAuth({ uid, displayName });
			})
			.catch(({ message }) => {
				errorAlert(message);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		loginWithEmailPassword(email, password);
	};

	const divLogin = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	};

	return (
		<Wrapper>
			<PanelForm>
				<FormContainer onSubmit={handleSubmit}>
					<Typography h1 style={{ marginBottom: '20px' }}>
						Login
					</Typography>
					<FormControl
						type="email"
						name="email"
						placeholder="email@yourdomain.com"
						autoComplete="off"
						onChange={handleOnChange}/>
					<SizedBox h="20px" />
					<FormControl
						type="password"
						name="password"
						placeholder="***********"
						onChange={handleOnChange}/>
					<SizedBox h="20px" />
					<Button type="submit" primary center>
						Login
					</Button>
					<SizedBox h="20px" />
					<div style={divLogin}>
						<CircleButton type="button" onClick={handleGoogleLogin}>
							<i className="fab fa-google fa-3x"></i>
						</CircleButton>
						<CircleButton type="button">
							<i className="fab fa-github fa-3x"></i>
						</CircleButton>
					</div>
					<SizedBox h="20px" />
					<Paragraph lead>
						Do not have an account? <Link to="/register">Create here</Link>
					</Paragraph>
				</FormContainer>
				<PanelInfo>
					<Typography h1>Firenotes</Typography>
					<Typography h3>The Awesome Notes App</Typography>
				</PanelInfo>
			</PanelForm>
		</Wrapper>
	);
};

export default LoginPage;
