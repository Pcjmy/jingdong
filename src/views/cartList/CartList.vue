<template>
  <div class="cart">我的全部购物车</div>
  <Docker :currentIndex="1"/>
</template>

<script>
import Docker from '../../components/Docker'
export default {
  name: 'CartList',
  components: { Docker }
}
</script>

<style lang="scss" scoped>
.cart {
  margin-top: .2rem;
  text-align: center;
  font-size: .16rem;
}
</style>