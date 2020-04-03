/**
 * Adapted from https://github.com/reduxjs/redux/blob/master/rollup.config.js
 * Copyright (c) 2015-present Dan Abramov
 */

import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import includePaths from 'rollup-plugin-includepaths';

let includePathOptions = {
    include: {},
    paths: ['src'],
    external: [],
    extensions: ['.js', '.json', '.html']
};



const defaultConf = {
  
  external: ['is-dom', 'prop-types',
  'react','@geekagency/composite-js','@geekagency/gen-classes',
  'formik','react-input-mask','react-icons','react-icons/fa',
  'react-icons/md','react-icons/libs','react-loading','react-draggable','react-icons/lib'],
  plugins: [
    nodeResolve({
      mainFields: ['module', 'jsnext:main', 'main'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({ runtimeHelpers: true }),
    includePaths(includePathOptions),
  ],
}

export default [
  Object.assign({},defaultConf,{
    input: 'src/index.js',
    output: {
      file: 'dist/cjs/Lib.js',
      format: 'cjs',
      indent: false,
      sourcemap: false,
      exports: 'named',
    }
  })
];
