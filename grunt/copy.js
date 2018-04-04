module.exports = {
  assets: {
    expand: true,
    cwd: 'src/assets',
    src: '**',
    dest: 'build',
    flatten: true,
    filter: 'isFile'
  },
  vendor: {
    expand: true,
    cwd: 'node_modules/reveal.js',
    src: '**',
    dest: 'build/reveal.js'
  }
};
