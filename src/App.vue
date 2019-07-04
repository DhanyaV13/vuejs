<template>
   <div id="app">
    <div class="header">
      <ul id="ulhead">
          <li><a class="active" href="/">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="/random">Random</a></li>
      </ul>
    </div>
    <router-view/>
    <div class="footer">
      <ul class="footul">
        <li align="left">
          <a href="/about" style="color:white;"> About </a>
        </li>
        <li style="float:right">
          <a href="/search" style="color:white">Search</a>
        </li>
      </ul>
      <div align="center">&copy; {{ new Date().getFullYear() }}</div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'

export default class App extends Vue {
  title = "Vue Books";
  
}
</script>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  height: 100%;
}

.header{
  position: fixed;
  width: 100%;
}

.branding {
  flex: 1;
  text-align: left;
}
 
#ulhead{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color:green;
}

#ulhead li {
  float: left;
}

#ulhead li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

#ulhead li a:hover {
  background-color:lightgreen;
}
.footer{
  margin:auto;
  width:100%;
  height:auto;
  overflow:hidden;
  background-color: green;
}

h1 {
  text-align: center;
}

.footul li{
  display: inline-block;
   margin-left:80px; 
}

/* .footul li:first-child {
    margin-left:0px;
} */

.footul li:nth-child(2){
  margin-right: 100px;
}

.footul{
  list-style:none;
  margin-bottom:0 !important;
}

</style>