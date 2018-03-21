import axios from 'axios'

const gistsRecord = {
    loading: false,
    gists: [],
    error: null
};

export default function gistReducer(state = gistsRecord, action) {
    const {type, payload, error} = action;

    switch (type) {
        case 'GET_START':
            return {...state, loading: true};
        case 'GET_SUCCESS':
            return {...state, loading: false, gists: payload.gists}
        case 'GET_ERROR':
            return {...state, loading: false, error}
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
            .then(({data}) => dispatch({
                type: 'GET_SUCCESS',
                payload: {gists: data}
            }))
            .catch(error => dispatch({
                type: 'GET_ERROR',
                error
            }))
    }
}