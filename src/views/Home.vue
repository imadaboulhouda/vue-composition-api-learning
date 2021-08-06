<template>
  <div>
    <form>
      <label for="name">Search</label>
      <input type="text" v-model="search">
      </form>
    <div  v-if="error" >{{ error }}</div>
    
      <h3>Search {{ search }}</h3>
      <div v-if="searching.length">
      <PostList @hello="hello" :posts="searching"/>
      </div>
      <div v-else>
        Aucun data
        </div>
  </div>
</template>
<script>
  import { computed, ref } from 'vue';
import PostList from '../components/listData.vue'
import { getPosts } from '../api_data/getPosts';
export default {
  components:{
    
      PostList
    
  },
  setup()
  {
    const hello = (e)=>{
      console.log("hello clicked",e);
    }
    const {posts,load,error} = getPosts();
    let search = ref("");
    load()
    let listPost = posts
    const searching = computed(()=>{
      return listPost.value.filter(d=>d.title.toLowerCase().includes(search.value.toLowerCase()));
    })
    return { search,listPost,searching,error,hello };
  }

}
</script>