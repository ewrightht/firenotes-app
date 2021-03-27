import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import {
	FormContainer,
	FormControl,
	PanelInfo,
	PanelForm,
} from '../../components/PanelLogin';
import {
	Paragraph,
	Typography,
	Wrapper,
	SizedBox,
} from '../../components/utils';

const RegisterPage = () => {
	return (
		<Wrapper>
			<PanelForm>
				<PanelInfo>
					<Typography h1>Firenotes</Typography>
					<Typography h3>The Awesome Notes App</Typography>
				</PanelInfo>
				<FormContainer>
					<Typography h1>Register</Typography>
					<SizedBox h="20px" />
					<FormControl type="text" placeholder="Username" />
					<SizedBox h="20px" />
					<FormControl type="email" placeholder="email@yourdomain.com" />
					<SizedBox h="20px" />
					<FormControl type="password" placeholder="Password" />
					<SizedBox h="20px" />
					<FormControl type="password" placeholder="Confirm password" />
					<SizedBox h="20px" />
					<Button primary center>
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
