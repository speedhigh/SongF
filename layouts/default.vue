<template>
  <div 
    class="w-full bg-white min-h-screen relative pt-[3.75rem] text-gray-900 cursor-default leading-none"
    :class="$nuxt.$route.path === '/login' ? 'pb-44' : 'pb-[27.75rem]'"
  >

    <!-- HEADER -->
    <LayoutHeader />

    <!-- CONTENT -->
    <Nuxt />

    <!-- FOOTER -->
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
/* scrollbar */
* { @apply m-0 p-0 }
html { overflow-y: overlay }

::-webkit-scrollbar { @apply w-2}
::-webkit-scrollbar-thumb { @apply bg-gray-300 w-2 rounded-lg }

/* 全局样式 */
input, button, select, textarea { outline: none !important }
textarea { resize: none !important }
h2 { @apply text-[1.75rem] font-bold }
h3 { @apply text-base }
p { @apply text-sm }
.line-1 { @apply break-words line-clamp-1 }
.line-2 { @apply break-words line-clamp-2 }
</style>