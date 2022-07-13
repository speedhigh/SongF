<template>
  <div class="text-gray-500">
    <div 
      class="flex items-center w-[1400px] h-[60px] mx-auto"
      :class="{'border-b': border}"
    >
      <p>当前位置：</p>
      <div 
        v-for="(item, index) in list"
        :key="index"
        class="flex items-center"
      >
        <p 
          :class="{'cursor-pointer hover:text-gray-900': index < list.length - 1}"
          @click="jumpTo(item.path, index)"
        >
          {{ item.title }}
        </p>
        <svg v-if="index < list.length - 1" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    border: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    jumpTo(path, index) {
      if(index < this.list.length - 1) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style>

</style>