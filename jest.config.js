// dotenv
const dotenvSetup = require('./server/dotenv');

dotenvSetup();

module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['server/api/**/*.js']
};
