import { createError } from 'apollo-errors';

export const AuthenticationError = createError('AuthenticationError', {
	message: 'Not authorized'
});
