<script setup lang="ts">
import Button from "./Button.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";

const handleLangSwitch = () => {
  changeLocale(locale.value === "es" ? "en" : "es");
};
</script>

<template>
  <Button
    class="lang-switch-button"
    variant="border"
    size="sm"
    @click="handleLangSwitch"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >{{ locale === "es" ? "EN" : "ES" }}</Button
  >
</template>

<style scoped lang="scss">
.lang-switch-button {
  color: inherit;

  :deep(.button-wrapper) {
    color: inherit;
  }
}
</style>
