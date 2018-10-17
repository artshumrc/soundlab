

const getCurrentProjectHostname = () => {
	let hostname = null;
	const orpheusHostnames = ['orphe.us', 'orpheus.local', 'localhost'];

	if (
		window
		&& window.location.hostname
		&& !~orpheusHostnames.indexOf(window.location.hostname)
	) {
		hostname = window.location.hostname;
	}

	// regularlize development domain
	if (hostname && hostname.endsWith('orpheus.local')) {
		hostname = hostname.replace('orpheus.local', 'orphe.us');
	}

	return hostname;
};

export default getCurrentProjectHostname;
