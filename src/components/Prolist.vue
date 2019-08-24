<template>
  <ul class="prolist">
    <li class="proitem" v-for="item of prolist" :key="item.id">
      <div class="itemImg">
        <img :src="item.images.small" alt="">
      </div>
      <div class="itemInfo">
        <h4>
          {{ item.title }}
        </h4>
        <div>
          演员:
          <span v-for="itm of item.casts" :key="itm.id">
            {{ itm.name }} /
          </span>
        </div>
        <div>
          导演:
          <span v-for="itm of item.directors" :key="itm.id">
            {{ itm.name }} /
          </span>
        </div>
        <p>
          评分： {{ item.rating.average }} / 票房： {{ item.collect_count }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    prolist: Array
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.prolist {

  .proitem {
    @include rect(100%, 1.2rem);
    @include border(0 0 1px 0, #ccc, solid);
    @include flexbox();
    .itemImg {
      @include rect(1.2rem, 1.2rem);
      img {
        @include rect(1rem, 1rem);
        @include margin(0.1rem);
        @include border(1px, #ccc, solid)
      }
    }
    .itemInfo {
      @include flex();
    }
  }
}
</style>
