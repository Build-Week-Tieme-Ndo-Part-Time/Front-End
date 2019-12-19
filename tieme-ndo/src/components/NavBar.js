import React from 'react';
import Button from './Button';

export default function NavBar() {
	return (
		<nav>
			<Button>Log In</Button>
			<Button primary>Sign Up</Button>
		</nav>
	);
}
