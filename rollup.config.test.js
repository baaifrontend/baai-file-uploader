import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default [
  {
    entry: 'src/baai-file-uploader.js',
    format: 'umd',
    moduleName: 'BaaiFileUploader',
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ],
    dest: 'test/dist/baai-file-uploader.js'
  },
  {
    entry: 'test/test.js',
    format: 'iife',
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ],
    dest: 'test/dist/test.js'
  }
]
