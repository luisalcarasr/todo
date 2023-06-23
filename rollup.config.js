import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-import-css";
import copy from "rollup-plugin-copy";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
	// Visual Test
	{
		input: "src/main.ts",
		output: [
			{
				file: "dist/index.js",
				format: "iife",
				sourcemap: true
			}
		],

		plugins: [
			css(),
			//terser(), terser currently has a bug with modules: https://github.com/rollup/plugins/issues/1366
			commonjs(),
			nodeResolve({
				extensions: ['.mjs', '.js', '.json', '.node', '.styl', '.css']
			}),
			typescript({
				sourceMap: true,
				inlineSources: true
			}),
			copy({
				targets: [
				  { src: 'src/index.html', dest: 'dist' }
				]
			  })
		]
	}
];