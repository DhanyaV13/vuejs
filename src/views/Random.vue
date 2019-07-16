<template>
<div id="app">
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
          <h3>{{btitle}}</h3>
          <br>
          <img v-bind:src="getImageSrc()" />
          <h4>Subject</h4>
          <p>{{bsubj}}</p>
          <h4>Publisher</h4>
          <p>{{bpublisher}}</p>
          <h4>Author</h4>
          <p>{{bauthor}}</p>
          <h4>Published Year</h4>
          <p>{{byear}}</p>
        </div>
        <hr> 
      </div> <!-- content-->
    </div> <!--Details-->
  </div>  <!-- home-->
  <br>
  <br>
  <br>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import  axios from 'axios';

@Component
export default class Random extends Vue {
  randomdata: any;
  arrayRandom:any;
  final:any;
  btitle:any;
  bimg:any;
  bsubj:any;
  bpublisher:any;
  bauthor:string='';
  byear:any;

  data(){
    return{
      randomdata:null,
      arrayRandom:null,
      final:null,
      btitle:null,
      bimg:null,
      bsubj:null,
      bpublisher:null,
      bauthor:null,
      byear:null,
    }
  }

  randomItem(){
    this.arrayRandom = Math.floor(Math.random() * this.randomdata.length);
    this.final=this.randomdata[this.arrayRandom];
    this.btitle=this.final.title;
    this.bimg=this.final.cover_edition_key;
    this.bsubj=this.final.subject && this.final.subject.join(', ');
    this.bpublisher=this.final.publisher  && this.final.publisher.join(', ');
    this.bauthor=this.final.author_name && this.final.author_name.join(', ');
    this.byear=this.final.first_publish_year;
  }
   
  mounted () {
    axios
      .get("https://openlibrary.org/search.json?author='Jane'")
      .then(response => {this.randomdata = response.data.docs})
  }



  getImageSrc() {
    return "http://covers.openlibrary.org/b/OLID/" + this.bimg + "-M.jpg";
  }

} // closing of the vue


</script>
<style>
.home{
  padding-top: 100px;
  color: white;
}

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

