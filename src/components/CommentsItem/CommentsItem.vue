<template>
    <tr>
        <td>{{ index + 1 }}.</td>
        <td>
            {{ comment.content }}
        </td>
        <td>
            <!-- <router-link :to="'/task/' + task.id" class="btn btn-primary">
                <i class="icon icon-edit"></i>
            </router-link> -->
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
        methods:{
          ...mapActions(["removeCommentAction"]),
          removeComment (idTask, idComments) {
            this.removeCommentAction({
              idTask: idTask,
              idComments: idComments
            });
          },
        }

    };

</script>
