import PermissionsService from './PermissionsService';

import Term from '../../models/Term';
import TermRelationship from '../../models/TermRelationship';
import Post from '../../models/Post';
import Postmeta from '../../models/Postmeta';


/**
 * Logic-layer service for dealing with menus
 */

export default class MenuService extends PermissionsService {

	/**
	 * Get a menu by a term slug
	 * @param {string} name
	 * @returns {Object} Term object record
	 */
  getMenu(name) {
    return Term.findOne({
      where: {
        slug: name
      },
      include: [{
        model: TermRelationship,
        include: [{
          model: Post,
          include: [Postmeta]
        }]
      }]
    }).then(function (res) {
      if (res) {
        var menu = {
          id: null,
          name: name,
          items: null
        };
        menu.id = res.term_id;
        var relationship = res.wp_term_relationships;
        var posts = _lodash2.default.map(_lodash2.default.map(_lodash2.default.map(relationship, 'wp_post'), 'dataValues'), function (post) {
          var postmeta = _lodash2.default.map(post.wp_postmeta, 'dataValues');
          var parentMenuId = _lodash2.default.map(_lodash2.default.filter(postmeta, function (meta) {
            return meta.meta_key === '_menu_item_menu_item_parent';
          }), 'meta_value');
          post.post_parent = parseInt(parentMenuId[0]);
          return post;
        });
        var navItems = [];

        var parentIds = _lodash2.default.map(_lodash2.default.filter(posts, function (post) {
          return post.post_parent === 0;
        }), 'id');

        _lodash2.default.map(_lodash2.default.sortBy(posts, 'post_parent'), function (post) {
          var navItem = {};
          var postmeta = _lodash2.default.map(post.wp_postmeta, 'dataValues');
          var isParent = _lodash2.default.includes(parentIds, post.id);
          var objectType = _lodash2.default.map(_lodash2.default.filter(postmeta, function (meta) {
            return meta.meta_key === '_menu_item_object';
          }), 'meta_value');
          var linkedId = Number(_lodash2.default.map(_lodash2.default.filter(postmeta, function (meta) {
            return meta.meta_key === '_menu_item_object_id';
          }), 'meta_value'));

          if (isParent) {
            navItem.id = post.id;
            navItem.post_title = post.post_title;
            navItem.order = post.menu_order;
            navItem.linkedId = linkedId;
            navItem.object_type = objectType;
            navItem.children = [];
            navItems.push(navItem);
          } else {
            var parentId = Number(_lodash2.default.map(_lodash2.default.filter(postmeta, function (meta) {
              return meta.meta_key === '_menu_item_menu_item_parent';
            }), 'meta_value'));
            var existing = navItems.filter(function (item) {
              return item.id === parentId;
            });

            if (existing.length) {
              existing[0].children.push({ id: post.id, linkedId: linkedId });
            }
          }

          menu.items = navItems;
        });
        return menu;
      }
      return null;
    });
  }
}
