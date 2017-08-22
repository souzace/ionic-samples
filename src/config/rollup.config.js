var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var globals = require('rollup-plugin-node-globals');
var builtins = require('rollup-plugin-node-builtins');
var json = require('rollup-plugin-json');
var replace = require('rollup-plugin-replace');
var isProd  = (process.env.IONIC_ENV === 'prod');

// https://github.com/rollup/rollup/wiki/JavaScript-API

var rollupConfig = {
  /**
   * entry: The bundle's starting point. This file will
   * be included, along with the minimum necessary code
   * from its dependencies
   */
  entry: process.env.IONIC_APP_ENTRY_POINT,

  /**
   * sourceMap: If true, a separate sourcemap file will
   * be created.
   */
  sourceMap: true,

  /**
   * format: The format of the generated bundle
   */
  format: 'iife',

  /**
   * dest: the output filename for the bundle in the buildDir
   */
  dest: process.env.IONIC_OUTPUT_JS_FILE_NAME,

  /**
   * plugins: Array of plugin objects, or a single plugin object.
   * See https://github.com/rollup/rollup/wiki/Plugins for more info.
   */
  plugins: [
    builtins(),
    commonjs(),
    nodeResolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js']
    }),
    globals(),
    json(),
    replace({
        exclude: 'node_modules/**',
        // use the /config/environment-dev as the default import(!), no stub needed.
        // note we only replace the "last" part of the import statement so relative paths are maintained
        '/config/environment-dev' : ( isProd ? '/config/environment-prod' : '/config/environment-dev'),
    })
  ]

};



module.exports = rollupConfig;