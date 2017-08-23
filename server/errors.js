import { createError } from 'apollo-errors';

/**
 * Authentication Error
 * @type {Error}
 */
export const AuthenticationError = createError('AuthenticationError', {
	message: 'User not identified',
});

/**
 * Permission / Authorization Error
 * @type {Error}
 */
export const PermissionError = createError('PermissionError', {
	message: 'User not authorized - permission denied',
});

/**
 * Tenant Error
 * @type {Error}
 */
export const TenantError = createError('TenantError', {
	message: 'Tenant not authorized - permission denied',
});

/**
 * Argument Error
 * @type {Error}
 */
export const ArgumentError = createError('ArgumentError', {
	message: 'Incorrect or missing value of an argument',
});


/**
 * Argument Error
 * @type {Error}
 */
export const MongooseDuplicateKeyError = createError('MongooseDuplicateKeyError', {
	message: 'Mongoose duplicate key error',
});

/**
 * Argument Error
 * @type {Error}
 */
export const MongooseValidationError = createError('MongooseValidationError', {
	message: 'Mongoose model validation failed',
});
