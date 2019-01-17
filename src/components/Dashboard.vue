<template>
  <v-layout row wrap  align-center justify-space-around >
        <!--Layout for profile details -->
        <v-flex xs12 sm12 md3 lg3 class="hidden-sm-and-down text-xs-center" align-start>
          <view-profile-details></view-profile-details>
		    </v-flex>
        <!--Layout for posts posted by user -->
		    <v-flex xs12 sm12 md5 lg5 >
          <!--Rendering Create Post-->
          <view-create-post></view-create-post>
          <!--Rendering posts -->

          <!--commenting for a while due to misbehaves in layout -->
          <view-posts></view-posts>
         
		    </v-flex>
        <!--Layout for recommended shop items -->
		    <v-flex xs12 sm12 md3 lg3 class="hidden-sm-and-down">
          <view-shop-items></view-shop-items>
		    </v-flex>
      </v-layout>
</template>

<script>
import ProfileDetails from "@/views/ProfileDetails.vue"
import Posts from "@/views/Posts.vue"
import ShopItems from "@/views/ShopItems.vue"
import CreatePost from "@/views/CreatePost.vue"

export default {
  components:{
    'view-profile-details':ProfileDetails,
    'view-posts':Posts,
    'view-shop-items':ShopItems,
    'view-create-post':CreatePost
  }
}
</script>
