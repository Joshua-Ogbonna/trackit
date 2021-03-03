<template>
  <div class="home">
    <div class="container">
      <Navbar />
      <HomeInfo class="info" />
      
    </div>
  </div>
  <WhyTrack id="trackit" />
  <HowItWorks />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import HomeInfo from '@/components/HomeInfo.vue'
import WhyTrack from '@/components/WhyTrack.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HomeInfo,
    WhyTrack,
    HowItWorks,
    Footer
  }
}
</script>

<style scoped>
  .home {
    background: #6930c3;
    padding: 3rem 0;
  }
  .info {
    margin: 105px 0;
  }
</style>