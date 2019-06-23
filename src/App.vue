<template>
   <div id="app">
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-success">
  <ul class="navbar-nav">
    <li class="nav-item ">
      <a class="nav-link" href="/">Home</a>
    </li>
   <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Categories
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Information</a>
        </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/random">Random</a>
    </li>
  </ul>
</nav>
<router-view/>
  <div class="footer">

   <ul class="footul">
    <li align="left">
      <a href="/about" style="color:black;"> About </a></li>
    <li align="right"><a href="/search" style="color:black">search</a></li>
      </ul>
      <div align="center">&copy; {{ new Date().getFullYear() }}</div>
   </div>
   <!-- <div>
     <ul>
   </ul>
   </div> -->
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
}

.branding {
  flex: 1;
  text-align: left;
}


.footer{
  position: absolute;
  bottom: 0;
  width: 100%;
    background-color: green;
}
h1 {
  text-align: center;
}

.footul li{
  display: inline-block;
  margin-left:250px;
  }

.footul li:first-child {
    margin-left:100px;
}
.footul{
  list-style:none;
  margin-bottom:0 !important;
}
</style>