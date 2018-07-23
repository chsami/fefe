const sass = require('@stencil/sass');

exports.config = {
  namespace: 'fefe-components',
  bundles: [
    {components: ['fefe-dropdown']}
  ],
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  plugins: [
    sass()
  ]
};
