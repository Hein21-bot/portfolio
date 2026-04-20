<template>
  <section id="experience" class="py-24">
    <div class="max-w-5xl mx-auto px-6">
      <div class="reveal">
        <p class="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Experience</p>
        <h2 class="section-heading mb-12">Work History</h2>
      </div>

      <div class="relative">
        <div class="absolute left-6 top-0 bottom-0 w-px bg-gray-800 hidden md:block" />

        <div class="space-y-8">
          <div v-for="(job, i) in experience" :key="i"
            :class="`reveal reveal-delay-${Math.min(i+1, 5)}`"
            class="relative md:pl-20">
            <div class="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:block"
              :class="job.current ? 'border-accent bg-accent/30' : 'border-gray-600 bg-gray-900'" />

            <div class="bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-colors">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <h3 class="font-bold text-white">{{ job.role }}</h3>
                    <span v-if="job.current"
                      class="text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                      Current
                    </span>
                  </div>
                  <p class="text-accent text-sm mt-0.5">
                    {{ job.company }}<span v-if="job.location" class="text-gray-500"> · {{ job.location }}</span>
                  </p>
                </div>
                <span class="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">{{ job.period }}</span>
              </div>

              <ul class="space-y-2 mb-4">
                <li v-for="(pt, j) in job.points" :key="j" class="text-sm text-gray-400 flex gap-2 leading-relaxed">
                  <span class="text-accent mt-1 shrink-0">›</span>{{ pt }}
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <span v-for="s in job.stack" :key="s" class="tag text-xs">{{ s }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experience } from "@/data.js";
import { useScrollReveal } from "@/composables/useScrollReveal.js";
useScrollReveal();
</script>
