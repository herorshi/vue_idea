<template>
    <div id='app'>
                        <router-link  :to="{ path: '/' }"  >
                            <li><a href="javascript:function() { return false; }">HOME</a></li>
                        </router-link>
                        <router-link  :to="{ path: 'showcase' }"  >
                            <li><a href="javascript:function() { return false; }">SHOWCASE</a></li>
                        </router-link>
                        <router-link  :to="{ path: 'about' }"  >
                            <li><a href="javascript:function() { return false; }">ABOUT</a></li>
                        </router-link>
                        <router-link  :to="{ path: 'service' }"  >
                            <li><a href="javascript:function() { return false; }">SERVICE</a></li>
                        </router-link>
                        <router-link  :to="{ path: 'blog' }"  >
                            <li><a href="javascript:function() { return false; }">BLOG</a></li>
                        </router-link>
                        <router-link  :to="{ path: 'contact' }"  >
                            <li><a href="javascript:function() { return false; }">CONTACT</a></li>
                        </router-link>
    </div>
</template>


<script>
    export default
{
        data(){
                return{ 
                        name:'Vue'
                      };
             },
        methods:   { },
        computed:  { },
        watch:     { },
        props:     [''],
        components:{ },
        mounted()  { },
        mixins:    [ ],
}
</script>


<style scoped>
    
</style>