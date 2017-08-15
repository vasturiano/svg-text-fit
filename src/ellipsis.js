import Kapsule from 'kapsule';
import * as d3 from 'd3';

export default Kapsule({
    props: {
        maxWidth: { default: Infinity }
    },
    init(el, state) {
        state.el = d3.select(el);
    },
    update(state) {
        const origTxt = state.el.text(),
            el = state.el.node();
        let nChars = Math.round(origTxt.length*state.maxWidth/el.getBBox().width*1.2);  // Start above
        while(--nChars && state.maxWidth/el.getBBox().width<1){
            state.el.text(abbreviateText(origTxt, nChars));
        }

        //

        function abbreviateText(txt, maxChars) {
            return txt.length<=maxChars?txt:(
                txt.substring(0, maxChars*2/3)
                + '...'
                + txt.substring(txt.length - maxChars/3, txt.length)
            );
        }
    }
});