<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <span class="font-bold text-white tracking-tight">HMH<span class="text-accent">.</span></span>
      <div class="hidden md:flex items-center gap-8 text-sm text-gray-400">
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`"
          class="hover:text-white transition-colors">{{ link.label }}</a>
      </div>
      <a href="mailto:htetminhein755@gmail.com"
        class="text-sm px-4 py-2 bg-accent hover:bg-accent-light rounded-lg font-medium transition-colors">
        Hire Me
      </a>
    </div>
  </nav>
</template>

<script setup>
const links = [
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "skills",     label: "Skills" },
  { id: "contact",    label: "Contact" },
];
</script>
