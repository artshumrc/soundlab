import Sequelize from 'sequelize';

import Post from './Post';
import Postmeta from './Postmeta';
import Term from './Term';
import db from '../db';

const TermRelationship = db.define('wp_term_relationships', {
  object_id: { type: Sequelize.INTEGER, primaryKey: true },
  term_taxonomy_id: { type: Sequelize.INTEGER },
  term_order: { type: Sequelize.INTEGER },
});


TermRelationship.associate = models => {
	TermRelationship.belongsTo(models.Term, {foreignKey: 'term_taxonomy_id'})
	TermRelationship.hasMany(models.Postmeta, {foreignKey: 'post_id'})
	TermRelationship.belongsTo(models.Post, {foreignKey: 'object_id'})
};

export default TermRelationship;
