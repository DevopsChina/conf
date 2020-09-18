import { SET_HERO_SETTINGS, SET_VIEWPORT_SIZE, TOGGLE_VIDEO_DIALOG } from '../constants';
import { store } from '../store';
export const uiActions = {
    setViewportSize: (value) => {
        store.dispatch({
            type: SET_VIEWPORT_SIZE,
            value,
        });
    },
    toggleVideoDialog: (value) => {
        store.dispatch({
            type: TOGGLE_VIDEO_DIALOG,
            value,
        });
    },
    setHeroSettings: (value) => {
        store.dispatch({
            type: SET_HERO_SETTINGS,
            value,
        });
    },
};
//# sourceMappingURL=ui.js.map