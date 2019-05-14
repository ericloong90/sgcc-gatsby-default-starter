// This is used to prevent these libraries from running when executing Gatsby build
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /sampleNPMLibraryThatUsesWindowOrDocument/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
