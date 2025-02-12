<script setup lang="ts">
import { ref } from 'vue';

import { allComponents, provideVSCodeDesignSystem } from '@vscode/webview-ui-toolkit';
import { RoleGenerationListEntry } from "../../../../../src/interfaces/lightspeed";


import { vscodeApi } from '../utils';

provideVSCodeDesignSystem().register(allComponents);

defineProps<{ message: string }>();


</script>

<template>
    <li><span class="codicon codicon-warning errorMessage"></span><strong>{{ message }}</strong></li>
</template>

<style scoped>
.errorMessage {
    color: red;
    font-weight: bold;
}
</style>