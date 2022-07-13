<template>
  <div>
    <!-- banner -->
    <div class="w-full h-[330px] relative">
      <img src="~/assets/images/doctor/banner.webp" alt="banner" width="1920" height="330" class="absolute w-full h-[330px]">
      <div class="relative inset-0 w-full h-full text-center text-white py-14">
        <h1 class="text-[2.5rem] font-bold text-shadow-lg shadow-[#0069D1]">「在线医生」</h1>
        <h3 class="mt-7 text-shadow-lg shadow-[#0069D1]">国内外专家在线问诊，海量资源，服务更到位！</h3>
        <div class="mt-7 w-[45rem] h-[3.75rem] mx-auto rounded-md shadow-lg flex items-center bg-[rgba(255,255,255,0.6)]">
          <div class="flex-grow w-full h-full px-6">
            <input 
              type="text" 
              placeholder="搜索医生、症状或其他关键词" 
              class="w-full h-full text-sm bg-transparent text-gray-900 placeholder-gray-600"
            >
          </div>
          <button
            aria-label="Right Align" 
            class="flex-shrink-0 ml-auto w-[5.63rem] h-full rounded-md bg-white text-[#2D95FD] hover:opacity-90 active:opacity-100"
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
    <div class="w-[1400px] mx-auto">
      <!-- 筛选医生 -->
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="按科室" name="1">
          <div class="flex items-center flex-wrap">
            <button 
              v-for="(item, index) in ke" 
              :key="index" 
              class="h-6 mr-1 my-1 px-2 hover:text-primary" 
              :class="{'bg-orange-100 text-primary px-2 rounded-md': keActive === index}"
              @click="keActive = index"
            >
              {{ item }}
            </button>
          </div>
        </el-collapse-item>
        <el-collapse-item title="按疾病" name="2">
          <div class="flex items-center flex-wrap">
            <button 
              v-for="(item, index) in bing" 
              :key="index" 
              class="h-6 mr-1 my-1 px-2 hover:text-primary" 
              :class="{'bg-orange-100 text-primary px-2 rounded-md': bingActive === index}"
              @click="bingActive = index"
            >
              {{ item }}
            </button>
          </div>
        </el-collapse-item>
      </el-collapse>
      <!-- 医生列表 -->
      <div class="py-[30px] grid grid-cols-3 gap-x-7 gap-y-6">
        <div v-for="i in 15" :key="i">
          <CardDoctor />
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
        { title: '在线医生', path: '' }
      ],
      hotSearchList: [
        { id: '1', title: '高血压' },
        { id: '2', title: '高血脂' },
        { id: '3', title: '心绞痛' },
        { id: '4', title: '牙痛' },
        { id: '5', title: '孕期护理' },
      ],
      ke:['全部', '心理科', '皮肤科', '内科', '外科','耳鼻喉科', '男科', '妇科', '儿科', '产科','肛肠科', '皮肤科', '内科', '外科','全部', '心理科', '皮肤科', '内科', '外科','全部', '心理科', '皮肤科', '内科', '外科','全部', '心理科', '皮肤科', '内科', '外科','耳鼻喉科', '男科', '妇科', '儿科', '产科','肛肠科', '皮肤科', '内科', '外科','全部', '心理科', '皮肤科', '内科', '外科','全部', '心理科', '皮肤科', '内科', '外科'],
      keActive: 0,
      bing: ['全部', '乙肝', '高血压', '湿疹', '梅毒', '痤疮', '糖尿病', '抑郁症', '肺结节', '鼻炎', '痔疮', '月经不调', '宫颈癌', '高血脂', '腰间盘突出', '脊柱炎'],
      bingActive: 0,
      activeNames: ['1', '2']
    }
  },
   methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>