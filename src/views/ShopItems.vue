<template>
    <div>
    <v-card class='mx-3 info lighten-3' flat height='80%' style="">
    <v-layout column wrap>
        <v-flex class="text-xs-center white--text ma-1 success"><span class='cpation white--text'>Shop Items</span></v-flex>
        <v-flex>
            <v-list three-line class="mx-1">
                <template v-for="(list, index) in lists">
                    <v-divider v-if="list.divider" :inset="list.inset" :key="index"></v-divider>

                    <v-list-tile v-else :key="list.title" avatar @click="">
                        <v-list-tile-avatar>
                            <img :src="list.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title v-html="list.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="list.subtitle"></v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
                <div class="text-xs-center">
                    <v-btn class='success text-capitalize' flat small>Show more</v-btn>
                </div>
            </v-list>
        </v-flex>

    </v-layout>
</v-card>
    </div>
</template>
 <script>
 export default {
     data(){
         return{
             lists:[
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Brunch this weekend?',
                    subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                    subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Oui oui',
                    subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
                },
                { divider: true, inset: true },
            ]
         };
     }
 }
 </script>
 <style>
  .v-list {
  height:315px;
  overflow-y: auto;
}
 </style>
 
 
