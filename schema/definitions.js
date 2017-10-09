"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Definitions = "\n  type Menu {\n    id: ID!\n    name: String\n    items: [MenuItem]\n  }\n\n  type MenuItem {\n    id: ID!\n    post_title: String\n    linkedId: Int\n    object_type: String\n    order: Int\n    navitem: Post\n    children: [MenuItem]\n  }\n\n  enum MetaType {\n    thumbnailID\n    attachedFile\n    reactLayout\n    amazonInfo\n   byline\n  info_byline\n  submission_byline\n  sound_cloud_link\n   submission_link\n   submission_date\n   queue\n   event_month\n   event_date\n   date\n   }\n\n  type PageInfo {\n    hasNextPage: Boolean!\n    hasPreviousPage: Boolean!\n    startCursor: String\n    endCursor: String\n  }\n\n  type Category {\n    term_id: Int!\n    name: String\n    slug: String\n    posts(post_type: String = \"post\", limit: Int, skip: Int): [Post]\n  }\n\n  type Post {\n    id: Int\n    post_title: String\n    post_content: String\n    post_excerpt: String\n    post_status: String\n    post_type: String\n    post_name: String\n    post_parent: Int\n    menu_order: Int\n    post_author: Int\n    layout: Postmeta\n   byline: Postmeta\n    sound_cloud_link: Postmeta\n   submission_date: Postmeta\n   submission_link: Postmeta\n   date: Postmeta\n   info_byline: Postmeta\n   event_start_time: Postmeta\n   event_end_time: Postmeta\n   submission_byline: Postmeta\n   queue: Postmeta\n   event_month: Postmeta\n   event_date: Postmeta\n   thumbnail: String\n    post_meta(keys: [MetaType], after: String, first: Int, before: String, last: Int): Postmeta\n    author: User\n  }\n\n  type Postmeta {\n    id: Int\n    meta_id: Int\n    post_id: Int\n    meta_key: String\n    meta_value: String\n    connecting_post: Post\n  }\n\n  type User {\n    ID: Int\n    user_nicename: String\n    user_email: String\n    user_registered: String\n    display_name: String\n  }\n\n  input InputUser { ID: Int\n display_name: String\n user_email: String\n}\n\n   type Setting {\n    uploads: String\n    amazonS3: Boolean\n  }\n\n  type Query {\n    settings: Setting\n    posts(post_type: String = \"post\", limit: Int, skip: Int): [Post]\n    menus(name: String): Menu\n    post(name: String, id: Int): Post\n    category(term_id: Int): Category\n    postmeta(post_id: Int, after: String, first: Int, before: String, last: Int): Postmeta\n    user(ID: Int): User\n  }\n\n  schema {\n    query: Query\n mutation: Mutation }\n   type Mutation {addUserInfo(ID:Int\n  display_name: String\n  user_email: String): User}";

exports.default = [Definitions];
