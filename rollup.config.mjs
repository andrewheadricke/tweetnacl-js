import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'nacl.js',
    output: {
      file: "nacl.esm.min.js",
      format: 'esm'
    },
    treeshake: true,
    plugins: [nodeResolve({
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
    plugins: [nodeResolve({
      browser: true,
    }), terser()]
  }
]