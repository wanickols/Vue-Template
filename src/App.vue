<script setup lang="ts">
import ThemeButton from "@/components/ThemeButton.vue";
</script>

<template>
  <div
    class="min-h-screen bg-base-200 flex flex-col items-center justify-center gap-6"
  >
    <!-- Tailwind test -->
    <h1 class="text-4xl font-bold text-blue-600">Tailwind v4 + daisyUI Test</h1>

    <!-- daisyUI Button -->
    <button class="btn btn-primary">Primary Button</button>

    <!-- daisyUI Card -->
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Hello daisyUI!</h2>
        <p>If you see styled components, it’s working 🚀</p>
        <div class="card-actions justify-end">
          <button class="btn btn-secondary">Action</button>
        </div>
      </div>
    </div>
    <ThemeButton />
  </div>
</template>
