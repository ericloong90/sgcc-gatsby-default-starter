import React from 'react';
import PropTypes from 'prop-types';

const Sample = ({ pageContext: { name } }) => (
  <div>
    <div>{name}</div>
  </div>
);

Sample.propTypes = {
  pageContext: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

// Here's where you would make dynamic GraphQL queries on generated pages.
// Note that in order for this to work, you must have your template components be placed
// in the src/templates/ folder
// Using dynamic data passed down via pageContext, you can access these values here inside
// the GraphQL query.
// Note the presence of $ signs. These indicates the usage of variables, extracted directly from
// pageContext passed down to this particular template component. No destructuring is required
// Just values directly extracted from pageContext. From this point on, create maybe React Context
// or whatever to hold the data, so that you can access this data on this page component
// no matter how nested your components are.

// export const query = graphql`
//   query FilteredPostsWithTag($slug: String) {
//     allGhostPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
//       edges {
//         node {
//           excerpt
//           slug
//           title
//           feature_image
//           published_at
//           time_to_read
//           primary_author {
//             id
//             name
//             profile_image
//           }
//           tags {
//             name
//           }
//         }
//       }
//     }
//   }
// `

export default Sample;
