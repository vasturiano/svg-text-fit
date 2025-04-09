import resolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from "@rollup/plugin-terser";

import pkg from './package.json' with { type: 'json' };
const { name, homepage, version, dependencies } = pkg;

const umdConf = {
    format: 'umd',
    name: 'TextFit',
    banner: `// Version ${version} ${name} - ${homepage}`
};

export default [
    {
        input: 'src/index.js',
        output: [
            { // umd
                ...umdConf,
                file: `dist/${name}.js`,
                sourcemap: true,
            },
            { // minify
                ...umdConf,
                file: `dist/${name}.min.js`,
                plugins: [terser({
                    output: { comments: '/Version/' }
                })]
            }
        ],
        plugins: [
            resolve(),
            commonJs(),
            babel({ exclude: 'node_modules/**' })
        ]
    },
    {   // ES module
        input: 'src/index.js',
        output: [
            {
                format: 'es',
                file: `dist/${name}.mjs`
            }
        ],
        external: Object.keys(dependencies || {}),
        plugins: [babel()]
    }
];