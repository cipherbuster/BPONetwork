<template>
    <tr>
        <td> {{ index + 1 }}. </td>
        <td>
            {{ attachment.content }}

        </td>

        <td>
            <button class="btn btn-error" @click="removeAttachment(attachment.idTask, attachment.idAttachments)">
                <i class="icon icon-delete"></i>
            </button>
        </td>
    </tr>
</template>

<script>

    import { mapActions } from "vuex";

    export default {
        name: "AttachmentItem",
        props: ['attachment', 'index'],
        methods:{

          ...mapActions(["removeAttachmentAction"]),
          removeAttachment(idTask, idAttachments) {
            this.removeAttachmentAction({
              idTask: idTask,
              idAttachments: idAttachments
            });
          },

        }

    };

</script>
