<template>
  <Transition name="fade">
    <button v-if="visible" @click="scrollTop"
      class="fixed bottom-8 right-8 z-50 w-12 h-12 bg-accent hover:bg-accent-light rounded-full flex items-center justify-center shadow-lg shadow-accent/25 transition-all hover:scale-110">
      <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

function onScroll() { visible.value = window.scrollY > 400; }
function scrollTop() { window.scrollTo({ top: 0, behavior: "smooth" }); }

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s, transform 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(8px); }
</style>
