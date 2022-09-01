<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <div class="col-md-6 offset-md-4">
          <div class="card shadow-lg">
            <p class="h3 card-header">LOGIN </p>
            <div class="card-body">
            <div class="alert alert-danger" v-if="error">
                {{ error }}
              </div>
              <form action="" @submit.prevent="onLogin()">
                <div class="form-group">
                  <label class="form-label" for="email">Email</label>
                  <input
                    class="form form-control"
                    type="email"
                    name="email"
                    v-model.trim="email"
                  />
                  <div class="error text-muted" v-if="errors.email">
                    {{ errors.email }}
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label class="form-label" for="password">Password</label>
                  <input
                    class="form form-control"
                    type="password"
                    name="password"
                    v-model.trim="password"
                  />
                  <div class="error text-muted" v-if="errors.password">
                    {{ errors.password }}
                  </div>
                </div>
                <div class="my-3">
                  <button type="submit" class="btn btn-lg btn-outline-info shadow-none">
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/storeconstants';
// import { mapState } from 'vuex'
import { mapActions, mapMutations } from "vuex";
import SignUpValidations from "../services/SignUpValidations";

export default {
  name: "LogIn-vue",

  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: '',
    };
  },

  methods: {

    ...mapActions('auth', {
      login: LOGIN_ACTION
    }),

    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION
    }),
    
    async onLogin() {
      // check validation by checking the services folder for SignUpValidations.js and Validations.js files

      let validations = new SignUpValidations(this.email, this.password);

      this.errors = validations.checkValidations();

      if (this.errors.length) {
        return false;
      }
      this.error = ''


    this.showLoading(true)
      // login check 
      try{
        await this.login({email: this.email, password: this.password})} catch(e) {
          this.error = e
          this.showLoading(false)
        }
          this.showLoading(false)
          this.$router.push('/posts')
    },
  },
};
</script>

<style></style>
