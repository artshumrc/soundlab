import React from 'react';

const onSubmit = (e) => {
	e.preventDefault();

	fetch('http://192.168.0.24:3001/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: 'test@test.pl',
			password: '123',
		})
	})
		.then(res => res.json())
		.then(resJson => console.log(resJson.isAuthenticated))
		.catch(err => console.log('err', err));
};

const Login = () => (
	<form action="http://192.168.0.24:3001/login" onSubmit={onSubmit}>
		Username:<br />
		<input type="text" name="username" value="test@test.pl" />
		<br />
		Password:<br />
		<input type="password" name="password" value="123" />
		<br />
		<input type="submit" value="Submit" />
	</form>
);

export default Login;
