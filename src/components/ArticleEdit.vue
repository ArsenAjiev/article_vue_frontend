<template>
  <div class="container mt-4">

    <form @submit.prevent="updateArticle">
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

    <button class="btn btn-success mt-4"> Update article</button>
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
  name: "ArticleEdit",
    props: {
    id: {
      type:[Number, String],
      required:true
    }
  },
   data() {
    return{
      title: null,
      body: null,
      error: null,
    }
  },

  methods: {
    updateArticle(){
      if(!this.title || !this.body) {
          this.error = "Please add all fields"
          console.warn("no data")
        }
        else {
          console.warn("data exist")
        fetch(`https://articleflask.herokuapp.com/put/${this.id}`, {
        method: "PUT",
        headers:{
          "Content-Type": "application/json",

        },
        body: JSON.stringify({title: this.title, body:this.body})
      } )
      .then(resp => resp.json())
      .then(() => {
        this.$router.push('/')
         })
      .catch(error => console.log(error))
      }

    }


  },

  beforeRouteEnter(to, from, next) {
    if(to.params.id !== undefined) {
      fetch(`https://articleflask.herokuapp.com/get/${to.params.id}`, {
        method: "GET",
        headers:{
          "Content-Type": "application/json",

        }
      } )
      .then(resp => resp.json())
      .then((data) => {
        return next(vm=> (vm.title=data.title, vm.body=data.body ))

      })

    } else {
      return next
    }
  }

}
</script>

<style scoped>

</style>