<template>
<div id="app">
  <div class="home">
    <p> Button generates a random data
      <span>
        <button v-on:click="randomitem()"> Random Item </button> 
      </span>
    </p>
    <div class="details">
      <h2> Random Book Details</h2>
      <div class="content">
        <md-card class="details-card">
          <h3>{{btitle}}</h3>
          <h4>Subject</h4>
          <p> {{bisbn}} </p>
          <h4>Publisher</h4>
          <p>{{bpublisher}}</p>
          <h4>Type</h4>
          <p>{{btype}}</p>
          <h4>Published Year</h4>
          <p>{{byear}}</p>
        </md-card>
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
  bisbn:any;
  bpublisher:any;
  btype:any;
  byear:any;

  data(){
    return{
      randomdata:null,
      arrayRandom:null,
      final:null,
      btitle:null,
      bisbn:null,
      bpublisher:null,
      btype:null,
      byear:null,
    }
  }

  randomitem(){
    this.arrayRandom = Math.floor(Math.random() * this.randomdata.length);
    this.final=this.randomdata[this.arrayRandom];
    this.btitle=this.final.title;
    this.bisbn=this.final.subject;
    this.bpublisher=this.final.publisher;
    this.btype=this.final.type;
    this.byear=this.final.first_publish_year;
  }
   
  mounted () {
    axios
      .get("https://openlibrary.org/search.json?author='Jane'")
      .then(response => {this.randomdata = response.data.docs})
  }

  created(){
    axios
      .get("https://openlibrary.org/search.json?author='Jane'")
      .then(response => {this.randomdata = response.data.docs})
  }


  getImageSrc() {
    return "http://covers.openlibrary.org/b/OLID/" + this.final.cover_id + "-M.jpg";
  }

} // closing of the vue


</script>
<style>
.home{
  padding-top: 100px;
}
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

