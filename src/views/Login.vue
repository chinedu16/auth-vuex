<template>
  <div class="login">
    <h1>Sign in</h1>

    <div class="form">
      <div class="form-control">
        <label for="">Email  </label>
        <input required type="email" v-model="email" placeholder="chinedu.ohagwu@gmail.com">    
      </div>
      <div class="form-control">
        <label for="">Password  </label>
        <input required type="password" v-model="password" placeholder="password">    
      </div>
      <div class="form-control">
        <button type="submit" @click="Login"> Login</button>
      </div>
      
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  },
  methods : {
    Login () {
      let user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
      .then(() => this.$router.push('/about'))
      .catch(err => console.table(err))
    }
  }
}
</script>


<style>
.form-control {
  margin-top: 10px;
}
</style>



