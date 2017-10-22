import Sequelize from 'sequelize';

import Postmeta from './Postmeta';
import db from '../db';


const Post = db.define('wp_posts', {
	id: { type: Sequelize.INTEGER, primaryKey: true},
	post_author: { type: Sequelize.INTEGER },
	post_title: { type: Sequelize.STRING },
	post_content: { type: Sequelize.STRING },
	post_excerpt: { type: Sequelize.STRING },
	post_status: { type: Sequelize.STRING },
	post_type: { type: Sequelize.STRING },
	post_name: { type: Sequelize.STRING},
	post_parent: { type: Sequelize.INTEGER},
	menu_order: { type: Sequelize.INTEGER},
	post_modified: { type: Sequelize.DATE },
});

Post.associate = ({ models }) => {
	Post.hasMany(models.wp_postmeta, { foreignKey: 'post_id' });
};

export default Post;
