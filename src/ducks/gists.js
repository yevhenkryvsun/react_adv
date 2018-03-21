import axios from 'axios'
import {Record} from 'immutable'

const gistsRecord = Record({
    loading: false,
    gists: [],
    error: null
});

export default function gistReducer(state = new gistsRecord(), action) {
    const {type, payload, error} = action;

    switch (type) {
        case 'GET_START':
            return state.set('loading', true);
        case 'GET_SUCCESS':
            return state
                .set('loading', true)
                .updateIn('gists', payload.gists);
        case 'GET_ERROR':
            return state
                .set('loading', false)
                .set('error', error)
        default:
            return state;
    }
};

export function getGists() {

    return dispatch => {
        dispatch({
            type: 'GET_START'
        });

        axios.get('https://api.github.com/users/yevsun/gists')
            .then(gists => dispatch({
                type: 'GET_SUCCESS',
                payload: {gists}
            }))
            .catch(error => dispatch({
                type: 'GET_ERROR',
                error
            }))
    }
}