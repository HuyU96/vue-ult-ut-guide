module.exports = {
  'instrument': false,
  'sourceMap': false,
  'include': [
    'src/**/*.{js,vue}'
  ],
  'extension': [
    '.js',
    '.vue'
  ],
  'reporter': [
    'text',
    'lcov'
  ],
  'require': [
    // '@babel/register'
  ],
  'all': true
}
