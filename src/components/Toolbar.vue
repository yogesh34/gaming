<template>
    <div>
    <v-toolbar app class="primary darken-3">
      <v-toolbar-side-icon class="white--text" @click="drawer=!drawer"></v-toolbar-side-icon>
      <router-link to='/' class="white--text" style="text-decoration:none;">
        <v-toolbar-title class="headline text-uppercase white--text">
        <span>Gaming</span>
        <span class="font-weight-light">SANSAR</span>
      </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <router-link v-for="title in titles" 
              :key="title.name" 
              :to="title.route" 
               style="text-decoration:none;">
        <v-toolbar-title >
            <v-btn flat class="white--text" >
                <v-icon>{{title.icon}}</v-icon><span  class="hidden-md-and-down">{{title.name}}</span>
            </v-btn>
          </v-toolbar-title>
        </router-link>
    </v-toolbar>
    <v-navigation-drawer 
        v-model="drawer" 
        app 
        class="success"
        temporary
        absolute
        >
        <v-layout column align-center>
            <v-flex>
                <v-avatar size="100" class="px-3 mt-3">
                    <img src="/avatar-1.png">
                </v-avatar>
                <h2 class="white--text">Yogesh Khadka</h2>
            </v-flex>
        </v-layout>

        <v-list>
            <v-list-tile v-for="list in lists" :key="list.text" :to="list.route">
                <v-list-tile-action>
                    <v-icon class="white--text">{{list.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-title class="white--text">{{list.text}}</v-list-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data () {
    return {
        drawer:false,
      titles:[
        {name:'Home', icon:'home', route:'/'},
        {name:'Notification', icon:'notification_important', route:'/notification'},
        {name:'Settings', icon:'settings', route:'/setting'}
      ],
      lists:[
        {icon:'dashboard',text:'Dashboard',route:'/'},
        {icon:'person',text:'Login', route:'/login'},
        {icon:'person',text:'Register',route:'/register'}
      ]
    };
  }
}
</script>

