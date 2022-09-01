<template>
  <div class="container-fluid">
    <div class="container">
      <!-- Nav tabs -->
      <ul class="nav nav-tabs text-center mt-3 bg-dark" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Random Facts
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            FootBall
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="messages-tab"
            data-bs-toggle="tab"
            data-bs-target="#messages"
            type="button"
            role="tab"
            aria-controls="messages"
            aria-selected="false"
          >
            Messages
          </button>
        </li>
      </ul>
    </div>

    <!-- Tab panes -->
    <div class="tab-content clearfix">
      <div
        class="tab-pane active text-white"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div class="container">

        <div class="m-auto text-center">
          <button class="btn btn-light mt-3" @click="refresh()">Get New Facts</button>
        </div>
        <FactsCard />
        </div>
      </div>
      <div
        class="tab-pane text-white"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
       <div class="container">

        <div class="m-auto text-center">
          <button class="btn btn-light mt-3" @click="refresh()">Get New Facts</button>
        </div>
        <NewsWrap />
        </div>
      </div>
      <div
        class="tab-pane text-white"
        id="messages"
        role="tabpanel"
        aria-labelledby="messages-tab"
      >
        messages
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import FactsCard from '@/pages/FactsCard.vue';
import NewsWrap from '@/pages/NewsWrap.vue';
export default {
  name: "HomeView",

  components: {
    FactsCard,
    NewsWrap
},

  setup() {
    const router = useRouter

    const refresh = (() => {
      router.go(router.currentRoute)
    })

    return {
      refresh,
    };
  },
};
</script>

<style scoped>
.active {
  border: none;
}
</style>
