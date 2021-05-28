<template>
    <tr>
        <td>{{ index + 1 }}.</td>
        <td>
            {{ task.performer }}
        </td>
        <td>
            {{ task.description }}
        </td>
        <td>
            {{ task.status }}
        </td>
        <td>
            {{ formatDate(task.deadline) }}
        </td>
        <td>
            {{ task.priority }}
        </td>
        <td>
            <router-link :to="{ name: 'TaskEdit', params: { id: task.id } }" class="btn btn-primary">
                <i class="icon icon-edit"></i>
            </router-link>
        </td>
        <td>
            <button class="btn btn-error" @click="removeTask(task.id)">
                <i class="icon icon-delete"></i>
            </button>
        </td>
    </tr>
</template>

<script>

    import { mapActions } from "vuex";

    export default {
        name: "TaskItem",
        props: ['task', 'index'],
        methods:{
          formatDate: function (deadline){
            var d = new Date(deadline);

            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var day = d.getDate();

            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;

            return year + "." + month + "." + day;
          },
          ...mapActions(["remove"]),
          removeTask(id) {
            this.remove({ id });
          }
        }
    };

</script>
