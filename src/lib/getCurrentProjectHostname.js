

const getCurrentProjectHostname = () => {
	let hostname = null;
	let domainArray = [];
	
	if (window && window.location.hostname) {
		domainArray = window.location.hostname.split('.');
		if (domainArray.length && !(~['orphe', 'orpheus'].indexOf(domainArray[0]))) {
			hostname = domainArray[0];
		}
	}

	return hostname;
};

export default getCurrentProjectHostname;
