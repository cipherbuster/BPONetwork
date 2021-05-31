import _ from "lodash";

export default {
    task(state) {

        return id => {
            const index = _.findIndex(state.tasks, ["id", id]);
            return state.tasks[index];
        };

    },

    wprowadzoneP0(state) {
        return state.tasks.filter(task => (task.status === "wprowadzone" && task.priority === 0));
    },
    wprowadzoneP1(state) {
        return state.tasks.filter(task => (task.status === "wprowadzone" && task.priority === 1));
    },
    wprowadzoneP2(state) {
        return state.tasks.filter(task => (task.status === "wprowadzone" && task.priority === 2));
    },
    wprowadzoneP3(state) {
        return state.tasks.filter(task => (task.status === "wprowadzone" && task.priority === 3));
    },
    wprowadzoneP4(state) {
        return state.tasks.filter(task => (task.status === "wprowadzone" && task.priority === 4));
    },
    wprowadzoneP5(state) {
        return state.tasks.filter(task => (task.status === "wprowadzone" && task.priority === 5));
    },
    wprowadzone(state) {
        return state.tasks.filter(task => task.status === "wprowadzone");
    },


    wykonywanesP0(state) {
        return state.tasks.filter(task => (task.status === "wykonywanes" && task.priority === 0));
    },
    wykonywanesP1(state) {
        return state.tasks.filter(task => (task.status === "wykonywanes" && task.priority === 1));
    },
    wykonywanesP2(state) {
        return state.tasks.filter(task => (task.status === "wykonywanes" && task.priority === 2));
    },
    wykonywanesP3(state) {
        return state.tasks.filter(task => (task.status === "wykonywanes" && task.priority === 3));
    },
    wykonywanesP4(state) {
        return state.tasks.filter(task => (task.status === "wykonywanes" && task.priority === 4));
    },
    wykonywanesP5(state) {
        return state.tasks.filter(task => (task.status === "wykonywanes" && task.priority === 5));
    },
    wykonywanes(state) {
        return state.tasks.filter(task => task.status === "wykonywanes");
    },


    zrobioneP0(state) {
        return state.tasks.filter(task => (task.status === "zrobione" && task.priority === 0));
    },
    zrobioneP1(state) {
        return state.tasks.filter(task => (task.status === "zrobione" && task.priority === 1));
    },
    zrobioneP2(state) {
        return state.tasks.filter(task => (task.status === "zrobione" && task.priority === 2));
    },
    zrobioneP3(state) {
        return state.tasks.filter(task => (task.status === "zrobione" && task.priority === 3));
    },
    zrobioneP4(state) {
        return state.tasks.filter(task => (task.status === "zrobione" && task.priority === 4));
    },
    zrobioneP5(state) {
        return state.tasks.filter(task => (task.status === "zrobione" && task.priority === 5));
    },
    zrobione(state) {
        return state.tasks.filter(task => task.status === "zrobione");
    },


    zaakceptowaneP0(state) {
        return state.tasks.filter(task => (task.status === "zaakceptowane" && task.priority === 0));
    },
    zaakceptowaneP1(state) {
        return state.tasks.filter(task => (task.status === "zaakceptowane" && task.priority === 1));
    },
    zaakceptowaneP2(state) {
        return state.tasks.filter(task => (task.status === "zaakceptowane" && task.priority === 2));
    },
    zaakceptowaneP3(state) {
        return state.tasks.filter(task => (task.status === "zaakceptowane" && task.priority === 3));
    },
    zaakceptowaneP4(state) {
        return state.tasks.filter(task => (task.status === "zaakceptowane" && task.priority === 4));
    },
    zaakceptowaneP5(state) {
        return state.tasks.filter(task => (task.status === "zaakceptowane" && task.priority === 5));
    },
    zaakceptowane(state) {
        return state.tasks.filter(task => task.status === "zaakceptowane");
    },


    zarchiwizowaneP0(state) {
        return state.tasks.filter(task => (task.status === "zarchiwizowane" && task.priority === 0));
    },
    zarchiwizowaneP1(state) {
        return state.tasks.filter(task => (task.status === "zarchiwizowane" && task.priority === 1));
    },
    zarchiwizowaneP2(state) {
        return state.tasks.filter(task => (task.status === "zarchiwizowane" && task.priority === 2));
    },
    zarchiwizowaneP3(state) {
        return state.tasks.filter(task => (task.status === "zarchiwizowane" && task.priority === 3));
    },
    zarchiwizowaneP4(state) {
        return state.tasks.filter(task => (task.status === "zarchiwizowane" && task.priority === 4));
    },
    zarchiwizowaneP5(state) {
        return state.tasks.filter(task => (task.status === "zarchiwizowane" && task.priority === 5));
    },
    zarchiwizowane(state) {
        return state.tasks.filter(task => task.status === "zarchiwizowane");
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

          const index = _.findIndex(state.comments, ["idTask", id]);

          if (index >= 0) {

              var hCommentsArray = [];

              for (var i = 0; i < state.comments.length; i++) {
                if (state.comments[i].idTask == id) {
                hCommentsArray.push(state.comments[i]);
               };
              }
            };

            return hCommentsArray;
        };

    },

    // Getter do wyświetlania załączników

    attachments(state) {

        return id => {

          const index = _.findIndex(state.attachments, ["idTask", id]);

          if (index >= 0) {

              var hAttachmentArray = [];

              for (var i = 0; i < state.attachments.length; i++) {
                if (state.attachments[i].idTask == id) {
                hAttachmentArray.push(state.attachments[i]);
               };
              }
            };

            return hAttachmentArray;
        };

    }
};
