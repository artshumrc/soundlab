import { gql, graphql } from 'react-apollo';

const pageDetailQuery = graphql(gql`
  query pageDetailQuery($slug: String){
    page(name: $slug){
      _id
      title
      content
			coverImage
    }
  }
`, {
	options: ({ params }) => ({
		variables: {
			slug: params.slug,
		}
	}),
	name: 'pageDetailQuery',
	props: props => ({
		page: props.pageDetailQuery.page,
	}),
});


export default pageDetailQuery;
