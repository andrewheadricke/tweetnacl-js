import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default [
  {
    input: 'nacl.js',
    output: {
      file: "nacl.esm.min.js",
      format: 'esm'
    },
    treeshake: true,
    plugins: [commonjs(), nodeResolve({
      browser: true,
    }), terser()]
  },
  {
    input: 'nacl-fast.js',
    output: {
      file: "nacl-fast.esm.min.js",
      format: 'esm'
    },
    treeshake: true,
    plugins: [commonjs(), nodeResolve({
      browser: true,
    }), terser()]
  }
]