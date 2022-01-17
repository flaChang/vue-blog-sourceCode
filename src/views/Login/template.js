import {mapActions} from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onLogin() {setTimeout(()=>{
      this.login({username: this.username, password: this.password})
        .then(() => {
          this.$router.push({path: '/'}).then(()=>console.log("hi"))
        })
    })
    }
  }


}