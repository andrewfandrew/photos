import { Auth } from "aws-amplify";

export const auth = {

    namespace: true,
    state: { user: null},
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {

    },
    getters: {

    }

}