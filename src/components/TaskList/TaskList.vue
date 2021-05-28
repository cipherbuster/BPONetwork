<template>
  <div>

    <div class="columns col-gapless">
      <div class="column col-3">
        <label class="form-label">Status</label>
        <select class="form-select" v-model="status">
          <option value="">all</option>
          <option value="initiated">initiated</option>
          <option value="inProgress">inProgress</option>
          <option value="completed">completed</option>
          <option value="accepted">accepted</option>
          <option value="archived">archived</option>
        </select>
      </div>

      <div class="column col-3">
        <label class="form-label">Priority</label>
        <select class="form-select" v-model="priority">
          <option value="all">all</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button :to="'/task/' + 12" class="btn btn-primary pos" @click="updateTask(12)">
          <i class="icon icon-plus"></i><b>&nbsp&nbspDODAJ ZADANIE</b>
      </button>
    </div>


    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Lp.</th>
                <th>Wykonawca</th>
                <th>Opis</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Priorytet</th>
                <th>Szczegóły</th>
                <th>Usuń</th>
            </tr>
        </thead>
        <tbody>
            <TaskItem v-for="(task, index) in tasks"
            :task="task"
            :index="index"
            :key="task.id"
            />
        </tbody>
    </table>



  </div>

</template>

<script>

    import TaskItem from "./TaskItem";
    import store from "vuex";
    import { mapMutations } from "vuex";

    export default {
        name: "TaskList",
        data() {
          return {
            status: "",
            priority: "all"
          }
        },
        computed:{
          tasks() {
            if(this.status === "initiated" && this.priority == 0){
              return this.$store.getters.initiatedP0;
            }else if (this.status === "initiated" && this.priority == 1){
              return this.$store.getters.initiatedP1;
            }else if (this.status === "initiated" && this.priority == 2){
              return this.$store.getters.initiatedP2;
            }else if (this.status === "initiated" && this.priority == 3){
              return this.$store.getters.initiatedP3;
            }else if (this.status === "initiated" && this.priority == 4){
              return this.$store.getters.initiatedP4;
            }else if (this.status === "initiated" && this.priority == 5){
              return this.$store.getters.initiatedP5;
            }else if(this.status === "initiated" && this.priority === "all"){
                return this.$store.getters.initiated;
            }

            else if(this.status === "inProgress" && this.priority == 0){
              return this.$store.getters.inProgressP0;
            }else if(this.status === "inProgress" && this.priority == 1){
              return this.$store.getters.inProgressP1;
            }else if(this.status === "inProgress" && this.priority == 2){
              return this.$store.getters.inProgressP2;
            }else if(this.status === "inProgress" && this.priority == 3){
              return this.$store.getters.inProgressP3;
            }else if(this.status === "inProgress" && this.priority == 4){
              return this.$store.getters.inProgressP4;
            }else if(this.status === "inProgress" && this.priority == 5){
              return this.$store.getters.inProgressP5;
            }else if(this.status === "inProgress" && this.priority === "all"){
                return this.$store.getters.inProgress;
            }

            else if(this.status === "completed" && this.priority == 0){
              return this.$store.getters.completedP0;
            }else if(this.status === "completed" && this.priority == 1){
              return this.$store.getters.completedP1;
            }else if(this.status === "completed" && this.priority == 2){
              return this.$store.getters.completedP2;
            }else if(this.status === "completed" && this.priority == 3){
              return this.$store.getters.completedP3;
            }else if(this.status === "completed" && this.priority == 4){
              return this.$store.getters.completedP4;
            }else if(this.status === "completed" && this.priority == 5){
              return this.$store.getters.completedP5;
            }else if(this.status === "completed" && this.priority === "all"){
                return this.$store.getters.completed;
            }

            else if(this.status === "accepted" && this.priority == 0){
              return this.$store.getters.acceptedP0;
            }else if(this.status === "accepted" && this.priority == 1){
                return this.$store.getters.acceptedP1;
            }else if(this.status === "accepted" && this.priority == 2){
                return this.$store.getters.acceptedP2;
            }else if(this.status === "accepted" && this.priority == 3){
                return this.$store.getters.acceptedP3;
            }else if(this.status === "accepted" && this.priority == 4){
                return this.$store.getters.acceptedP4;
            }else if(this.status === "accepted" && this.priority == 5){
                return this.$store.getters.acceptedP5;
            }else if(this.status === "accepted" && this.priority === "all"){
                return this.$store.getters.accepted;
            }

            else if(this.status === "archived" && this.priority == 0){
              return this.$store.getters.archivedP0;
            }else if(this.status === "archived" && this.priority == 1){
              return this.$store.getters.archivedP1;
            }else if(this.status === "archived" && this.priority == 2){
              return this.$store.getters.archivedP2;
            }else if(this.status === "archived" && this.priority == 3){
              return this.$store.getters.archivedP3;
            }else if(this.status === "archived" && this.priority == 4){
              return this.$store.getters.archivedP4;
            }else if(this.status === "archived" && this.priority == 5){
              return this.$store.getters.archivedP5;
            }else if(this.status === "archived" && this.priority === "all"){
              return this.$store.getters.archived;
            }

            else {
              return this.$store.state.tasks;
            }
          }
        },
        methods: {
            ...mapMutations(["update"]),
            updateTask(e, type) {
                var noweZadanie = {
                  id: 12,
                  performer: "Proszę podać imię i nazwisko oddzielone spacją",
                  description: "Proszę podać opis zadania",
                  status: "",
                  deadline: "2021-05-28",
                  priority: ""
                };
                this.tasks.push(noweZadanie);
            }
        },
        components: {
            TaskItem
        }
    };

</script>

<style scope>
 .pos {
   margin: 30px;
 }
</style>
