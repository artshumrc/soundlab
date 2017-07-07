import React from 'react';
import { gql, graphql } from 'react-apollo';

const onSubmit = (e) => {
	e.preventDefault();

	fetch('http://192.168.0.25:3001/login', {
		method: 'POST',
		credentials: 'include',
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




const Secret = ({data : { projectSecret, refetch }}) => (
	<div>
		<h3>Test graphql secret date</h3>
		<p>projectSecret title: {projectSecret ? projectSecret.title : 'nothing'}</p>

		<button onClick={refetch}>Refresh</button>
	</div>
);

const SecretWithData = graphql(gql`
	query ProjectRandom {
		projectSecret {
			title
			tenantIds {
				name
			}
		}
	}
`)(Secret);


class Login extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			showSecret: false,
		};

		this.toggleSecret = this.toggleSecret.bind(this);
	}

	toggleSecret() {
		this.setState({
			showSecret: !this.state.showSecret,
		});
	}

	render() {
		const { data: { projectRandom, projectSecret } } = this.props;
		const { showSecret } = this.state;
		return (
			<div>
				<form action="http://192.168.0.25:3001/login" onSubmit={onSubmit}>
					Username:<br />
					<input type="text" name="username" value="test@test.pl" />
					<br />
					Password:<br />
					<input type="password" name="password" value="123" />
					<br />
					<input type="submit" value="Submit" />
				</form>

				<h3>Test graphql data</h3>
				<p>projectRandom title: {projectRandom && projectRandom.title}</p>

				<button onClick={this.toggleSecret}>Refresh</button>
				{showSecret && <SecretWithData />}
			</div>
		);
	}
}

export default graphql(gql`
	query ProjectRandom {
		projectRandom {
			title
			tenantIds {
				name
			}
		}
	}
`)(Login);
