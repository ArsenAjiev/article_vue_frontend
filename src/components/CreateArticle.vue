<template>
<h1> create article</h1>

  <div class="container mt-4">

    <form @submit.prevent="insertArticle">
     <input
         type="text"
         class="form-control"
         placeholder="Enter title"
         v-model="title"
     >
    <br/>

    <textarea
      rows="8"
      placeholder="enter body"
      class="form-control"
      v-model="body"
    >
    </textarea>

    <button class="btn btn-success mt-4"> Publish article</button>
    </form>

        <div v-if="error"
       class="alert alert-warning alert-dismissible fade show mt-5"
       role="alert"
       >
    <strong>{{error}}</strong>
    </div>

  </div>
</template>

<script>

export default {
  name: "CreateArticle",

  data() {
    return{
      title: null,
      body: null,
      error: null,
    }
  },

  methods: {
    insertArticle() {
       if(!this.title || !this.body) {
          this.error = "Please add all fields"
          console.warn("no data")
        }
        else {
          console.warn("data exist")
        fetch('http://127.0.0.1:5000/post', {
        method: "POST",
        headers:{
          "Content-Type": "application/json",

        },
        body: JSON.stringify({title: this.title, body:this.body})
      } )
      .then(resp => resp.json())
      .then(() => {
        console.log("123")
        this.$router.push({
          name: 'home'
        })

      })
      .catch(error => console.log(error))
      }
    }
  }
}
</script>

<style scoped>

</style>