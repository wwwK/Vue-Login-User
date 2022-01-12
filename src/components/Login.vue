<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>

        <div class="form-group">
            <label><b>Email:</b></label>
            <input type="email" class="form-control" placeholder="Email" v-model="email">
        </div><br>

        <div class="form-group">
            <label><b>Password:</b></label>
            <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div><br>

        <center><button class="btn btn-primary btn-block">Login</button></center>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: '',
        }
    },
    methods:{
       async handleSubmit(){
           const response = await axios.post('login', {      // That link is the new Fake JSON Place holder API(C:\Users\DELL\RegisterAPI)()
               email : this.email,
               password : this.password,
           })     
           console.log(response)
       }
    }
}
</script>