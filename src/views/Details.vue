<template>
  <div class="details">
    <h1>Book Details</h1>
    <div class="content">
      <md-card class="details-card">
        <h3>{{book.title}}</h3>
        <img v-bind:src="getImageSrc()" />
        <h4>Authors</h4>
        <p> {{book.authors}} </p>
        <h4>Published</h4>
        <p>{{book.year}}</p>
      </md-card>
    </div>
<br>
<br>
    <h3>Related items:</h3>
       <ul v-for="b in related.slice(6,9)" v-bind:key="b" >
        <li style="cursor:pointer;"  v-on:click="viewDetails(b)" >
        {{b.title}}
</li>
      </ul>
    <br>
    <br>
    <br>
   <!--  <div v-for="b in info.slice(6,9)" v-bind:key="b">
    <p>{{b.title}}</p>
    <br>
    <br>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import  axios from 'axios';

@Component
export default class Details extends Vue {
  book: any;
  related : any;
  baseURL = 'https://openlibrary.org';

 data(){
      return{
      related:null
      }
  }

   viewDetails(book: any) {
    this.$router.push({ path: 'details', query: {
      title: book.title,
      authors: book.author_name && book.author_name.join(', '),
      year: book.first_publish_year,
      cover_id: book.cover_edition_key
    }});
    location.reload();
}
  created() {
    this.book = {
      title: this.$route.query.title,
      cover_id: this.$route.query.cover_id,
      authors: this.$route.query.authors,
      year: this.$route.query.year
    };
  }

  getImageSrc() {
    return "http://covers.openlibrary.org/b/OLID/" + this.book.cover_id + "-M.jpg";
  }

mounted () {
    axios
      .get("https://openlibrary.org/search.json?title="+((this.book.title.split(" ")[1])))
      .then(response => (this.related = response.data.docs))
      
  }
}
</script>

<style>
.content {
  display: flex;
  justify-content: center;
}

.details-card {
  max-width: 800px;
  padding: 1rem 2rem;
}

.details-card p {
  padding-left: 2rem;
}
</style>