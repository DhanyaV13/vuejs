<!--<template>
    <div id="id">
        <h1>About The Project</h1>
    </div>
</template>-->

<<template>
<div id="app">
    <div class="home">
        <h1>About The Project</h1>
    </div>
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
   // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .get("https://openlibrary.org/search.json?author='Jane'")
      .then(response => {this.randomdata = response.data.docs})
      this.randomitem()
  }


  getImageSrc() {
    return "http://covers.openlibrary.org/b/OLID/" + this.final.cover_id + "-M.jpg";
  }
}


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

