<template>
     <div class="header">
      <ul id="ulhead">
          <li><a class="active" href="/">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="/random">Random</a></li>
      </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

Component({
  name:'TheHeader'
})

export default({
    
})
</script>
<style>
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
</style>

