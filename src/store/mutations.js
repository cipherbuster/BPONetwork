import _ from "lodash";

export default {

  update(state, payload) {
      const index = _.findIndex(state.tasks, ["id", payload.id]);

      state.tasks[index][payload.type] = payload.value;
  },

  add(state) {
    var index = -Infinity;
    var indexTable = [];
    state.tasks.forEach( (e) => {
      indexTable.push(e.id);
      console.log(indexTable);
    });

    indexTable.forEach( (e) => {
      if(index < e){
        index = e
        console.log(index);
      };
    });

      var noweZadanie = {
      id: ++index,
      performer: "Proszę podać imię i nazwisko oddzielone spacją",
      description: "Proszę podać opis zadania",
      status: "initiated",
      deadline: "2021-05-28",
      priority: "0"
    };
    state.tasks.push(noweZadanie);
  },

   remove(state, payload) {
        const index = _.findIndex(state.tasks, ["id", payload.id]);

        state.tasks.splice(index, 1);
    }
};
