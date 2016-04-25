# Slides on Isomorphic (Universal) JavaScript

## Building

```
npm install
npm start
```

Slides will go live on [http://localhost:6789](http://localhost:6789).

Created using [reveal.js](https://github.com/hakimel/reveal.js/).

## Release Versions

To version and tag a release, move to `master` and run the [appropriate command](https://docs.npmjs.com/cli/version):

```
npm version major  # bump major version, eg. 1.0.2 -> 2.0.0
npm version minor  # bump minor version, eg. 0.1.3 -> 0.2.0
npm version patch  # bump patch version, eg. 0.0.1 -> 0.0.2
```

Make sure to push tags:

```
git push --tags origin master
```

## Semantic Versioning

Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make incompatible API changes,
2. `MINOR` version when you add functionality in a backwards-compatible manner, and
3. `PATCH` version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the `MAJOR.MINOR.PATCH` format.

See the [Semantic Versioning](http://semver.org/) specification for more information.
