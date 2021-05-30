import _ from "lodash";

export default {
    task(state) {

        return id => {
            const index = _.findIndex(state.tasks, ["id", id]);
            return state.tasks[index];
        };

    },

    initiatedP0(state) {
        return state.tasks.filter(task => (task.status === "initiated" && task.priority === 0));
    },
    initiatedP1(state) {
        return state.tasks.filter(task => (task.status === "initiated" && task.priority === 1));
    },
    initiatedP2(state) {
        return state.tasks.filter(task => (task.status === "initiated" && task.priority === 2));
    },
    initiatedP3(state) {
        return state.tasks.filter(task => (task.status === "initiated" && task.priority === 3));
    },
    initiatedP4(state) {
        return state.tasks.filter(task => (task.status === "initiated" && task.priority === 4));
    },
    initiatedP5(state) {
        return state.tasks.filter(task => (task.status === "initiated" && task.priority === 5));
    },
    initiated(state) {
        return state.tasks.filter(task => task.status === "initiated");
    },


    inProgressP0(state) {
        return state.tasks.filter(task => (task.status === "inProgress" && task.priority === 0));
    },
    inProgressP1(state) {
        return state.tasks.filter(task => (task.status === "inProgress" && task.priority === 1));
    },
    inProgressP2(state) {
        return state.tasks.filter(task => (task.status === "inProgress" && task.priority === 2));
    },
    inProgressP3(state) {
        return state.tasks.filter(task => (task.status === "inProgress" && task.priority === 3));
    },
    inProgressP4(state) {
        return state.tasks.filter(task => (task.status === "inProgress" && task.priority === 4));
    },
    inProgressP5(state) {
        return state.tasks.filter(task => (task.status === "inProgress" && task.priority === 5));
    },
    inProgress(state) {
        return state.tasks.filter(task => task.status === "inProgress");
    },


    completedP0(state) {
        return state.tasks.filter(task => (task.status === "completed" && task.priority === 0));
    },
    completedP1(state) {
        return state.tasks.filter(task => (task.status === "completed" && task.priority === 1));
    },
    completedP2(state) {
        return state.tasks.filter(task => (task.status === "completed" && task.priority === 2));
    },
    completedP3(state) {
        return state.tasks.filter(task => (task.status === "completed" && task.priority === 3));
    },
    completedP4(state) {
        return state.tasks.filter(task => (task.status === "completed" && task.priority === 4));
    },
    completedP5(state) {
        return state.tasks.filter(task => (task.status === "completed" && task.priority === 5));
    },
    completed(state) {
        return state.tasks.filter(task => task.status === "completed");
    },


    acceptedP0(state) {
        return state.tasks.filter(task => (task.status === "accepted" && task.priority === 0));
    },
    acceptedP1(state) {
        return state.tasks.filter(task => (task.status === "accepted" && task.priority === 1));
    },
    acceptedP2(state) {
        return state.tasks.filter(task => (task.status === "accepted" && task.priority === 2));
    },
    acceptedP3(state) {
        return state.tasks.filter(task => (task.status === "accepted" && task.priority === 3));
    },
    acceptedP4(state) {
        return state.tasks.filter(task => (task.status === "accepted" && task.priority === 4));
    },
    acceptedP5(state) {
        return state.tasks.filter(task => (task.status === "accepted" && task.priority === 5));
    },
    accepted(state) {
        return state.tasks.filter(task => task.status === "accepted");
    },


    archivedP0(state) {
        return state.tasks.filter(task => (task.status === "archived" && task.priority === 0));
    },
    archivedP1(state) {
        return state.tasks.filter(task => (task.status === "archived" && task.priority === 1));
    },
    archivedP2(state) {
        return state.tasks.filter(task => (task.status === "archived" && task.priority === 2));
    },
    archivedP3(state) {
        return state.tasks.filter(task => (task.status === "archived" && task.priority === 3));
    },
    archivedP4(state) {
        return state.tasks.filter(task => (task.status === "archived" && task.priority === 4));
    },
    archivedP5(state) {
        return state.tasks.filter(task => (task.status === "archived" && task.priority === 5));
    },
    archived(state) {
        return state.tasks.filter(task => task.status === "archived");
    },

    priority0(state) {
        return state.tasks.filter(task => task.priority === 0);
    },
    priority1(state) {
        return state.tasks.filter(task => task.priority === 1);
    },
    priority2(state) {
        return state.tasks.filter(task => task.priority === 2);
    },
    priority3(state) {
        return state.tasks.filter(task => task.priority === 3);
    },
    priority4(state) {
        return state.tasks.filter(task => task.priority === 4);
    },
    priority5(state) {
        return state.tasks.filter(task => task.priority === 5);
    },

    // Getter do wyświetlania komentarzy

    comments(state) {

        return id => {
            const index = _.findIndex(state.tasks, ["id", id]);
            return state.tasks[index].comments;
        };

    },
};
