import {
    SET_TOKEN,
    SET_USERNAME
} from "../storeconstants";

export default {

    [SET_TOKEN](state, token) {
        state.token = token
    },
    [SET_USERNAME](state, username) {
        state.username = username
    },
}