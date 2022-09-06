import Sequelize from 'sequelize';
import db from '../db';

const TermTaxonomy = db.define('wp_term_taxonomy', {
  term_taxonomy_id: { type: Sequelize.INTEGER, primaryKey: true },
  term_id: { type: Sequelize.INTEGER },
  taxonomy: { type: Sequelize.STRING },
  parent: { type: Sequelize.INTEGER },
  count: { type: Sequelize.INTEGER },
});


export default TermTaxonomy;
