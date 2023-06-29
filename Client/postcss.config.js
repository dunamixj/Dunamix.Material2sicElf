const purgecss = require('@fullhuman/postcss-purgecss')

const purgecssConfig = purgecss({
  content: ['/wwwroot/Themes/Dunamix.Material2SicElf/js/mdb.min.js'],
  css: ['/wwwroot/Themes/Dunamix.Material2SicElf/css/*.css'],
})

module.exports = ({ env }) => ({
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    env === 'production' ? purgecssConfig : false,
  ]
})