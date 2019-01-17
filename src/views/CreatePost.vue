<template>
    <div>
        <v-card>
        <v-card-title>
            <v-layout row> 
                <v-flex md2 lg2>
                    <v-avatar size="60">
                        <img src="/avatar-1.png">
                    </v-avatar>
                </v-flex>
                <v-flex md-4 lg-4>
                    <v-layout column>
                        <v-flex>
                            <h3 class='primary--text text--darken-3 '>Create Post</h3>
                        </v-flex>
                        <v-flex>
                            <p>Public</p>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-text>
            <v-layout row wrap >
                        <v-flex md-3 lg-3 v-for="activity in activities" :key="activity.title">
                            <v-layout column>
                                <v-flex class="text-xs-center">
                                    <v-icon color="success">{{activity.icon}}</v-icon>
                                </v-flex>
                                <v-flex align-center>
                                    <v-chip color="primary darken-3" text-color="white" small>
                                    {{activity.title}}
                                    </v-chip>
                                </v-flex>
                            </v-layout>
                        </v-flex>
            </v-layout>
            <v-text-field
            v-model="status"
            :rules="nameRules"
            :counter="144"
            label="Post a Status"
            required
          ></v-text-field>
          <v-btn class='success text-xs-center' flat small round>Post</v-btn>
        </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activities:[
                {icon:'send',title:'Status'},
                {icon:'edit',title:'Photo'},
                {icon:'directions',title:'Facebook'},
                {icon:'wifi',title:'Youtube'}            ]
        };
    }
}
</script>

