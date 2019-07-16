const path = require('path');
const pagesData = require('./src/pages.json');

// This is used to prevent these libraries from running when executing Gatsby build
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /sampleNPMLibraryThatUsesWindowOrDocument/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const sampleTemplate = path.resolve('./src/templates/sample.jsx');

  const promises = [];

  // Create pages dynamically using data from a JSON.
  // You can also make dynamic GraphQL queries here based on values from a JSON or GraphQL queries.
  // You can only write dynamic GraphQL queries here and on the page component. Please view
  // the page component to see how dynamic GraphQL queries work there.
  // The following is a sample of how dynamic GraphQL queries work here.
  // #region
  // pagesData.forEach((item) => {
  //   const query = graphql`
  //     {
  //       file(relativePath: { eq: "${item.content.image}" }) {
  //       childImageSharp {
  //         fluid(maxWidth: ${IMAGEWIDTH}, maxHeight: ${IMAGEHEIGHT}, quality: 100) {
  //           aspectRatio
  //           base64
  //           sizes
  //           src
  //           srcSet
  //         }
  //       }
  //     }
  //   }
  //   `
  // })
  // #endregion

  // Generally the source of data comes from a GraphQL query or JSON. GraphQL queries are
  // usually plugged in by source plugins from CMSes, like Ghost or WordPress.
  pagesData.forEach(({ name, slug }) => {
    promises.push(
      createPage({
        path: slug,
        component: sampleTemplate,
        context: {
          name,
        },
      }),
    );
  });

  return Promise.all(promises);
};
