<template>
  <div class="address">
    <div class="address__info">
      <div class="address__info__user">{{ address.name }}</div>
      <div class="address__info__phone">{{ address.phone }}</div>
    </div>
    <div class="address__detail">
      {{ address.city }}{{ address.department }}{{ address.houseNumber }}
    </div>
    <div class="iconfont address__icon">&#xe6f2;</div>
  </div>
</template>

<script>
export default {
  name: 'Address',
  props: ['address']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.address {
  position: relative;
  margin: 0.16rem 0.18rem 0 0.18rem;
  padding: 0.18rem 0.64rem 0.18rem 0.16rem;
  background: #fff;
  border-radius: 0.04rem;
  &__info {
    display: flex;
    line-height: 0.2rem;
    font-size: 0.14rem;
    color: $light-fontColor;
    &__user {
      width: 0.94rem;
    }
    &__phone {
      flex: 1;
    }
  }
  &__detail {
    margin-top: 0.08rem;
    line-height: 0.2rem;
    font-size: 0.14rem;
    color: $content-fontcolor;
  }
  &__icon {
    position: absolute;
    right: 0.2rem;
    top: 0.4rem;
    transform: rotate(180deg);
    font-size: 0.2rem;
    color: $light-fontColor;
  }
}
</style>
