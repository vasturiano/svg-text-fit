import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: [
        {
            format: 'es',
            file: 'dist/svg-text-fit.mjs'
        }
    ],
    plugins: [
        babel({
            presets: [
                ["es2015", { "modules": false }]
            ],
            plugins: ["external-helpers"],
            babelrc: false
        })
    ]
};