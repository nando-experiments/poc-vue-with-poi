# POC [Vuejs](https://vuejs.org/) with [POI](https://poi.js.org/)

## Related projects

- [Webpack](https://webpack.js.org) - For bundling and code splitting
- [Offline Plugin](https://github.com/NekR/offline-plugin) - For offline support
- [Poi](https://github.com/egoist/poi) - For making me forget webpack
- [Vue.js](https://vuejs.org) - The unfancy framework for building web interfaces
- [xo](https://github.com/sindresorhus/xo) - For lint js and vue files
- [gh-pages](https://github.com/tschaub/gh-pages) - For deploy to gh-pages
- [node-sass](https://github.com/sass/node-sass) and [sass-loader](https://github.com/webpack-contrib/sass-loader) - For loader SASS in vue project

## Folder structure

- `src/`: App files
  - `index.js`: App entry js file
  - `index.html`: App entry HTML file
  - `App.vue`: Vue App file
- `static/`: empty folder
- `.babelrc`: Babel Config
- `.editorconfig`: Ensure consistent editor behaivor
- `.gitignore`: Ignore files we don't need to push
- `package.json`: App manifest
- `poi.config.js`: POI config file

## Development

- `yarn dev`: Run in development mode
- `yarn build`: Build in production mode
- `yarn lint`: Run eslint with XO
- `yarn deploy`: Run gh-pages deploy
- `yarn test`: No has tests -- lol

## License

MIT &copy; [nandomoreira.me](https://github.com/nandomoreirame)
