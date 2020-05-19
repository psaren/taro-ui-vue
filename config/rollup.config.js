import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import Package from '../package.json'
import babel from '@rollup/plugin-babel'
import babelrc from 'babelrc-rollup'
import VuePlugin from 'rollup-plugin-vue'
import jsx from 'acorn-jsx'
const babelConfig = require('../babel.config')

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
        '@tarojs/components': 'components',
        '@tarojs/taro': 'Taro',
      },
    },
  ],
  external: externalPackages,
  acornInjectPlugins: [jsx()],
  plugins: [
    VuePlugin(),
    babel({
      ...babelrc({
        config: { ...babelConfig },
        addModuleOptions: false,
        addExternalHelpersPlugin: false,
      }),
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      plugins: ['transform-vue-jsx'],
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
      include: ['*.ts+(|x)', '**/*.ts+(|x)'],
    }),

    RollupCopy({
      targets: [
        {
          src: '../src/style',
          dest: '../bundle/',
        },
      ],
    }),
  ],
}
