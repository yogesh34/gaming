<template>
    <div>
        <v-card class="my-3" v-for="post in posts" :key="post.posted_by">
        <v-card-title>
            <v-layout row> 
                <v-flex md2 lg2>
                    <v-avatar size="60">
                        <img :src="post.poster_image">
                    </v-avatar>
                </v-flex>
                <v-flex>
                    <v-layout column>
                        <v-flex>
                            <h3 class='primary--text text--darken-3 '>{{post.posted_by}}</h3>
                        </v-flex>
                        <v-flex>
                            <p>{{post.date}}</p>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-text>
            <h3>{{post.title}}</h3>
            <div :v-if='post.image==true'>
                <img :src="post.src" height='150'>
            </div>
            <p>{{post.details}}</p>
        </v-card-text>
        <v-card-action>
            <v-layout row wrap>
                <v-flex xs3 sm3 md3 lg3>
                    <v-btn flat class="primary--text text--darken-3">
                        <v-icon dark left>loyalty</v-icon>Like
                    </v-btn>
                </v-flex>
                 <v-flex xs3 sm3 md4 lg4 >
                    <v-btn flat class="primary--text text--darken-3">
                        <v-icon dark left>comment</v-icon>Comment
                    </v-btn>
                </v-flex>
                 <v-flex xs3 sm3 md2 lg2>
                     <v-btn flat class="primary--text text--darken-3">
                        <v-icon dark left>games</v-icon>Repost
                    </v-btn>
                </v-flex>
            </v-layout> 
        </v-card-action>
    </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            posts:[
                {
                    poster_image:'/avatar-1.png',
                    posted_by:'Yogesh Khadka',
                    date:'Today',
                    title:'Gaming is Fun',
                    image:true,
                    src:'/3.jpg',
                    details:'Fortnite gaming picture'
                },
                {
                    poster_image:'/avatar-1.png',
                    posted_by:'Yogesh Khadka',
                    date:'Today',
                    title:'Gaming is Fun',
                    image:true,
                    src:'/2.jpg',
                    details:'PUBG gaming picture'
                },
                {
                    poster_image:'/avatar-1.png',
                    posted_by:'Yogesh Khadka',
                    date:'Today',
                    title:'Gaming is Fun',
                    image:false,
                    details:'Fortnite gaming picture'
                }
            ]
        };
    }
    
}
</script>
