import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { FormContainer, FormControl, PanelInfo, PanelForm } from '../../components/PanelLogin';
import { Paragraph, Typography, Wrapper, SizedBox } from '../../components/utils';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { errorAlert } from '../../components/alerts';
import { firebase } from '../../firebase/config';

const RegisterPage = () => {
	const { values, handleOnChange } = useForm({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { username, email, password, confirmPassword } = values;

  const isValid = () => {
		if (
			username.length === 0 ||
			email.length === 0 ||
			password.length === 0 ||
			confirmPassword.length === 0
		) {
			errorAlert('Fields cannot be empty');
			return false;
		} else if (!validator.isEmail(email)) {
			errorAlert('Email is not valid');
			return false;
		} else if (password !== confirmPassword) {
			errorAlert('Passwords do not match');
			return false;
		} else if (password.length < 5) {
			errorAlert('The password must have at least 5 characters');
			return false;
		} else {
			return true;
		}
	};

  const handleRegister = (e) => {
    e.preventDefault();
		if (isValid()) {
			createUser(email, username, password);
    }
	};

	const createUser = (email, username, password) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
        await user.updateProfile({displayName: username});
      })
			.catch(({ message }) => {
				errorAlert(message);
			});
	};

	return (
		<Wrapper>
			<PanelForm>
				<PanelInfo>
					<Typography h1>Firenotes</Typography>
					<Typography h3>The Awesome Notes App</Typography>
				</PanelInfo>
				<FormContainer onSubmit={handleRegister}>
					<Typography h1>Register</Typography>
					<SizedBox h="20px" />
					<FormControl
						onChange={handleOnChange}
						type="text"
						name="username"
						placeholder="Username" />
					<SizedBox h="20px" />
					<FormControl
						onChange={handleOnChange}
						type="email"
						name="email"
						placeholder="email@yourdomain.com" />
					<SizedBox h="20px" />
					<FormControl
						onChange={handleOnChange}
						type="password"
						name="password"
						placeholder="Password" />
					<SizedBox h="20px" />
					<FormControl
						onChange={handleOnChange}
						type="password"
						name="confirmPassword"
						placeholder="Confirm password" />
					<SizedBox h="20px" />
					<Button type="submit" primary center>
						Register
					</Button>
					<SizedBox h="20px" />
					<Paragraph lead>
						Already have an account? <Link to="/login">Login here</Link>
					</Paragraph>
				</FormContainer>
			</PanelForm>
		</Wrapper>
	);
};

export default RegisterPage;
