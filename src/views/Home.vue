<<template>
  <div class="home"  v-bind:style="{ 'background-image': 'url('+ require('./../assets/backgroud-image-books.jpg') + ')',
  'background-repeat':'no-repeat','background-size':'cover','background-position':'center center','background-attachment':'fixed' }">
    <h1>Book List
      <span style="cursor:pointer" v-on:click="sortedArray()">
        <i class="material-icons">
          arrow_upward
        </i>
        <i class="material-icons">
          arrow_downward
        </i>
      </span>
    </h1>
    <br><br>
    <div id="app" >
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>

      <section v-else style="text-align: center;">
        <div v-if="loading">Loading...</div>
        <div v-else>
          <ul v-for="book in info" style="list-style:none;">
            <li style="cursor:pointer;text-align:center;color:white;" v-on:click="viewDetails(book)">{{book.title}}</li>
          </ul>
        </div>
      </section>
    </div>
    <br>
    <br>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import  axios from 'axios'
@Component


export default class Home extends Vue {
  info: any;
  books:any;
  errored: boolean|undefined;
  loading: boolean|undefined;
  a:number=0;
  b:number=0;
  sortDirection: string="";
  counter:number=0;


  data () {
    return {
      info: null,
      loading:false,
      errored: true,
      books:null,
      sortDirection: 'ASC',
      counter:0,
    }
  }

  sortedArray(){
    if(this.counter==0||(this.counter%2==0)){
      this.sortDirection= 'ASC';
      this.counter+=1;
     }
    else
     {
      this.sortDirection='DESC';
      this.counter+=1;
     }
    this.info.sort( function(this: any, a: { title: number; }, b: { title: number; } ){
      if( this.sortDirection == 'ASC' ){
        return ( ( a.title == b.title ) ? 0 : ( ( a.title > b.title ) ? 1 : -1 ) );
        }

      if( this.sortDirection == 'DESC' ){
        return ( ( a.title == b.title ) ? 0 : ( ( a.title < b.title ) ? 1 : -1 ) );
        }

    }.bind(this));
  }

  mounted () {
    this.errored = false,
    this.loading= true,
    axios
      .get("https://openlibrary.org/search.json?author='Jane'")
      .then(response => (this.info = response.data.docs.slice(0,10)))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }

  viewDetails(book: any) {
    this.$router.push({ path: 'details', query: {
      title: book.title,
      authors: book.author_name && book.author_name.join(', '),
      year: book.first_publish_year,
      cover_id: book.cover_edition_key
    }});
  }

} //closing of the vue


</script>
<style>
.home
  {
  padding-top: 50px;  
  }


 
</style>

