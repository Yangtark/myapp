<template>
  <div id="app">
    <router-view></router-view>
    <footer class="footer">
      <ul>
        <!-- router-link会被渲染成为a标签，如果不想改变，则使用tag标签生成目标标签 -->
        <router-link to="/home" tag="li">
          <span class="iconfont icon-yemian-copy"></span>
          <p>首页</p>
        </router-link>
        <router-link to="/kind" tag="li">
          <span class="iconfont icon-leimupinleifenleileibie"></span>
          <p>分类</p>
        </router-link>
        <router-link to="/cart" tag="li">
          <span class="iconfont icon-shop"></span>
          <p>购物车</p>
        </router-link>
        <router-link to="/user" tag="li">
          <span class="iconfont icon-wodedangxuan"></span>
          <p>我的</p>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
// 单文件组件     .vue为后缀   至少得有一个template
export default { // 暴露该组件（要写js）， 如果不写script，会默认暴露出去
}
</script>

<style lang="scss">
// 导入scss文件
// @/lib/reset.scss   @表示的是src目录
@import '@/lib/reset.scss';

html, body, #app {
  // width: 100%;height: 100%;
  @include rect(100%, 100%);
}

#app {
  @include flexbox();
  @include flex-direction(column);
  .container {
    @include flex();
    @include rect(100%, 100%);
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%, 0.44rem);
      @include background-color(#16C2C2);
      @include flexbox();
      @include justify-content();
      @include align-items();
      @include font-size(20px);
      @include font-weight(900);
    }
    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow(auto);
    }
  }
  .footer{
    @include rect(100%, 0.5rem);
    @include background-color(#efefef);
    ul{
      @include rect(100%, 100%);
      @include flexbox();
      li{
        @include flex();
        // 元素水平垂直居中
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        span{
          @include font-size(0.24rem);
        }
        p{
          @include font-size(0.12rem);
        }

        &.router-link-active{
          @include color(#f66);
        }
      }
    }
  }
}
</style>
