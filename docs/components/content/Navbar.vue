<script setup lang="ts">
const { navigation } = useContent()
const { hasDocSearch } = useDocSearch()

const hasNavbarDialog = computed(() => navigation.value?.length > 1)
</script>

<template>
  <header class="sticky top-0 z-10 w-full border-b h-header u-border-gray-100 bg-white/80 dark:bg-black/80">
    <AppContainer padded class="grid h-full grid-cols-12 lg:gap-8">
      <div class="flex items-center flex-none col-span-2">
        <NavbarDialog v-if="hasNavbarDialog" />
        <div :class="hasNavbarDialog ? 'hidden lg:block' : 'block'">
          <NavbarLogo class="min-w-max" />
        </div>
      </div>

      <div class="flex items-center justify-center flex-1 col-span-8">
        <NavbarLogo v-if="hasNavbarDialog" class="lg:hidden" />
        <NavbarCenter class="hidden lg:flex" />
      </div>

      <div class="flex items-center justify-end flex-none col-span-2 lg:gap-4 lg:pl-4">
        <AppSearch v-if="hasDocSearch" />
        <ColorModeSwitch size="w-5 h-5" :class="hasDocSearch ? 'hidden lg:block' : ''" />
        <SocialIcons size="h-5 w-5 hidden lg:block" />
      </div>
    </AppContainer>
  </header>
</template>

<style scoped>
header {
  backdrop-filter: saturate(180%) blur(20px);
}
</style>
