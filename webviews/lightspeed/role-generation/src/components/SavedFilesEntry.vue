<script setup lang="ts">
import { ref } from 'vue';
import { allComponents, provideVSCodeDesignSystem } from '@vscode/webview-ui-toolkit';

provideVSCodeDesignSystem().register(allComponents);
const props = defineProps<{
    longPath: string,
    command: string,
}>();

</script>

<template>
  <li><a :href="command">{{ longPath }}</a></li>
</template>

<style scoped>
</style>