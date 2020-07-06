import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import babel from 'rollup-plugin-babel'
// import babelrc from 'babelrc-rollup'
import replace from '@rollup/plugin-replace'
import VuePlugin from 'rollup-plugin-vue'
import jsx from 'acorn-jsx'
import { terser } from 'rollup-plugin-terser'
const babelConfig = require('../babel.config')
const DEV_ENV = process.env.LIB_ENV === 'dev'

// 这里需要将 @vue/babel-preset-jsx参数injectH设置为 false, 否则打包报错
// https://github.com/vuejs/jsx/issues/34
babelConfig.presets[0] = [
  '@vue/babel-preset-jsx',
  {
    injectH: false,
  },
]

const resolveFile = (path) => NodePath.resolve(__dirname, '..', path)

const externalPackages = ['vue', '@tarojs/components', '@tarojs/runtime', '@tarojs/taro']
const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: resolveFile('tests/index.ts'),
  output: [
    {
      file: resolveFile('tests/dist/index.cjs.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: resolveFile('tests/dist/index.esm.js'),
      format: 'es',
      sourcemap: true,
    },
    {
      file: resolveFile('tests/dist/index.umd.js'),
      format: 'umd',
      name: 'taro-ui',
      sourcemap: true,
      globals: {
        // vue: 'Vue',
        '@tarojs/components': 'components',
        '@tarojs/taro': 'Taro',
      },
    },
  ],
  external: externalPackages,
  acornInjectPlugins: [jsx()],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.VUE_ENV': JSON.stringify('browser'),
    }),
    VuePlugin(),
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
    !DEV_ENV && terser(),
    RollupTypescript({
      tsconfig: NodePath.resolve(__dirname, 'tsconfig.rollup.json'),
      include: ['*.ts+(|x)', '**/*.ts+(|x)'],
    }),
    babel({
      // ...babelrc({
      //   config: { ...babelConfig },
      //   addModuleOptions: false,
      //   addExternalHelpersPlugin: false,
      // }),
      extensions,
      exclude: 'node_modules/**',
      // babelHelpers: 'runtime',
      runtimeHelpers: true,
      externalHelpers: true,
      plugins: ['transform-vue-jsx'],
    }),
    RollupCopy({
      targets: [
        {
          src: '../src/style',
          dest: '../dist/',
        },
      ],
    }),
  ],
}
