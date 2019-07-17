<template>
  <div class="home">
    <p> Button generates a random data
      <span>
        <button v-on:click="randomItem()"> Random Item </button> 
      </span>
    </p>
    <div class="details"  align="center">
      <h2> Random Book Details</h2>
      <div class="content">
        <div class="details-card">
          <h3>{{bTitle}}</h3>
          <br>
          <img v-bind:src="getImageSrc()" />
          <h4>Subject</h4>
          <p>{{bSubj}}</p>
          <h4>Publisher</h4>
          <p>{{bPublisher}}</p>
          <h4>Author</h4>
          <p>{{bAuthor}}</p>
          <h4>Published Year</h4>
          <p>{{bYear}}</p>
        </div>
        <hr> 
      </div> <!-- content-->
    </div> <!--Details-->
  <br>
  <br>
  <br>
  </div>  <!-- home-->
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import  axios from 'axios';

  @Component
  export default class Random extends Vue {
    randomData: any;
    arrayRandom:any;
    final:any;
    bTitle:any;
    bImg:any;
    bSubj:any;
    bPublisher:any;
    bAuthor:string='';
    bYear:any;

    data(){
      return{
        randomData:null,
        arrayRandom:null,
        final:null,
        bTitle:null,
        bImg:null,
        bSubj:null,
        bPublisher:null,
        bAuthor:null,
        bYear:null,
      }
    }

    randomItem(){
      this.arrayRandom = Math.floor(Math.random() * this.randomData.length);
      this.final=this.randomData[this.arrayRandom];
      this.bTitle=this.final.title;
      this.bImg=this.final.cover_edition_key;
      this.bSubj=this.final.subject && this.final.subject.join(', ');
      this.bPublisher=this.final.publisher  && this.final.publisher.join(', ');
      this.bAuthor=this.final.author_name && this.final.author_name.join(', ');
      this.bYear=this.final.first_publish_year;
    }
    
    mounted () {
      axios
        .get("https://openlibrary.org/search.json?author='Jane'")
        .then(response => {this.randomData = response.data.docs})
    }



    getImageSrc() {
      return "http://covers.openlibrary.org/b/OLID/" + this.bImg + "-M.jpg";
    }

  } // closing of the vue


</script>

<style>
  h4{
    color: black;
  }
  .content {
    justify-content: center;
  }

  .details-card {
    max-width: 800px;
    padding: 1rem 2rem;
    background-color: gray;
  }

  .details-card p {
    padding-left: 2rem;
  }
</style>