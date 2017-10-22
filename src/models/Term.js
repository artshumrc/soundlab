import Sequelize from 'sequelize';

import TermRelationship from './TermRelationship';
import db from '../db';


const Term = db.define('wp_terms', {
  term_id: { type: Sequelize.INTEGER, primaryKey: true },
  name: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING },
  term_group: { type: Sequelize.INTEGER },
});


Term.associate = ({ models }) => {
	Term.hasMany(models.wp_term_relationships,  {foreignKey: 'term_taxonomy_id'});
}

export default Term;
