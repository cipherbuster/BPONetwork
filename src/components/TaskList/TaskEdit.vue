<template>

    <div>

        <h1>Edycja użytkownika</h1>

        <div class="form-group col-3">
            <label class="form-label">Imię i nazwisko</label>
            <input type="text" class="form-input" :value="user.name" @change="updateUser($event, 'name')" />
        </div>

        <div class="form-group col-3">
            <label class="form-label">Wiek</label>
            <input type="number" class="form-input" :value="user.age" @change="updateUser($event, 'age')" />
        </div>

        <div class="form-group col-3">
            <label class="form-label">Płeć</label>
            <select class="form-select" @change="updateUser($event, 'gender')">
                <option value="male" :selected="user.gender == 'male'">męska</option>
                <option value="female" :selected="user.gender == 'female'">żeńska</option>
            </select>
        </div>

        <br><br>

        <button class="btn btn-primary" @click="$router.push({ name: 'users' })">Powrót</button>

    </div>

</template>

<script>

    import { mapMutations } from "vuex";

    export default {
        name: "UserEdit",
        props: ["id"],
        computed: {
            user() {
                return this.$store.getters.user( Number(this.id) )
            }
        },
        methods: {
            ...mapMutations(["update"]),
            updateUser(e, type) {
                this.update({
                    id: this.user.id,
                    type: type,
                    value: e.target.value
                })
            },
        },
        beforeRouterEnter(to, from, next) {

            if( window.localStorage.getItem("token") ) {
                next();
            } else {
                next({ name: "login" });
            }

        }
    };

</script>

<style scoped>

    h1 {
        margin: 50px 0;
    }

</style>
