import _ from "lodash";
import VueRouter from 'vue-router';
import Vue from 'vue';


export default {

  update(state, payload) {
      const index = _.findIndex(state.tasks, ["id", payload.id]);

      state.tasks[index][payload.type] = payload.value;
  },

  add(state, payload) {

    // Poniżej usawiam datę, aby wstawić do tworzonego obiektu zadania
    var d = new Date();

    //Tworzę obiekt nowego zadania
    var newTask = {
      id: payload.index,
      performer: "",
      description: "",
      status: "initiated",
      deadline: d,
      priority: "0"
    };

    //wstawiam nowe zadanie do tabeli tasks w store
    Vue.set(state.tasks, state.tasks.length,newTask);
  },


   remove(state, payload) {
        const index = _.findIndex(state.tasks, ["id", payload.id]);

        state.tasks.splice(index, 1);
    },

    removeCommentMutation(state, payload) {
      const index = _.findIndex(state.comments, ["idTask", payload.idTask]);

      if (index >= 0) {

          for (var i = 0; state.comments.length; i++) {
            if (state.comments[i].idTask === payload.idTask && state.comments[i].idComments === payload.idComments) {
              state.comments.splice(i, 1); break;
            };
          }
      }
    },

    addCommentMutation(state, payload) {

      //Tworzę obiekt nowego zadania
      var newComment = {
        id: payload.indexComments,
        idTask: Number(payload.indexTask),
        content: "Wpisz treść"
      };


      //wstawiam nowe zadanie do tabeli comments w store

      Vue.set(state.comments, state.comments.length, newComment);

    },

    updateCommentMutation(state, payload) {
       Vue.set(state.comments[payload.id], "content", payload.value);
    },

    removeAttachmentMutation(state, payload) {
      const index = _.findIndex(state.attachments, ["idTask", payload.idTask]);
     console.log(index);
      if (index >= 0) {

          for (var i = 0; state.attachments.length; i++) {
            if (state.attachments[i].idTask === payload.idTask && state.attachments[i].idAttachments === payload.idAttachments) {
              state.attachments.splice(i, 1); break;
            };
          }
      }
    },

    addAttachmentMutation(state, payload) {

      //Tworzę obiekt nowego zadania
      var newComment = {
        id: payload.indexAttachments,
        idTask: Number(payload.indexTask),
        content: payload.content
      };


      //wstawiam nowe zadanie do tabeli comments w store

      Vue.set(state.attachments, state.attachments.length, newComment);

    },


};
