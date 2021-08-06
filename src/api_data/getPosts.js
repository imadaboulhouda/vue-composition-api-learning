import { ref } from 'vue';
const getPosts =()=>{
    let posts = ref([])
    let error = ref(null)
    const load = async ()=>{
        try {
            const f = await fetch("https://jsonplaceholder.typicode.com/posts");
            
            posts.value = await f.json();
        }catch(err){
                error.value = err;
            //throw Error('Invalid links');
            
        }
        return posts;
    }

    return { posts,load,error}
}
export { getPosts };