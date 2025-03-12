// @ts-check
// 🚨
// 🚨 CHANGES TO THIS FILE WILL BE OVERRIDDEN
// 🚨
import { app } from '@technobuddha/project';

/**
 * @import { type Linter } from 'eslint';
 * @type {Linter.Config[]}
 */
const config = [
  // src/tsconfig.code.json
  app.lint({
    files: ['src/*.ts'],
    ignores: ['src/*.test.ts'],
    environment: 'browser',
    tsConfig: 'src/tsconfig.code.json',
  }),
  // src/tsconfig.json
  app.lint({
    files: ['src/*.test.ts'],
    ignores: [],
    environment: 'node',
    tsConfig: 'src/tsconfig.json',
    jest: true,
  }),
  // tsconfig.json
  app.lint({ files: ['*.config.js'], ignores: [], environment: 'node' }),
  // tsconfig.json
  app.lint({ files: ['*.config.ts'], ignores: [], environment: 'node' }),
  // tsconfig.json
  app.lint({ files: ['*.setup.ts'], ignores: [], environment: 'node' }),
];

export default config;
