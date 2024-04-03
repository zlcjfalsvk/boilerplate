const { NxWebpackPlugin } = require('@nx/webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/api'),
  },
  plugins: [
    new NxWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      sourceMap: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: '../../libs/src/wasm/rs_bg.wasm',
          to: '.',
        },
      ],
    }),
  ],
};
