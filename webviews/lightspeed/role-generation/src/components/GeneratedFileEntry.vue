<script setup lang="ts">
import { ref } from 'vue';

import "highlight.js/styles/atom-one-dark.css";
//import "highlight.js/styles/atom-one-light.css";

import { allComponents, provideVSCodeDesignSystem } from '@vscode/webview-ui-toolkit';
import { RoleGenerationListEntry } from "../../../../../src/interfaces/lightspeed";


import { vscodeApi } from '../utils';

provideVSCodeDesignSystem().register(allComponents);

defineProps<{ file: RoleGenerationListEntry }>();


</script>

<template>
  <li>
  {{ file.path }}
  <highlightjs language="yaml" :autodetect="false" :code="file.content" />
  </li>
</template>

<style scoped></style>