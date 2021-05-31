<template>
  <div>

    <div class="columns col-gapless">
      <div class="column col-3">
        <label class="form-label">Status</label>
        <select class="form-select" v-model="status">
          <option value="all">all</option>
          <option value="wprowadzone">wprowadzone</option>
          <option value="wykonywane">wykonywane</option>
          <option value="zrobione">zrobione</option>
          <option value="zaakceptowane">zaakceptowane</option>
          <option value="zarchiwizowane">zarchiwizowane</option>
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
      <button class="btn btn-primary pos" @click="$router.push('/task/' + addTask());">
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
    import { mapActions } from "vuex";

    export default {
        name: "TaskList",
        data() {
          return {
            status: "all",
            priority: "all"
          }
        },
        computed:{
          // Poniżej ustawiam wszystkie możliwości dla podwójnego filtru status & priority
          // i wywołuję odpowiedni getter.
          tasks() {
            if(this.status === "wprowadzone" && this.priority == 0){
              return this.$store.getters.wprowadzoneP0;
            }else if (this.status === "wprowadzone" && this.priority == 1){
              return this.$store.getters.wprowadzoneP1;
            }else if (this.status === "wprowadzone" && this.priority == 2){
              return this.$store.getters.wprowadzoneP2;
            }else if (this.status === "wprowadzone" && this.priority == 3){
              return this.$store.getters.wprowadzoneP3;
            }else if (this.status === "wprowadzone" && this.priority == 4){
              return this.$store.getters.wprowadzoneP4;
            }else if (this.status === "wprowadzone" && this.priority == 5){
              return this.$store.getters.wprowadzoneP5;
            }else if(this.status === "wprowadzone" && this.priority === "all"){
                return this.$store.getters.wprowadzone;
            }

            else if(this.status === "wykonywane" && this.priority == 0){
              return this.$store.getters.wykonywaneP0;
            }else if(this.status === "wykonywane" && this.priority == 1){
              return this.$store.getters.wykonywaneP1;
            }else if(this.status === "wykonywane" && this.priority == 2){
              return this.$store.getters.wykonywaneP2;
            }else if(this.status === "wykonywane" && this.priority == 3){
              return this.$store.getters.wykonywaneP3;
            }else if(this.status === "wykonywane" && this.priority == 4){
              return this.$store.getters.wykonywaneP4;
            }else if(this.status === "wykonywane" && this.priority == 5){
              return this.$store.getters.wykonywaneP5;
            }else if(this.status === "wykonywane" && this.priority === "all"){
                return this.$store.getters.wykonywane;
            }

            else if(this.status === "zrobione" && this.priority == 0){
              return this.$store.getters.zrobioneP0;
            }else if(this.status === "zrobione" && this.priority == 1){
              return this.$store.getters.zrobioneP1;
            }else if(this.status === "zrobione" && this.priority == 2){
              return this.$store.getters.zrobioneP2;
            }else if(this.status === "zrobione" && this.priority == 3){
              return this.$store.getters.zrobioneP3;
            }else if(this.status === "zrobione" && this.priority == 4){
              return this.$store.getters.zrobioneP4;
            }else if(this.status === "zrobione" && this.priority == 5){
              return this.$store.getters.zrobioneP5;
            }else if(this.status === "zrobione" && this.priority === "all"){
                return this.$store.getters.zrobione;
            }

            else if(this.status === "zaakceptowane" && this.priority == 0){
              return this.$store.getters.zaakceptowaneP0;
            }else if(this.status === "zaakceptowane" && this.priority == 1){
                return this.$store.getters.zaakceptowaneP1;
            }else if(this.status === "zaakceptowane" && this.priority == 2){
                return this.$store.getters.zaakceptowaneP2;
            }else if(this.status === "zaakceptowane" && this.priority == 3){
                return this.$store.getters.zaakceptowaneP3;
            }else if(this.status === "zaakceptowane" && this.priority == 4){
                return this.$store.getters.zaakceptowaneP4;
            }else if(this.status === "zaakceptowane" && this.priority == 5){
                return this.$store.getters.zaakceptowaneP5;
            }else if(this.status === "zaakceptowane" && this.priority === "all"){
                return this.$store.getters.zaakceptowane;
            }

            else if(this.status === "zarchiwizowane" && this.priority == 0){
              return this.$store.getters.zarchiwizowaneP0;
            }else if(this.status === "zarchiwizowane" && this.priority == 1){
              return this.$store.getters.zarchiwizowaneP1;
            }else if(this.status === "zarchiwizowane" && this.priority == 2){
              return this.$store.getters.zarchiwizowaneP2;
            }else if(this.status === "zarchiwizowane" && this.priority == 3){
              return this.$store.getters.zarchiwizowaneP3;
            }else if(this.status === "zarchiwizowane" && this.priority == 4){
              return this.$store.getters.zarchiwizowaneP4;
            }else if(this.status === "zarchiwizowane" && this.priority == 5){
              return this.$store.getters.zarchiwizowaneP5;
            }else if(this.status === "zarchiwizowane" && this.priority === "all"){
              return this.$store.getters.zarchiwizowane;
            }

            else if(this.status === "all" && this.priority == 0){
                return this.$store.getters.priority0;
            }else if(this.status === "all" && this.priority == 1){
                return this.$store.getters.priority1;
            }else if(this.status === "all" && this.priority == 2){
                return this.$store.getters.priority2;
            }else if(this.status === "all" && this.priority == 3){
                return this.$store.getters.priority3;
            }else if(this.status === "all" && this.priority == 4){
                return this.$store.getters.priority4;
            }else if(this.status === "all" && this.priority == 5){
                return this.$store.getters.priority5;
            }


            else {
              return this.$store.state.tasks;
            }
          },
        },
        methods: {
            ...mapActions(["add"]),
            addTask() {
              // Poniżej ustalam losowy numer id zadania do przekazania.
              // W prawdziwej aplikacji po commitowaniu akcji i wstawieniu rekrodu do bazy danych,
              // z bazy danych można zwrócić automatycznie wygenerowane id. Tutaj sprawdzam jeszcze
              // w pętli czy id jest unikatowe;

              var index = 0;

              loop:
              while (true) {
              index = Math.round(Math.random()*10000+1);

                for (var i = 0; this.$store.state.comments.length; i++) {
                  if (index === this.$store.state.comments[i].idComments) {
                    break;
                  } else {
                    break loop;
                  }
                };
             }

              this.add({
                index: index
              });
              return index;
            },
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
