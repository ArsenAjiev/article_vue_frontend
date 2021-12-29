<template>
<div class="container">
  <div class="card">
    <div v-for="article in articles" :key="article.pk">
  <div class="card-header">
    {{article.title}}
  </div>
  <div class="card-body">
    <h5 class="card-title">{{article.body}}</h5>
    <p class="card-text">Date: {{article.date}}</p>
    <a href="#" class="btn btn-primary">All article</a>
    <hr/>
  </div>
     </div>
</div>
</div>

</template>

<script>
export default {
name: "Home",
    data() {
    return {
      articles: []

    }
  },
  methods: {


  geaAllArticles() {
      fetch('http://127.0.0.1:5000/get', {
        method: "GET",
        headers:{
          "Content-Type": "application/json",

        }
      } )
      .then(resp => resp.json())
      .then((data) => {
        this.articles.push(...data)
        console.log(data)
      })
      .catch(error => console.log(error))
    }
  },
  created() {
    this.geaAllArticles()
  }
}

</script>

<style scoped>

</style>