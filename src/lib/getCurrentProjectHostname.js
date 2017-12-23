

const getCurrentProjectHostname = () => {
	let hostname = null;
	const orpheusHostnames = ['orphe.us', 'orpheus.local', 'localhost'];

	if (
		window
		&& window.location.hostname
		&& !~orpheusHostnames.indexOf(window.location.hostname)
	) {
		hostname = window.location.hostname
	}

	return hostname;
};

export default getCurrentProjectHostname;
