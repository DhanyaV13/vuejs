<<template>
  <div class="home">
    <h1>Book List</h1>
    <br><br>  
  <div id="app">
    <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else style="text-align: center;">
    <div v-if="loading">Loading...</div>
    <div v-else >
	<md-table  v-model="books" md-sort="title" md-sort-order="asc" style="width: 40%;display:inline-block" md-card>
     <!-- <md-table-row>
        <md-table-head><md-button style="width:100px"TITLE></md-button></md-table-head>
     </md-table-row> 
     <br> -->
      <md-table-toolbar>
        <h1 class="md-title">TITLE</h1>
      </md-table-toolbar>
      <md-table-row  slot="md-table-row" v-bind:key="book" v-for="book in info.slice(0,10)">
            <md-table-cell style="cursor:pointer;text-align:center" md-sort-by="title"><md-button v-on:click="viewDetails(book)">{{book.title}}</md-button></md-table-cell>
    </md-table-row>
    </md-table> 
    </div>
    </section>
  </div>
  <br>
  <br>
  <br>
  <br>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import  axios from 'axios'
@Component
 
export default class Home extends Vue {
  info: any;
  errored: boolean|undefined;
  loading: boolean|undefined;
  sortkey: any;
  reverse: any;
    data () {
    return {
      info: null,
      loading:false,
      errored: true,
    }
  }

  mounted () {
    this.errored = false,
    this.loading= true,
    axios
    // .get("https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447")
      .get("https://openlibrary.org/search.json?author='Jane'")
      .then(response => (this.info = response.data.docs))
      
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

}
</script>
<style>
.home{
  padding-top: 50px;
}
</style>

