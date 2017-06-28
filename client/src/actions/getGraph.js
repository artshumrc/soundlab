const getGraph = (payload) => { // eslint-disable-line
	return (dispatch) => {
		dispatch(startingRequest());
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.open('POST', '/graphql', true);
			request.setRequestHeader('Content-Type',
															'application/graphql');
			request.send(payload);
			request.onreadystatechange = () => {
				if (request.readyState === 4) {
					resolve(request.responseText);
				}
			};
		}).then(response =>
						dispatch(finishedRequest(JSON.parse(response))));
	};
};

export default getGraph;
