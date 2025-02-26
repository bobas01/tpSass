const purgecss = require('@fullhuman/postcss-purgecss').default({
  content: ['./index.html'], 
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss,
  ],
}
