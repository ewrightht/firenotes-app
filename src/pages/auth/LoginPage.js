import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { CircleButton } from '../../components/CircleButton';
import { FormContainer, FormControl, PanelInfo, PanelForm } from '../../components/PanelLogin';
import { Paragraph, Typography, Wrapper, SizedBox } from '../../components/utils';
import { useForm } from '../../hooks/useForm';
import { emptyTextFields } from '../../components/alerts';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
	const { values, handleOnChange } = useForm({ email: '', password: '' });
	const { email, password } = values;
	const { user, setUser } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
		if (email.trim().length === 0 || password.trim().length === 0) {
			emptyTextFields();
			setUser({ ...user, logged: false });
		} else {
			setUser({ ...user, email, password, logged: true });
		}
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
						onChange={handleOnChange}
            autoComplete="off"
					/>
					<SizedBox h="20px" />
					<FormControl
						type="password"
						name="password"
						placeholder="***********"
						onChange={handleOnChange}
					/>
					<SizedBox h="20px" />
					<Button type="submit" className="disabled" primary center>
						Login
					</Button>
					<SizedBox h="20px" />
					<div style={divLogin}>
						<CircleButton>
							<i className="fab fa-google fa-3x"></i>
						</CircleButton>
						<CircleButton>
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
