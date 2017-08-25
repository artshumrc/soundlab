

const validateFacebookToken = async (facebookToken) => {

	try {
		const res = await fetch(`${process.env.FACEBOOK_LOGIN_ENDPOINT}?access_token=${facebookToken}`, {
			method: 'POST',
		});
		console.log('res', res);
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		return res.json();
	} catch (err) {
		throw err;
	}

};

export default validateFacebookToken;
