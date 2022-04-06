<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-25 18:50:46
 * @LastEditTime: 2022-03-25 19:12:06
-->
<template>
  <i class="bench-icon" :style="style">
    <slot></slot>
  </i>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { iconProps } from "./icon";
export default defineComponent({
  name: "BIcon",
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {};
      }
      return {
        ...(props.size ? { "font-size": props.size + "px" } : {}),
        ...(props.color ? { color: props.color } : {}),
      };
    });
    return {
      style,
    };
  },
});
</script>
