<template>
  <div v-for="post in posts" :key="post">
        <button @click="showData(post.id)">{{ post.title }}</button>
      </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props:["posts"],
  emits:['hello'],
  setup(props,{emit}){
    const posts = computed(()=>props.posts);
    const showData = (id)=>{
      emit("hello",id);
    };
    return { posts,showData };
  }
}
</script>
