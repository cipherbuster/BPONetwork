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
      const index = _.findIndex(state.tasks, ["id", payload.id]);
      const indexComment = _.findIndex(state.tasks[index].comments, ["idComments", payload.idComments]);
      state.tasks[index].comments.splice(indexComment, 1);
     }
};
