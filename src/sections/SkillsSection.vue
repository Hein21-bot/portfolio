<template>
  <section id="skills" class="py-24 bg-gray-900/30">
    <div class="max-w-5xl mx-auto px-6">
      <div class="reveal">
        <p class="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Skills</p>
        <h2 class="section-heading mb-3">Tech Stack</h2>
      </div>

      <!-- Legend -->
      <div class="reveal reveal-delay-1 flex gap-5 mb-10 text-xs text-gray-500">
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-accent inline-block"/>Expert</span>
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-blue-400 inline-block"/>Proficient</span>
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-400 inline-block"/>Learning</span>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(group, i) in skills" :key="group.category"
          :class="`reveal reveal-delay-${i + 1}`"
          class="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-5">
            <span class="text-xl">{{ group.icon }}</span>
            <p class="text-sm font-semibold text-white">{{ group.category }}</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in group.items" :key="item.name"
              class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
              :class="{
                'bg-accent/10 border-accent/30 text-accent-light': item.level === 'expert',
                'bg-blue-500/10 border-blue-500/30 text-blue-300': item.level === 'proficient',
                'bg-amber-500/10 border-amber-500/30 text-amber-300': item.level === 'learning',
              }">
              <span class="w-1.5 h-1.5 rounded-full"
                :class="{
                  'bg-accent': item.level === 'expert',
                  'bg-blue-400': item.level === 'proficient',
                  'bg-amber-400': item.level === 'learning',
                }"/>
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Currently Learning strip -->
      <div class="reveal reveal-delay-4 mt-8 bg-gray-900 border border-amber-500/20 rounded-2xl p-5 flex flex-wrap items-center gap-4">
        <p class="text-xs text-amber-400 font-semibold uppercase tracking-widest shrink-0">Currently Exploring</p>
        <div class="flex flex-wrap gap-3">
          <span v-for="item in learning" :key="item.name"
            class="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-300 font-medium">
            {{ item.icon }} {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills, learning } from "@/data.js";
import { useScrollReveal } from "@/composables/useScrollReveal.js";
useScrollReveal();
</script>
