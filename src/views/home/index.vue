<template>
  <div class="container">
    <header class="header">热门电影</header>
    <div class="content">
      <prolist :prolist = "prolist"></prolist>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Prolist from '@/components/Prolist'
export default {
  data () {
    return {
      prolist: []
    }
  },
  components: {
    prolist: Prolist
  },
  mounted () {
    axios.get('https://www.daxunxun.com/douban').then(res => {
      console.log(res.data)
      this.prolist = res.data
    })
  }
}
</script>
