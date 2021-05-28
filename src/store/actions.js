export default {
    remove({ commit, state }, payload) {
      // Tutaj można połączyć się za pomocą np. axios z serverem i usunąć
      // dane najpierw na serwerze, a po zwróceniu 200 usunąć dane. Dla zaznaczenia
      // że coś się dzieje ustawiłem Timeout 1s.
        setTimeout(() => {
            commit("remove", payload);
        }, 1000);

    }
};
