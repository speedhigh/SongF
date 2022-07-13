<template>
  <div class="w-[1200px] mx-auto flex space-x-5 pt-5 pb-10">
    <div class="w-[250px] h-[35rem] shadow-md rounded-md border border-gray-100 px-3.5">
      <div class="h-[3.75rem] flex items-center border-b space-x-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
        <h1 class="font-bold text-xl">个人中心</h1>
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>