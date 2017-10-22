import Sequelize from 'sequelize';

import Post from './Post';
import TermRelationship from './TermRelationship';
import db from '../db';

const Postmeta = db.define('wp_postmeta', {
  meta_id: { type: Sequelize.INTEGER, primaryKey: true, field: 'meta_id' },
  post_id: { type: Sequelize.INTEGER },
  meta_key: { type: Sequelize.STRING },
  meta_value: { type: Sequelize.INTEGER },
});


Postmeta.associate = models => {
	Postmeta.belongsTo(models.TermRelationship, {foreignKey: 'post_id'});
	Postmeta.belongsTo(models.Post, {foreignKey: 'post_id'});
};


export default Postmeta;
