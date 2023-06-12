<!-- svg -->
<template>
      <div>
    <svg :style="{ width: width, height: height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang='ts'>
defineProps({
    // xlink:href属性值前缀
    prefix:{
        type:String,
        default:"#icon-"
    },
    // svg矢量图名字
    name:String,
    color:{
        type:String,
        default:"",
    },
    // Svg高度
    width:{
        type:String,
        default:"16px"
    },
    // svg高度
    height:{
        type:String,
        default:'16px'
    }
})
</script>

<style lang="less" scoped>

</style>
