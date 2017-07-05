import { createError } from 'apollo-errors';

export const AuthenticationError = createError('AuthenticationError', {
	message: 'Not authorized'
});

export const DBError = createError('DBError', {
	message: 'Database error'
});
