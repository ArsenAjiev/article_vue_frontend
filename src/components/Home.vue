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
    <h4>
    <router-link
        class="link-style"
     :to="{name: 'details', params:{id:article.id}}"
     >
     Read more ...
    </router-link>
    </h4>

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
      fetch('https://articleflask.herokuapp.com/get', {
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

.link-style {
  font-weight: bold;
  color: #0e1f51;
  text-decoration: none;
}

.link-style:hover {
  text-decoration: none;
  color: #1966dc;
}

</style>