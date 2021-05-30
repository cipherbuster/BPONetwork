import _ from "lodash";
import VueRouter from 'vue-router';


export default {

  update(state, payload) {
      const index = _.findIndex(state.tasks, ["id", payload.id]);

      state.tasks[index][payload.type] = payload.value;
  },

  add(state, payload) {

    // Poniżej usawiam datę, aby wstawić do tworzonego obiektu zadania
    var d = new Date();

    //Tworzę obiekt nowego zadania
    var noweZadanie = {
      id: payload.index,
      performer: "Proszę podać imię i nazwisko oddzielone spacją",
      description: "Proszę podać opis zadania",
      status: "initiated",
      deadline: d,
      priority: "0"
    };

    //wstawiam nowe zadanie do tabeli tasks w store
    state.tasks.push(noweZadanie);
  },


   remove(state, payload) {
        const index = _.findIndex(state.tasks, ["id", payload.id]);

        state.tasks.splice(index, 1);
    },

    removeCommentMutation(state, payload) {
      const index = _.findIndex(state.comments, ["idTask", payload.idTask]);

      if (index >= 0) {

          for (var i = 0; state.comments.length; i++) {
              if (state.comments[i].idTask == payload.idTask && state.comments[i].idComments == payload.idComments) {
              state.comments.splice(i, 1); return;
            };
        }
      }
    }
};
