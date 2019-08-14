// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const theme = require('./src/data/theme.json')

module.exports = {
  siteName: theme.site_name,
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: 'projects/**/*.md',
        route: '/:slug'
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: []
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
