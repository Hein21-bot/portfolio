<template>
  <section class="min-h-screen flex items-center pt-16 relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-5xl mx-auto px-6 py-24 relative z-10 w-full">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-medium mb-8 animate-fade-up">
        <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        Available for opportunities
      </div>

      <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-up" style="animation-delay:0.1s">
        Hein Min Htet
      </h1>

      <!-- Typewriter -->
      <div class="text-3xl md:text-5xl font-bold mb-6 animate-fade-up h-14 flex items-center" style="animation-delay:0.15s">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 cursor">{{ displayed }}</span>
      </div>

      <p class="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed animate-fade-up" style="animation-delay:0.2s">
        Full Stack Developer with <span class="text-white font-medium">4+ years</span> building scalable web applications —
        from REST APIs and real-time systems to responsive UIs.
      </p>

      <div class="flex flex-wrap gap-4 animate-fade-up" style="animation-delay:0.3s">
        <a href="#projects"
          class="px-6 py-3 bg-accent hover:bg-accent-light rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-accent/25">
          View Projects
        </a>
        <a href="#contact"
          class="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition-colors border border-gray-700">
          Contact Me
        </a>
        <!-- CV Download -->
        <a href="/cv.pdf" download="HeinMinHtet_CV.pdf"
          class="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition-colors border border-gray-700 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download CV
        </a>
        <a :href="github" target="_blank"
          class="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition-colors border border-gray-700 flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
      </div>

      <!-- Stats -->
      <div class="flex flex-wrap gap-12 mt-16 animate-fade-up" style="animation-delay:0.4s">
        <div v-for="stat in stats" :key="stat.label">
          <p class="text-3xl font-bold text-white">{{ stat.value }}</p>
          <p class="text-sm text-gray-500 mt-1">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from "@/data.js";
import { useTypewriter } from "@/composables/useTypewriter.js";

const { github } = profile;
const { displayed } = useTypewriter([
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "Software Engineer",
]);

const stats = [
  { value: "4+",  label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "5",   label: "Companies" },
];
</script>
