<template>
    <tr>
        <td>{{ index + 1 }}.</td>
        <td>
            <template v-if="editMode">
            <div class="form-group">
              <input type="text" class="form-input" :value="comment.content" @change="updateComment($event)"/>
            </div>
            </template>
            <template v-else>
                {{ comment.content }}
            </template>
        </td>
        <td>
          <button class="btn btn-primary" @click="editMode = !editMode">
              <i class="icon" :class="{ 'icon-edit': !editMode, 'icon-check': editMode }"></i>
          </button>
        </td>
        <td>
            <button class="btn btn-error" @click="removeComment(comment.idTask, comment.idComments)">
                <i class="icon icon-delete"></i>
            </button>
        </td>
    </tr>
</template>

<script>

    import { mapActions } from "vuex";

    export default {
        name: "CommentsItem",
        props: ['comment', 'index'],
        data() {
            return {
                editMode: false
            };
        },
        methods:{

          ...mapActions(["removeCommentAction"]),
          removeComment (idTask, idComments) {
            this.removeCommentAction({
              idTask: idTask,
              idComments: idComments
            });
          },

          ...mapActions(['updateCommentAction']),
          updateComment(e) {

            // Poniżej w pętlach forEach tworzę tablicę złożoną ze wszystkich pól id tablicy comments
            // oraz szukam maksymalnego id w tej tablicy, które później powiększone o 1 będzie id
            // dla nowego rekordu (obiektu zadania)
            var index = -1;
            var idT = this.comment.idTask;
            var idC = this.comment.idComments;

            for(var i = 0; this.$store.state.comments.length; i++) {
               if (this.$store.state.comments[i].idTask === idT && this.$store.state.comments[i].idComments === idC) {
                 index = i;
                 break;
               };
            };

            this.updateCommentAction({
                id: index,
                value: e.target.value
            })
        },

        }

    };

</script>
