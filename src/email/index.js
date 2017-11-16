import nodemailer from 'nodemailer';
import path from 'path';
import winston from 'winston';
import { EmailTemplate } from 'email-templates';

/**
 * Class for managing sending emails
 * @constructor
 */
class EmailManager {

	/**
	 * Setup the email transporter via smtp config
	 */
	constructor(props) {
		this.from = process.env.EMAIL_FROM;

		const smtpConfig = {
			host: process.env.EMAIL_SMTP_HOST,
			port: process.env.EMAIL_SMTP_PORT,
			secure: process.env.EMAIL_SMTP_SECURE,
			auth: {
				user: process.env.EMAIL_SMTP_USER,
				pass: process.env.EMAIL_SMTP_PASSWORD
			},
			// logger: false,
			// debug: false // include SMTP traffic in the logs
		};

		// Create a SMTP transporter object
		const transporter = nodemailer.createTransport(smtpConfig);

		// verify connection configuration
		transporter.verify((error, success) => {
			if (error) {
				console.log('Failed to connect to SMTP server');
				console.log(error);
			} else {
				console.log('Connection to SMTP server successful');
			}
		});

		this.transporter = transporter;
	}

	/**
	 * Send a verification email to a user after they have signed up
	 */
	async sendNotificationEmail(html) {

		const email = {
			from: this.from,
			to: ['lukehollis@gmail.com'],
			subject: 'New user submission at the Sound Lab',
			html,
		};

		await this.transporter.sendMail(email);
	}
}

export default EmailManager;
