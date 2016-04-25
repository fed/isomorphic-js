module.exports = {
  assets: {
    expand: true,
    cwd: 'src/assets',
    src: '**',
    dest: 'dist/',
    flatten: true,
    filter: 'isFile'
  }
};
