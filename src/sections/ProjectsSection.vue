<template>
  <section id="projects" class="py-24 bg-gray-900/30">
    <div class="max-w-5xl mx-auto px-6">
      <div class="reveal">
        <p class="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Projects</p>
        <h2 class="section-heading mb-8">Things I've Built</h2>
      </div>

      <!-- Filter tabs -->
      <div class="reveal reveal-delay-1 flex gap-2 mb-8 flex-wrap">
        <button v-for="tab in tabs" :key="tab.value" @click="activeTab = tab.value"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all"
          :class="activeTab === tab.value
            ? 'bg-accent text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'">
          {{ tab.label }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <TransitionGroup name="filter">
          <div v-for="project in filtered" :key="project.name"
            class="bg-gray-900 border border-gray-800 hover:border-accent/40 rounded-2xl p-6 flex flex-col gap-4 transition-all hover:shadow-lg hover:shadow-accent/5 group">
            <div class="text-4xl">{{ project.icon }}</div>
            <div class="flex-1">
              <h3 class="font-bold text-white mb-2 group-hover:text-accent transition-colors">{{ project.name }}</h3>
              <p class="text-sm text-gray-500 leading-relaxed">{{ project.desc }}</p>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="s in project.stack" :key="s" class="tag text-xs">{{ s }}</span>
            </div>
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-1.5 text-xs text-accent hover:text-accent-light transition-colors font-medium mt-1">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { projects } from "@/data.js";
import { useScrollReveal } from "@/composables/useScrollReveal.js";
useScrollReveal();

const activeTab = ref("all");
const tabs = [
  { value: "all",      label: "All" },
  { value: "fullstack",label: "Full Stack" },
  { value: "frontend", label: "Frontend" },
  { value: "backend",  label: "Backend" },
];

const filtered = computed(() =>
  activeTab.value === "all" ? projects : projects.filter((p) => p.type === activeTab.value)
);
</script>

<style scoped>
.filter-enter-active, .filter-leave-active { transition: all 0.3s ease; }
.filter-enter-from { opacity: 0; transform: scale(0.95); }
.filter-leave-to   { opacity: 0; transform: scale(0.95); }
</style>
