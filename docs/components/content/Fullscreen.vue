<script setup lang="ts">
import { VFullscreen } from 'vue-final-modal'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>

<template>
  <VFullscreen
    content-class="p-4 bg-primary-50 dark:bg-gray-800"
    @update:model-value="val => emit('update:modelValue', val)"
  >
    <h1 class="mb-4 text-2xl">
      Fullscreen Modal
    </h1>
    <VButton @click="emit('update:modelValue', false)">
      Close
    </VButton>
  </VFullscreen>
</template>
