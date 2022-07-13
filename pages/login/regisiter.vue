<template>
  <div
    v-if="screenHeight"
    class="bg-login-bg bg-no-repeat bg-cover pt-[130px] px-[360px]" 
    :style="{'height': screenHeight + 'px'}"
  >
    <div>
      333
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenHeight: 0,
    }
  },
  mounted() {
    this.screenHeight = window.innerHeight-60-176
  },
  methods: {
  }
}
</script>

<style>

</style>