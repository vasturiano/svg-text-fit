import Kapsule from 'kapsule';
import * as d3 from 'd3';

export default Kapsule({
    props: {
        bbox: { default: { width: null, height: null} },
        passes: { default: 3 }
    },
    init(el, state) {
        state.el = d3.select(el);
    },
    update(state) {
        d3.range(state.passes).some(() => {
            const startSize = parseInt(state.el.style('font-size').split('px')[0]);
            const bbox = state.el.node().getBBox();
            const newSize = Math.floor(startSize * Math.min(state.bbox.width / bbox.width, state.bbox.height / bbox.height));

            if (newSize === startSize) return true; // Shortcut out

            state.el.style('font-size', newSize + 'px');
        });
    }
});