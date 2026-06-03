<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  isDark?: boolean;
}>();

const logoSrc = computed(() =>
  props.isDark ? "/meta/favicon-96x96.png" : "/meta/favicon-96x96-Black.png"
);
</script>

<template>
  <img :src="logoSrc" class="logo-img" alt="Logo" />
</template>

<style scoped lang="scss">
.logo-img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
