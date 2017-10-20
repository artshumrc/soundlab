export default function WordExpressResolvers(Connectors, publicSettings) {
  const Resolvers = {
    Query: {
      settings() {
        return publicSettings;
      },
      category(_, _ref) {
        var term_id = _ref.term_id;

        return Connectors.getCategoryById(term_id);
      },
      posts(_, args) {
        return Connectors.getPosts(args);
      },
      menus(_, _ref2) {
        var name = _ref2.name;

        return Connectors.getMenu(name);
      },
      post(_, _ref3) {
        var name = _ref3.name,
            id = _ref3.id;

        if (name) {
          return Connectors.getPostByName(name, id);
        }
				
        return Connectors.getPostById(id);
      },
      postmeta(_, _ref4) {
        var postId = _ref4.postId;

        return Connectors.getPostmeta(postId);
      },
      user(_, _ref5) {
        var ID = _ref5.ID;

        return Connectors.getUser(ID);
      }
    },
    Category: {
      posts(category, args) {
        return Connectors.getPostsInCategory(category.term_id, args);
      }
    },
    Post: {
      layout(post) {
        return Connectors.getPostLayout(post.id);
      },
      byline(post) {
        return Connectors.getPostAudioByline(post.id);
      },
      sound_cloud_link(post) {
        return Connectors.getPostAudioLink(post.id);
      },
      date(post) {
        return Connectors.getPostAudioDate(post.id);
      },
      info_byline(post) {
        return Connectors.getPostInfoByline(post.id);
      },
      submission_byline(post) {
        return Connectors.getPostSubmissionByline(post.id);
      },
      submission_link(post) {
        return Connectors.getPostSubmissionLink(post.id);
      },
      submission_date(post) {
        return Connectors.getPostSubmissionDate(post.id);
      },
      queue(post) {
        return Connectors.getPlaylist(post.id);
      },
      event_month(post) {
        return Connectors.getEventMonth(post.id);
      },
      event_date(post) {
        return Connectors.getEventDate(post.id);
      },
      event_start_time(post) {
        return Connectors.getEventStartTime(post.id);
      },
      event_end_time(post) {
        return Connectors.getEventEndTime(post.id);
      },
      post_meta(post, keys) {
        return Connectors.getPostmeta(post.id, keys);
      },
      thumbnail(post) {
        return Connectors.getPostThumbnail(post.id);
      },
      author(post) {
        return Connectors.getUser(post.post_author);
      }
    },
    Postmeta: {
      connecting_post(postmeta) {
        return Connectors.getPostById(postmeta.meta_value);
      }
    },
    Menu: {
      items(menu) {
        return menu.items;
      }
    },
    MenuItem: {
      navitem(menuItem) {
        return Connectors.getPostById(menuItem.linkedId);
      },
      children(menuItem) {
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
