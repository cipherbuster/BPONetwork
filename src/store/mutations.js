import _ from "lodash";

export default {
    // update(state, payload) {
    //     const index = _.findIndex(state.users, ["id", payload.id]);
    //
    //     state.users[index][payload.type] = payload.value;
    // },
    remove(state, payload) {
        const index = _.findIndex(state.tasks, ["id", payload.id]);

        state.tasks.splice(index, 1);
    }
};
