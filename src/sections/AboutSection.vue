<template>
  <section id="about" class="py-24">
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="reveal">
          <p class="text-accent text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
          <h2 class="section-heading mb-6">Passionate about building great software</h2>
          <p class="text-gray-400 leading-relaxed mb-6">{{ about }}</p>
          <div class="flex flex-col gap-3 text-sm">
            <div class="flex items-center gap-3 text-gray-400"><span class="text-accent">📍</span> {{ location }}</div>
            <div class="flex items-center gap-3 text-gray-400"><span class="text-accent">🎓</span> B.C.Sc Computer Science — Univ. of Computer Studies, Mandalay (2014–2019)</div>
            <div class="flex items-center gap-3 text-gray-400"><span class="text-accent">💼</span> Open to full-time & freelance roles</div>
          </div>
        </div>

        <div class="reveal reveal-delay-2 bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <p class="text-xs text-gray-500 uppercase tracking-widest mb-6">Quick Facts</p>
          <div class="space-y-5">
            <div v-for="fact in facts" :key="fact.label" class="flex items-start gap-4">
              <span class="text-2xl">{{ fact.icon }}</span>
              <div>
                <p class="text-sm font-semibold text-white">{{ fact.label }}</p>
                <p class="text-xs text-gray-500 mt-0.5">{{ fact.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from "@/data.js";
import { useScrollReveal } from "@/composables/useScrollReveal.js";
useScrollReveal();

const { about, location } = profile;
const facts = [
  { icon: "⚡", label: "Backend Expertise",  value: "Node.js, NestJS, Express, PostgreSQL, Prisma" },
  { icon: "🎨", label: "Frontend Expertise", value: "React.js, Vue.js, Next.js, TypeScript, TailwindCSS" },
  { icon: "🔌", label: "Real-time Systems",  value: "Socket.io, Pusher — live dashboards & notifications" },
  { icon: "☁️", label: "Deployment",         value: "AWS, Apache, Git — production-grade deployments" },
  { icon: "🧑‍🏫", label: "Leadership",        value: "Mentored junior devs, enforced coding standards" },
];
</script>
