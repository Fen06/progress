<template>
  <div>
    <div class="border" :class="fillet" :style="{ height: hight + 'px' }">
      <div
        class="inside"
        :class="[color, fillet]"
        :style="[{ width: linerwidth + '%' }, { height: hight + 'px' }]"
      >
        <span class="textC" :class="text">{{ linerwidth + '%' }}</span>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'default',
    },
    color: {
      type: String,
      default: 'default',
    },

    fillet: {
      type: String,
      default: 'default',
    },
    linerwidth: {
      type: Number,
      default: function () {
        return 100;
      },
    },

    hight: {
      type: Number,
      default: function () {
        return 25;
      },
    },
  },
  data() {
    return {};
  },

  created() {},

  methods: {},
  computed: {},
};
</script>

<style scoped>
.border {
  width: 200px;
  height: 25px;
  margin-bottom: 10px;
  background-color: #04383e;
}

.inside {
  width: 100%;
  height: 25px;
  background-color: #05ca3d;
  position: relative;
  top: 0;
  right: 0;
}

.blue {
  background-color: blue;
}

.true {
  border-radius: 20px;
}

.textC {
  color: #fff;
  font-size: 10px;
  position: absolute;
  right: 5px;
  top: 4px;
}
.false {
  color: unset;
  font-size: 0px;
}
</style>
