import uiReducer, { initialState } from "./uiReducer";
import * as actions from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseActionTypes';

describe('testing uiReducer', () => {
    it('returns the initial state when no action is passed', () => {
        expect(uiReducer(undefined, {}).toJS()).toEqual(initialState);
    });

    it('returns the initial state when SELECT_COURSE action is passed', () => {
        expect(uiReducer(undefined, { type: SELECT_COURSE }).toJS()).toEqual(initialState);
    });

    it('returns the right object when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        expect(uiReducer(undefined, { type: actions.DISPLAY_NOTIFICATION_DRAWER }).toJS()).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true,
        });
    })
})