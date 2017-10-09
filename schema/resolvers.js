"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WordExpressResolvers;
function WordExpressResolvers(Connectors, publicSettings) {
  var Resolvers = {
    Query: {
      settings: function settings() {
        return publicSettings;
      },
      category: function category(_, _ref) {
        var term_id = _ref.term_id;

        return Connectors.getCategoryById(term_id);
      },
      posts: function posts(_, args) {
        return Connectors.getPosts(args);
      },
      menus: function menus(_, _ref2) {
        var name = _ref2.name;

        return Connectors.getMenu(name);
      },
      post: function post(_, _ref3) {
        var name = _ref3.name,
            id = _ref3.id;

        if (name) {
          return Connectors.getPostByName(name, id);
        }
        return Connectors.getPostById(id);
      },
      postmeta: function postmeta(_, _ref4) {
        var postId = _ref4.postId;

        return Connectors.getPostmeta(postId);
      },
      user: function user(_, _ref5) {
        var ID = _ref5.ID;

        return Connectors.getUser(ID);
      }
    },
    Category: {
      posts: function posts(category, args) {
        return Connectors.getPostsInCategory(category.term_id, args);
      }
    },
    Post: {
      layout: function layout(post) {
        return Connectors.getPostLayout(post.id);
      },
      byline: function byline(post) {
        return Connectors.getPostAudioByline(post.id);
      },
      sound_cloud_link: function sound_cloud_link(post) {
        return Connectors.getPostAudioLink(post.id);
      },
      date: function date(post) {
        return Connectors.getPostAudioDate(post.id);
      },
      info_byline: function info_byline(post) {
        return Connectors.getPostInfoByline(post.id);
      },
      submission_byline: function submission_byline(post) {
        return Connectors.getPostSubmissionByline(post.id);
      },
      submission_link: function submission_link(post) {
        return Connectors.getPostSubmissionLink(post.id);
      },
      submission_date: function submission_date(post) {
        return Connectors.getPostSubmissionDate(post.id);
      },
      queue: function queue(post) {
        return Connectors.getPlaylist(post.id);
      },
      event_month: function event_month(post) {
        return Connectors.getEventMonth(post.id);
      },
      event_date: function event_date(post) {
        return Connectors.getEventDate(post.id);
      },
      event_start_time: function event_start_time(post) {
        return Connectors.getEventStartTime(post.id);
      },
      event_end_time: function event_end_time(post) {
        return Connectors.getEventEndTime(post.id);
      },
      post_meta: function post_meta(post, keys) {
        return Connectors.getPostmeta(post.id, keys);
      },
      thumbnail: function thumbnail(post) {
        return Connectors.getPostThumbnail(post.id);
      },
      author: function author(post) {
        return Connectors.getUser(post.post_author);
      }
    },
    Postmeta: {
      connecting_post: function connecting_post(postmeta) {
        return Connectors.getPostById(postmeta.meta_value);
      }
    },
    Menu: {
      items: function items(menu) {
        return menu.items;
      }
    },
    MenuItem: {
      navitem: function navitem(menuItem) {
        return Connectors.getPostById(menuItem.linkedId);
      },
      children: function children(menuItem) {
        return menuItem.children;
      }
    },
    Mutation: {
      addUserInfo(_, args) {
        return Connectors.addUserInfo(args);
      },
    },
  };

  return Resolvers;
}
