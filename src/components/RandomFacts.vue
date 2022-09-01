<template>
  <!-- <div class="container-fluid"> -->
    <!-- <p class="h3">RANDOM FACTS</p> -->
    <div class="col-md-4 mt-3">
      <div class="card text-dark h-100 ">
        <div class="card-header">
          <p class="card-title fw-bold">Weird Fact</p>
          </div>
          <div class="card-body overflow-scroll">
            <p>{{ myFacts.name }}</p>
          </div>
          <div class=" text-center card-footer">
           <a class="" href=""><i class="fa-solid fa-share-nodes"></i></a> 
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "@vue/runtime-core";

export default {
  name: "RandomFacts-vue",

  setup() {
    const myFacts = reactive({});
    const errorMsg = reactive({});

    onMounted(() => {
      const facts = {
        method: "GET",
        url: "https://uselessfacts.jsph.pl/random.json",
        params: { language: "en" },
      };
      axios
        .request(facts)
        .then((response) => {
          // console.log(response.data.text)
          myFacts.name = response.data.text;
        })
        .catch((error) => {
          console.log(error);
          // errorMsg.message = error.message;
    // alert(errorMsg.message)
        });
    });

    return {
      myFacts,
      errorMsg,
    };
  },
};
</script>

<style></style>
