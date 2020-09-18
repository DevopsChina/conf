import { speakersActions } from '../redux/actions';
import { store } from '../redux/store';
/* @polymerMixin */
export const SpeakersHoC = (subclass) => class extends subclass {
    constructor() {
        super(...arguments);
        this.speakers = [];
        this.speakersMap = {};
        this.speakersFetching = false;
        this.speakersFetchingError = {};
    }
    static get properties() {
        return {
            ...super.properties,
            speakers: Array,
            speakersMap: Object,
            speakersFetching: Boolean,
            speakersFetchingError: Object,
        };
    }
    stateChanged(state) {
        super.stateChanged(state);
        this.setProperties({
            speakers: state.speakers.list,
            speakersMap: state.speakers.obj,
            speakersFetching: state.speakers.fetching,
            speakersFetchingError: state.speakers.fetchingError,
        });
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.speakersFetching && (!this.speakers || !this.speakers.length)) {
            store.dispatch(speakersActions.fetchList());
        }
    }
};
//# sourceMappingURL=speakers-hoc.js.map