module.exports = {
  assets: {
    expand: true,
    cwd: 'src/assets',
    src: '**',
    dest: 'build/',
    flatten: true,
    filter: 'isFile'
  }
};
