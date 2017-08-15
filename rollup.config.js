import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/index.js',
    dest: 'dist/svg-text-fit.js',
    format: 'umd',
    moduleName: 'TextFit',
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        })
    ]
};