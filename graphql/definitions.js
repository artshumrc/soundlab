import Date from './types/date';

const Definitions = `
  type Menu {
    id: ID!
    name: String
    items: [MenuItem]
  }

  type MenuItem {
    id: ID!
    post_title: String
    linkedId: Int
    object_type: String
    order: Int
    navitem: Post
    children: [MenuItem]
  }

  enum MetaType {
    thumbnailID
    attachedFile
    reactLayout
    amazonInfo
		byline
		agent
		annotation
		location
		organizer
		pdf
		latitude
		longitude
		start_date
		end_date
		start_time
		end_time
		video
		audio
		image
		submission_byline
		submission_link
		submission_date
		queue
		date
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Category {
    term_id: Int!
    name: String
    slug: String
    posts(post_type: [String] = ["post", "audio_upload", "user_submission"], limit: Int, skip: Int): [Post]
  }

  type Post {
    id: Int
    post_title: String
    post_content: String
    post_excerpt: String
    post_status: String
    post_type: String
    post_name: String
    post_parent: Int
    menu_order: Int
    post_author: Int
    post_modified: String
    layout: Postmeta

		byline: Postmeta
		agent: Postmeta
		annotation: Postmeta
		location: Postmeta
		pdf: Postmeta
		organizer: Postmeta
		latitude: Postmeta
		longitude: Postmeta
		start_date:Postmeta
		end_date:Postmeta
		start_time:Postmeta
		end_time:Postmeta
		video:Postmeta
		audio:Postmeta
		image:Postmeta
		submission_date: Postmeta
		submission_link: Postmeta
		date: Postmeta
		submission_byline: Postmeta
		queue: Postmeta

    thumbnail: String
    post_meta(keys: [MetaType], after: String, first: Int, before: String, last: Int): Postmeta
    author: User
  }

  type Postmeta {
    id: Int
    meta_id: Int
    post_id: Int
    meta_key: String
    meta_value: String
    connecting_post: Post
  }

  type User {
    id: Int
    user_nicename: String
    user_email: String
    user_registered: String
    display_name: String
  }

  type Setting {
    uploads: String
    amazonS3: Boolean
  }

  type Query {
    settings: Setting
    posts(post_type: [String] = ["post", "audio_upload", "user_submission"], limit: Int, skip: Int): [Post]
    menus(name: String): Menu
    post(name: String, id: Int): Post
    category(term_id: Int): Category
    postmeta(post_id: Int, after: String, first: Int, before: String, last: Int): Postmeta
    user(id: Int): User
  }

  schema {
    query: Query
  }
`

export default [Definitions];
