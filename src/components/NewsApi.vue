<template>
  <!-- <div class="container-fluid"> -->
  <!-- <p class="h3">VIDEOS</p> -->
  <div class="col-md-4 mt-2">
    <div class="card text-dark">
      <div class="card-header">
        <p class="card-title">My Video</p>
      </div>
      <div class="card-body">
        <p></p>
        <div class="text-center">
          <a class="" href=""><i class="fa-solid fa-share-nodes"></i> </a>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
// import axios from "axios";
import { onMounted, reactive } from "@vue/runtime-core";

export default {
  name: "VideoApi-vue",

  setup() {
    const newsUpdate = reactive({});
    // const errorMsg = reactive({});

    onMounted(() => {
      const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://www.youtube.com/embed',
  params: {listType: 'user_uploads', list: 'taaoma'},
  headers: {cookie: 'YSC=KgbtF0bUv-Q; VISITOR_INFO1_LIVE=xi9zA7SIDD8'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
    });

    return {
      newsUpdate,
      // errorMsg,
    };
  },
};
</script>

<style></style>
