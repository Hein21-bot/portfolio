<template>
  <div>
    <NavBar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <footer class="border-t border-gray-800 py-8 text-center text-xs text-gray-600">
      © {{ new Date().getFullYear() }} Hein Min Htet · Built with Vue.js + TailwindCSS
    </footer>
    <BackToTop />
  </div>
</template>

<script setup>
import NavBar            from "@/components/NavBar.vue";
import BackToTop         from "@/components/BackToTop.vue";
import HeroSection       from "@/sections/HeroSection.vue";
import AboutSection      from "@/sections/AboutSection.vue";
import SkillsSection     from "@/sections/SkillsSection.vue";
import ExperienceSection from "@/sections/ExperienceSection.vue";
import ProjectsSection   from "@/sections/ProjectsSection.vue";

import ContactSection    from "@/sections/ContactSection.vue";
</script>
