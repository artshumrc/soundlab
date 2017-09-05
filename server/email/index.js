import nodemailer from 'nodemailer';
import path from 'path';
import { EmailTemplate } from 'email-templates';
// import hbs from 'nodemailer-express-handlebars';

class OrpheusEmailClass {

	constructor() {
		this.transporter = null;
	}

	setupTransport() {

		this.from = process.env.EMAIL_FROM;

		const smtpConfig = {
			host: process.env.EMAIL_SMTP_HOST,
			port: process.env.EMAIL_SMTP_PORT,
			secure: false,
			auth: {
				user: process.env.EMAIL_SMTP_USER,
				pass: process.env.EMAIL_SMTP_PASSWORD
			},
			logger: false,
			debug: false // include SMTP traffic in the logs
		};

		// Create a SMTP transporter object
		const transporter = nodemailer.createTransport(smtpConfig);

		// User handlebars for generating templates
		// transporter.use('compile', hbs({
		// 	viewPath: 'server/email/templates',
		// }));

		// verify connection configuration
		transporter.verify((error, success) => {
			if (error) {
				console.log('Failed to connect to SMTP server!!!');
				console.log(error);
			} else {
				console.log('Connection to SMTP server SUCCESSFUL.');
			}
		});

		this.transporter = transporter;

		const email = {
			from: this.from,
			to: 'michalpierzchlewicz92@gmail.com',
			subject: 'Test',
			html: '<b>Hello</b>',
			text: 'results.text',
		};

		transporter.sendMail(email, (error, info) => {
			console.log('error', error);
			console.log('info', info);

			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		});

	}

	sendVerificationEmail(username) {

		const templateDir = path.resolve(__dirname, 'templates', 'emailVerification');

		const template = new EmailTemplate(templateDir);

		template.render({})
			.then((results) => {
				const email = {
					from: this.from,
					to: username,
					subject: results.subject,
					// html: results.html,
					text: results.text,
				};

				console.log('email', email);

				this.transporter.sendMail(email);
			});

	}
}

const OrpheusEmail = new OrpheusEmailClass();

export default OrpheusEmail;
