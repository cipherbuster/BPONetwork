<template>

    <div>

        <h1>Szczegóły zadania</h1>

        <div class="form-group col-3">
            <label class="form-label">Wykonawca</label>
            <input type="text" class="form-input" :value="task.performer" @change="updateTask($event, 'performer')" />
        </div>

        <div class="form-group col-6">
            <label class="form-label">Opis</label>
            <textarea rows="10" class="form-input" :value="task.description" @change="updateTask($event, 'description')" />
        </div>

        <label class="form-label">Status</label>
        <select class="form-select col-3" :value="task.status" @change="updateTask($event, 'status')">
          <option value="initiated">initiated</option>
          <option value="inProgress">inProgress</option>
          <option value="completed">completed</option>
          <option value="accepted">accepted</option>
          <option value="archived">archived</option>
        </select>

      <div class="form-group col-6">
          <label class="form-label">Deadline</label>
          <input type="date" class="form-input col-6" :value="formatDate(task.deadline)" @change="updateTask($event, 'deadline')" />
      </div>

      <label class="form-label">Priorytet</label>
      <select class="form-select col-3" :value="task.priority" @change="updateTask($event, 'priority')">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <h1>Komentarze</h1>

      <button class="btn btn-primary" @click="addComment();">
          <i class="icon icon-plus"></i><b>&nbsp&nbspDODAJ KOMENTARZ</b>
      </button>

      <div v-if="isComments()">

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Lp.</th>
                    <th>Komentarz</th>
                    <th>Edytuj</th>
                    <th>Usuń</th>
                </tr>
            </thead>
            <tbody>
                <CommentsItem v-for="(comment, index) in comments"
                :comment="comment"
                :index="index"
                :key="comment.id"
                />
            </tbody>
        </table>

      </div>
      <div class="toast" v-else> Brak komentarzy </div>

        <br><br>

    </div>

</template>

<script>
    import CommentsItem from "../CommentsItem/CommentsItem";
    import store from "vuex";
    import { mapActions } from "vuex";

    export default {
        name: 'TaskDescription',
        props: ["id"],
        computed: {
            task () {
                return this.$store.getters.task( Number(this.$route.params.id) );
            },
            comments () {
                return this.$store.getters.comments( Number(this.$route.params.id));
            }
        },
        methods: {
          formatDate: function (deadline){
            var d = new Date(deadline);

            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var day = d.getDate();

            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;

            return year + "-" + month + "-" + day;
          },

          isComments: function () {
            const id = Number(this.$route.params.id);

            const index = _.findIndex(this.$store.state.comments, ["idTask", id]);

            if (index >= 0) {
              return true
            } else {
              return false
            }
          },

          ...mapActions(["addCommentAction"]),
          addComment() {
            // Poniżej ustalam losowy numer id komentarza do przekazania.
            // W prawdziwej aplikacji po commitowaniu akcji i wstawieniu rekrodu do bazy danych,
            // z bazy danych można zwrócić automatycznie wygenerowane id. Tutaj sprawdzam jeszcze
            // w pętli czy id jest unikatowe;

            var index = 0;

            loop:
            while (true) {
            index = Math.round(Math.random()*1000+1);

              for (var i = 0; this.$store.state.comments.length; i++) {
                if (index === this.$store.state.comments[i].idComments) {
                  break;
                } else {
                  break loop;
                }
              };
            }

            //Poniżej ustalam idTask dla obecnego zadania.

            const idT = this.$route.params.id;

            //Poniżej ustalam idComments dla obecnego komentarza.

            this.addCommentAction({
              indexComments: index,
              indexTask: idT
            });
          },


           ...mapActions(["update"]),
            updateTask(e, type) {
                this.update({
                    id: this.task.id,
                    value: e.target.value
                })
            },

        },
        components: {
          CommentsItem
        },

    };

</script>

<style scope>
    label {
      font-weight: bold;
    }
    h1 {
      margin-top: 50px;
    }
</style>
