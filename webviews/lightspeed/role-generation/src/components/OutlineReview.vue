<script setup lang="ts">
import { ref } from 'vue';

import { allComponents, provideVSCodeDesignSystem } from '@vscode/webview-ui-toolkit';


//import { vscodeApi } from './utils';

provideVSCodeDesignSystem().register(allComponents);
defineProps<{outline: String}>();

const emit = defineEmits<{outlineUpdate: [outline: string]}>();



//outline-field
function outlineWithLineNumber() {
  let textField = document.querySelector("#outline-field") as HTMLTextAreaElement;
  const originalPosition = textField?.selectionStart;

  textField.value = textField.value.split("\n").map((l) => l.replace(/\d+\.\s/, '')).map((l, idx) => {return `${idx+1}. ${l}`}).join("\n");
  const newPostition = textField.value[originalPosition-1] === '\n'? originalPosition + 3 : originalPosition;
  textField.setSelectionRange(newPostition, newPostition)
  emit("outlineUpdate", textField.value);

}

</script>

<template>
<div>
    <h4>Review the suggested steps for your role and modify as needed.</h4>
    <textarea id="outline-field" :rows="outline.split('\n').length + 2" :cols="outline.split('\n')[0].length + 5" :value="outline.toString()" @input="outlineWithLineNumber" />
</div>

</template>

<style scoped></style>