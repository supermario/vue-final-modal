<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col p-4 bg-white dark:bg-black rounded"
    @update:model-value="val => emit('update:modelValue', val)"
  >
    <div class="flex items-center h-10">
      <h1 v-if="title" class="text-2xl">
        {{ title }}
      </h1>
      <button class="ml-auto" @click="emit('update:modelValue', false)">
        <Icon icon="clarity:window-close-line" class="w-10 h-10" />
      </button>
    </div>
    <slot />
  </VueFinalModal>
</template>
