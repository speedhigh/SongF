<template>
  <div>
    <!-- banner -->
    <ShopBanner />
    <!-- 面包屑 -->
    <BaseBreadcrumb :list="breadcrumbList" />
    <div class="w-[1400px] mx-auto">
      <!-- 筛选 -->
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="按类别" name="1">
          <div class="flex items-center flex-wrap">
            <button 
              v-for="(item, index) in ke" 
              :key="index" 
              class="h-6 mr-1 my-1 px-2 hover:text-primary" 
              :class="{'bg-orange-100 text-primary rounded-md': keActive === index}"
              @click="keActive = index"
            >
              {{ item }}
            </button>
          </div>
        </el-collapse-item>
        <el-collapse-item title="按症状" name="2">
          <div class="flex items-center flex-wrap">
            <button 
              v-for="(item, index) in bing" 
              :key="index" 
              class="h-6 mr-1 mb-1 px-2 hover:text-primary" 
              :class="{'bg-orange-100 text-primary rounded-md': bingActive === index}"
              @click="bingActive = index"
            >
              {{ item }}
            </button>
          </div>
        </el-collapse-item>
      </el-collapse>
      <!-- list -->
      <div class="grid grid-cols-5 gap-x-10 gap-y-[1.88rem] pt-10 pb-12">
        <div 
          v-for="i in 20" 
          :key="i" 
          @click="$nuxt.$router.push('/shop/detail/' + i)"
        >
          <CardProduct />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'medicine',
      typeText: {
        medicine: '药品商城',
        health: '保健品',
        devices: '医用器械',
        PE: '赴日医检',
      },
      breadcrumbList: [
        { title: '首页', path: '/' },
        { title: '在线商城', path: '/shop' },
        { title: '', path: '' },
      ],
      ke:['全部', '国内药品', '日本药品', '健康食品'],
      keActive: 0,
      bing: ['全部', '乙肝', '高血压', '湿疹', '梅毒', '痤疮', '糖尿病', '抑郁症', '肺结节', '鼻炎', '痔疮', '月经不调', '宫颈癌', '高血脂', '腰间盘突出', '脊柱炎'],
      bingActive: 0,
      activeNames: ['1', '2']
    }
  },
  mounted() {
    this.type = this.$route.query.type
    this.breadcrumbList[2].title = this.typeText[this.$route.query.type]
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style>

</style>