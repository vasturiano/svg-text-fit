import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { name, homepage, version } from './package.json';

export default {
    input: 'src/index.js',
    output: [
        {
            format: 'umd',
            name: 'TextFit',
            file: 'dist/svg-text-fit.js',
            sourcemap: true
        }
    ],
    plugins: [
        nodeResolve(),
        commonJs(),
        babel({
            presets: [
                ["es2015", { "modules": false }]
            ],
            plugins: ["external-helpers"],
            babelrc: false
        })
    ],
    banner: `// Version ${version} ${name} - ${homepage}`
};