<template>
  <div class="login">
    <h1>Sign up</h1>

    <div class="form">
      <div class="form-control">
        <label for="">First Name  </label>
        <input required type="email" v-model="firstname" placeholder="chinedu">    
      </div>
      <div class="form-control">
        <label for="">Last Name  </label>
        <input required type="text" v-model="lastname" placeholder="peter">    
      </div>
      <div class="form-control">
        <label for="">Phone  </label>
        <input required type="text" v-model="phone" placeholder="+234 5322 345">    
      </div>
      <div class="form-control">
        <label for="">Email  </label>
        <input required type="email" v-model="email" placeholder="chinedu.ohagwu@gmail.com">    
      </div>
      <div class="form-control">
        <label for="">Password  </label>
        <input required type="password" v-model="password" placeholder="password">    
      </div>
      <div class="form-control">
        <button type="submit" @click="register"> Register</button>
      </div>
      
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    }
  },
  methods : {
    register () {
      let user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', user)
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



