import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
		input: 'src/index.ts',
		output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      },
    ],
		plugins: [
			nodeResolve(),
      commonjs(),
			typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: 'dist',
      }),
		],
    external: [
      'react',
      'react-dom',
      'cmdk',
      'react-day-picker',
      '@radix-ui/react-*',
    ],
	})