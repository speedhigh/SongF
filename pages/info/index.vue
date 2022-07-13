<template>
  <div>
    <!-- banner -->
    <div class="w-full h-[330px] relative">
      <img src="~/assets/images/info/banner.webp" alt="banner" width="1920" height="330" class="absolute w-full h-[330px]">
      <div class="relative inset-0 w-full h-full text-center text-white py-14">
        <h1 class="text-[2.5rem] font-bold text-shadow-lg shadow-[#0B5841]">「最新资讯」</h1>
        <h3 class="mt-7 text-shadow-lg shadow-[#0B5841]">汇集全球最新的健康资讯，让您足不出户了解健康大事</h3>
        <div class="mt-7 w-[45rem] h-[3.75rem] mx-auto rounded-md shadow-lg flex items-center bg-[rgba(255,255,255,0.6)]">
          <div class="flex-grow w-full h-full px-6">
            <input 
              type="text" 
              placeholder="搜索文章或其他关键词" 
              class="w-full h-full text-sm bg-transparent text-gray-900 placeholder-gray-600"
            >
          </div>
          <button
            aria-label="Right Align" 
            class="flex-shrink-0 ml-auto w-[5.63rem] h-full rounded-md bg-white text-[#009267] hover:opacity-90 active:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <div class="mt-5 w-[45rem] mx-auto flex items-center">
          <p>热门搜索：</p>
          <p v-for="item in hotSearchList" :key="item.id" class="ml-2 cursor-pointer hover:underline">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <!-- 面包屑 -->
    <BaseBreadcrumb :list="breadcrumbList" />
    <!-- content -->
    <div class="w-[1400px] mx-auto w-full py-[30px]">
      <!-- 筛选 -->
      <div class="flex space-x-4">
        <el-select v-model="hotValue" placeholder="按热度" clearable>
          <el-option
            v-for="item in hotOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="dateValue" placeholder="按时间" clearable>
          <el-option
            v-for="item in dateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="typeValue" placeholder="按类型" clearable>
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- list -->
      <div
        v-for="i in 5"
        :key="i"
        class="mt-[50px] flex space-x-8 cursor-pointer hover:(transition transform scale-105) active:opacity-70"
        @click="$nuxt.$router.push('/info/detail/' + i)"
      >
        <img src="https://api.lorem.space/image/fashion?w=326&h=200" alt="info" width="326" height="200" class="flex-shrink-0 rounded-md">
        <div class="flex-grow w-full">
          <h2 class="line-1 text-[1.38rem]">吃过多热性食材易夏季感冒！中医教您分对感冒对症下药</h2>
          <div class="mt-5 h-6 px-2.5 bg-primary text-white text-xs rounded text-center leading-6 inline-block">诊疗技术</div>
          <div class="mt-5 line-3 h-[70px] leading-6 text-base">国家卫健委3月29日发布的首版新冠病毒疫苗接种技术指南最新明确，5类人群不宜接种疫苗：对疫苗的活性成分、任何一种非活性成分、生产工艺中使用的物质过敏者，或以前接种同类疫苗时出现过敏者；既往发生过疫苗严重过敏反应者（如急性过敏反应、血管神经性水肿、呼吸困难等）；患有未控制的癫痫和其他严重神经系统疾病者...   横贯性脊髓炎、格林巴利综合症、脱髓鞘疾病等）；正在发热者，或患急性疾病，或慢性疾病的急性发作期，或未控制的严重慢性病患者；妊娠期妇女。生产工艺中使用的物质过敏者，或以前接种同类疫苗时出现过敏者；既往发生过疫苗严重过敏反应者（如急性过敏反应、血管神经性水肿、呼吸困难等</div>
          <div class="mt-6 text-primary">
            查看全文>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbList: [
        { title: '首页', path: '/' },
        { title: '最新资讯', path: '' },
      ],
      hotSearchList: [
        { id: '1', title: '诊疗技术' },
        { id: '2', title: '药品信息' },
        { id: '3', title: '医疗器械' },
      ],
      hotValue: '',
      hotOptions: [
        { value: '1', label: '热度升序' },
        { value: '2', label: '热度降序' },
      ],
      dateValue: '',
      dateOptions: [
        { value: '1', label: '时间升序' },
        { value: '2', label: '时间降序' },
      ],
      typeValue: '',
      typeOptions: [
        { value: '1', label: '诊疗技术' },
        { value: '2', label: '药品信息' },
        { value: '3', label: '医疗器械' },
      ],
    }
  }
}
</script>