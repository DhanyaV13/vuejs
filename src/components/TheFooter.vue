<template>
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
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

Component({
    name:'TheFooter'
})
export default({
    
})
</script>
<style>
.footer{
  margin:auto;
  width:100%;
  height:auto;
  overflow:hidden;
  background-color: green;
  position: fixed;
  bottom: 0;
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

