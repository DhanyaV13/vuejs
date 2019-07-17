<template>
  <div class="home">
    <div class="search" >
      <form v-on:submit.prevent="search">
        <div class="input-group">
          <md-field class="input-group-field">
            <label style="color:white">Search</label>
            <md-input v-model="query" style="-webkit-text-fill-color: blue !important"></md-input>
          </md-field>
          <div class="input-group-button">
            <md-button class="md-raised" v-on:click="search" style="height:40px">
              <md-icon>search</md-icon>
            </md-button>
          </div>
        </div>
      </form>
      <div v-show="searchResult">
        <h2>Search Results</h2>
        <md-table >
          <md-table-row>
            <md-table-head>Title</md-table-head>
            <md-table-head>Author</md-table-head>
            <md-table-head>Pub. Year</md-table-head>
            <md-table-head>View</md-table-head>
          </md-table-row>
          <md-table-row v-for="book in books" v-bind:key="book.key">
            <md-table-cell>{{book.title}}</md-table-cell>
            <md-table-cell>{{book.author_name && book.author_name.join(', ')}}</md-table-cell>
            <md-table-cell md-numeric>{{book.first_publish_year}}</md-table-cell>
            <md-table-cell><md-button v-on:click="viewDetails(book)"><md-icon>visibility</md-icon></md-button></md-table-cell>
          </md-table-row>
        </md-table>
        <br>
        <br>
        <br>
      </div> <!-- search result div ends -->
      <div v-show="!searchResult" style="text-align:center;color:white">
        <p>Enter any text and books containing the word would appear</p>
        <br>
        <img src="./../assets/searchingbook.jpg" width="600" height="500" >
        <br>
        <br>
      </div>
    </div>  <!--search div ends-->
  </div>  <!-- home div ends-->
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';

  @Component
  export default class Search extends Vue {
    baseUrl = 'http://openlibrary.org';
    books = [];
    query = '';
    searchResult:boolean=false;

    async search() {
      this.searchResult=true;
      const response = await axios.get(this.baseUrl + `/search.json?title=${this.query}`);
      this.books = await response.data.docs;
    }

    viewDetails(book: any) {
      this.$router.push({ path: 'details', query: {
        title: book.title,
        authors: book.author_name && book.author_name.join(', '),
        year: book.first_publish_year,
        cover_id: book.cover_edition_key
      }});
    }

  } // closing of the vue
</script>

<style>
.input-group {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.input-group-field {
  margin-right: 0;
  width: 30%;
  align-content: center;
  border-bottom: solid;
  border-color: rgb(137, 126, 236);

}

.input-group .input-group-button {
  margin-left: 0;
}

.input-group .md-raised {
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0;
}

.search{
  padding-top:50px;
  height:100%;
}

</style>
