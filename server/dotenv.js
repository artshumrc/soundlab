import dotenv from 'dotenv';

export default function dotenvSetup() {

	if (process.env.NODE_ENV === 'production') {
		dotenv.config({ path: '.env.production.local' });
		dotenv.config({ path: '.env.production' });
	} else {
		dotenv.config({ path: '.env.development.local' });
		dotenv.config({ path: '.env.development' });
	}
	dotenv.config({ path: '.env.local' });
	dotenv.config({ path: '.env' });
}
