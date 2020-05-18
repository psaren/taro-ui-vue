import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import Package from '../package.json'
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import vue from 'rollup-plugin-vue'
const babelConfig = require('../babel.config')

const resolveFile = (path) => NodePath.resolve(__dirname, '..', path)

// const externalPackages = [
//   'react',
//   'react-dom',
//   '@tarojs/components',
//   '@tarojs/runtime',
//   '@tarojs/taro',
//   '@tarojs/react',
// ]
const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: true,
    },
    {
      file: resolveFile(Package.browser),
      format: 'umd',
      name: 'taro-ui',
      sourcemap: true,
      globals: {
        vue: 'Vue',
      },
    },
  ],
  // external: externalPackages,
  plugins: [
    vue(),
    babel({
      ...babelrc({
        config: { ...babelConfig },
        addModuleOptions: false,
        addExternalHelpersPlugin: false,
      }),
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
      extensions,
    }),
    RollupCommonjs({
      include: /\/node_modules\//,
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: NodePath.resolve(__dirname, 'tsconfig.rollup.json'),
    }),
    RollupCopy({
      targets: [
        {
          src: resolveFile('src/style'),
          dest: resolveFile('bundle'),
        },
      ],
    }),
  ],
}
