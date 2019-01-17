<template>
    <v-layout column>
        <v-flex>
                <v-card class="text-xs-center">
                <v-avatar size="100">
                            <img :src="image">
                </v-avatar>
                <v-card-text>
                    <h2 class='primary--text text--darken-3 '>{{name}}</h2>
                    <p>{{text}}</p>
                </v-card-text>
                <v-card-actions>
                    <v-layout row wrap v-for="activity in activities" :key="activity.title">
                        <v-flex md-4 lg-4>
                            <v-layout column>
                                <v-flex>
                                    <v-chip color="primary darken-3" text-color="white" small>
                                    {{activity.title}}
                                    </v-chip>
                                </v-flex>
                                <v-flex>
                                    <h2>{{activity.number}}</h2>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex>
            <v-card class="my-3">
                <h1 class='primary--text text--darken-3 '>Something goes here</h1>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data(){
    return{
    name:'Yogesh Khadka',image:'/avatar-1.png',text:'Still many thing to do',
    activities:[
        {title:'Following',number:'152'},
        {title:'Posts',number:'112'},
        {title:'Followers',number:'116'}
    ]
    };
  }
}
</script>
