export default {
    remove({ commit, state }, payload) {
      // Tutaj można połączyć się za pomocą np. axios z serverem i usunąć
      // dane najpierw na serwerze, a po zwróceniu 200 usunąć dane. Dla zaznaczenia
      // że coś się dzieje ustawiłem Timeout 1s.
        setTimeout(() => {
            commit("remove", payload);
        }, 1000);

    },

    update({ commit, state }, payload) {
      // Tutaj można połączyć się za pomocą np. axios z serverem i zmienić
      // dane najpierw na serwerze, a po zwróceniu 200 zmienić dane.
      commit("update", payload);
    },

    add({ commit, state }, payload) {
      // Tutaj można połączyć się za pomocą np. axios z serverem i dodać zadanie z pustymi polami
      // najpierw na serwerze, a po zwróceniu 200 dodać pusty rekord do tabeli.
      commit ("add", payload);
    },

    removeCommentAction ({ commit, state }, payload) {
      // Tutaj można połączyć się za pomocą np. axios z serverem i usunąć
      // dane najpierw na serwerze, a po zwróceniu 200 usunąć dane. Dla zaznaczenia
      // że coś się dzieje ustawiłem Timeout 1s.
    setTimeout(() => {
        commit("removeCommentMutation", payload);
    }, 1000);
  },

  addCommentAction({ commit, state }, payload) {
    // Tutaj można połączyć się za pomocą np. axios z serverem i dodać komentarz z pustymi polami
    // najpierw na serwerze, a po zwróceniu 200 dodać pusty rekord do tabeli.
    commit ("addCommentMutation", payload);
  },

  updateCommentAction({ commit, state }, payload) {
    // Tutaj można połączyć się za pomocą np. axios z serverem i zmienić komentarz
    // najpierw na serwerze, a po zwróceniu 200 w tabeli.
    commit ("updateCommentMutation", payload);
  },

};
