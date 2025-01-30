<script setup lang="ts">
import { ref } from 'vue';
import { allComponents, provideVSCodeDesignSystem } from '@vscode/webview-ui-toolkit';


import { RoleGenerationResponseParams } from "../../../../../src/interfaces/lightspeed";
import GeneratedFileEntry from './GeneratedFileEntry.vue';

provideVSCodeDesignSystem().register(allComponents);
const response = defineModel<RoleGenerationResponseParams | undefined>("response");





</script>

<template>

    <h4>The following role was generated for you:</h4>

    <ul>
        <GeneratedFileEntry v-for="file in response?.files" :file />
    </ul>


</template>

<style scoped></style>