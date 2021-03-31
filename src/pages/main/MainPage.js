import React, { useContext } from 'react';
import { Card, CardDescription, CardTitle } from '../../components/Card';
import { CircleButton } from '../../components/CircleButton';
import { Navbar } from '../../components/Navbar';
import { Container, Row, Typography } from '../../components/utils';
import { openAddNote } from '../../components/alerts';
import { AuthContext } from '../../context/AuthContext';
import { firebase } from '../../firebase/config';

const MainPage = () => {
  const { userAuth, setUserAuth } = useContext(AuthContext);
  const { displayName } = userAuth;

  const handleLogout = async () => {
    await firebase.auth().signOut();
    setUserAuth({})
  }

	return (
		<>
			<Navbar>
				<Typography h2>Firenotes</Typography>
        <Typography>{displayName}</Typography>
				<CircleButton onClick={handleLogout}>
					<i className="fas fa-user fa-2x"></i>
				</CircleButton>
			</Navbar>
			<Container>
				<Typography h1>Your notes</Typography>
				<Row>
					<Card onClick={openAddNote} bordered>
						<CardTitle demo>
							<i className="fas fa-plus"></i> Create a new note
						</CardTitle>
						<CardDescription demo>
							Make and awesome description and select the color!
						</CardDescription>
					</Card>

					<Card background="#e67e22">
						<CardTitle>My first note</CardTitle>
						<CardDescription>Make and awesome description!</CardDescription>
					</Card>

					<Card background="#3498db">
						<CardTitle>My first note</CardTitle>
						<CardDescription>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Veritatis veniam laboriosam minima vitae, esse quam!
						</CardDescription>
					</Card>

					<Card background="#9b59b6">
						<CardTitle>My first note</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
							debitis blanditiis est maxime quis nulla quisquam nostrum iusto.
							Quam, consequuntur.
						</CardDescription>
					</Card>
				</Row>
			</Container>
		</>
	);
};

export default MainPage;
