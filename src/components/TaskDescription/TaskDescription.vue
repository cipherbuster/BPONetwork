<template>

    <div>

        <h1>Szczegóły zadania</h1>

        <div class="form-group col-3">
            <label class="form-label">Wykonawca</label>
            <input type="text" class="form-input" :value="task.performer" placeholder="Imię i nazwisko" @change="updateTask($event, 'performer')" />
        </div>

        <div class="form-group col-6">
            <label class="form-label">Opis</label>
            <textarea rows="10" class="form-input" :value="task.description" placeholder="Opis zadania" @change="updateTask($event, 'description')" />
        </div>

        <label class="form-label">Status</label>
        <select class="form-select col-3" :value="task.status" @change="updateTask($event, 'status')">
          <option value="wprowadzone">wprowadzone</option>
          <option value="wykonywane">wykonywane</option>
          <option value="zrobione">zrobione</option>
          <option value="zaakceptowane">zaakceptowane</option>
          <option value="zarchiwizowane">zarchiwizowane</option>
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

        <h1> Załączniki </h1>


        <template v-if="!editMode">
          <button class="btn btn-primary" @click="changeEditMode();">
              <i class="icon icon-plus"></i><b>&nbsp&nbspDODAJ ZAŁĄCZNIK</b>
          </button>
        </template>

        <template v-else>
          <div class="container">
            <div class="col-4">
              <input type="file" class="form-input" @input="addAttachment($event)"/>
            </div>
          </div>
        </template>


        <div v-if="isAttachments()">

          <table class="table table-striped table-hover">
              <thead>
                  <tr>
                      <th>Lp.</th>
                      <th>Załącznik</th>
                      <th>Usuń</th>
                  </tr>
              </thead>
              <tbody>
                  <AttachmentItem v-for="(attachment, index) in attachments"
                  :attachment="attachment"
                  :index="index"
                  :key="attachment.idAttachments"
                  />
              </tbody>
          </table>

        </div>
        <div class="toast" v-else> Brak załączników </div>

    </div>

</template>

<script>
    import CommentsItem from "../CommentsItem/CommentsItem";
    import AttachmentItem from "../Attachments/AttachmentItem";
    import store from "vuex";
    import { mapActions } from "vuex";

    export default {
        name: 'TaskDescription',
        props: ["id"],
        data() {
            return {
                editMode: false,
            };
        },
        computed: {
            task () {
                return this.$store.getters.task( Number(this.$route.params.id) );
            },
            comments () {
                return this.$store.getters.comments( Number(this.$route.params.id));
            },
            attachments () {
                return this.$store.getters.attachments ( Number(this.$route.params.id));
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

          changeEditMode () {
            this.editMode=!this.editMode;
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
          isAttachments: function () {
            const id = Number(this.$route.params.id);

            const index = _.findIndex(this.$store.state.attachments, ["idTask", id]);

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

            ...mapActions(["addAttachmentAction"]),
            addAttachment(event) {
              // Poniżej ustalam losowy numer id komentarza do przekazania.
              // W prawdziwej aplikacji po commitowaniu akcji i wstawieniu rekrodu do bazy danych,
              // z bazy danych można zwrócić automatycznie wygenerowane id. Tutaj sprawdzam jeszcze
              // w pętli czy id jest unikatowe;

              var index = 0;

              loop:
              while (true) {
              index = Math.round(Math.random()*1000+1);

                for (var i = 0; this.$store.state.attachments.length; i++) {
                  if (index === this.$store.state.attachments[i].idAttachments) {
                    break;
                  } else {
                    break loop;
                  }
                };
              }

              //Poniżej ustalam idTask dla obecnego zadania.

              const idT = this.$route.params.id;

              this.addAttachmentAction({
                indexAttachments: index,
                indexTask: idT,
                content: event.target.files[0].name
                // file: event.target.files[0] tak można przekazać plik i wysłać axios na server;
              });

            this.editMode=!this.editMode;

            },

        },
        components: {
          CommentsItem,
          AttachmentItem
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
    .toast{
      margin-top: 20px;
    }
</style>
