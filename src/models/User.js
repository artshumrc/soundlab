import Sequelize from 'sequelize';
import db from '../db';

const User = db.define('wp_users', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  user_nicename: { type: Sequelize.STRING },
  user_email: { type: Sequelize.STRING },
  user_registered: { type: Sequelize.STRING },
  display_name: { type: Sequelize.STRING }
});

export default User;
