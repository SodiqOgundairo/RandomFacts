<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <div class="col-md-6 offset-md-4">
          <div class="card shadow-lg">
            <p class="h3 card-header">SIGN UP</p>
            <div class="card-body">
              <div class="alert alert-danger" v-if="error">
                {{ error }}
              </div>
              <form action="" @submit.prevent="onSignup()">
                <div class="form-group">
                  <label class="form-label" for="email">Email</label>
                  <input
                    class="form form-control"
                    type="email"
                    name="email"
                    v-model.trim="email"
                  />
                  <div class="error text-muted" v-if="errors.password">
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
                  <button
                    type="submit"
                    class="btn btn-lg btn-outline-secondary shadow-none`"
                  >
                    SIGN UP
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

export default {
  name: "SignUp-vue",

  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
    };
  },

 
};
</script>

<style></style>
