<template>
  <div>
    <!-- 初始 -->
    <my-progress></my-progress>
    <!-- 进度变色 -->
    <my-progress color="blue"></my-progress>
    <!-- 圆角矩形 -->
    <my-progress fillet="true"></my-progress>
    <!-- 调整进度 -->
    <my-progress :linerwidth="50"></my-progress>
    <!-- 高度调整+不显示字体 -->
    <my-progress :linerwidth="30" :hight="50" text="false"></my-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped></style>
