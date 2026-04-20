<template>
  <section class="py-16 bg-gray-900/30">
    <div class="max-w-5xl mx-auto px-6">
      <div class="reveal">
        <p class="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Open Source</p>
        <h2 class="section-heading mb-8">GitHub Activity</h2>
      </div>

      <!-- Contribution graph via github-readme-stats -->
      <div class="reveal reveal-delay-2 bg-gray-900 border border-gray-800 rounded-2xl p-6 overflow-hidden">
        <p class="text-xs text-gray-500 mb-4">Contribution Activity</p>
        <img
          src="https://github-readme-stats.vercel.app/api?username=Hein21-bot&show_icons=true&theme=dark&bg_color=111827&border_color=374151&title_color=6366f1&icon_color=6366f1&text_color=9ca3af&hide_border=false&count_private=true"
          alt="GitHub Stats"
          class="w-full max-w-md rounded-xl"
          @error="imgError = true"
        />
        <div v-if="imgError" class="text-sm text-gray-500">
          Visit <a href="https://github.com/Hein21-bot" target="_blank" class="text-accent hover:underline">github.com/Hein21-bot</a> to view activity
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal.js";
useScrollReveal();

const loading  = ref(true);
const imgError = ref(false);
const ghStats  = ref([
  { label: "Public Repos",  value: "—" },
  { label: "Followers",     value: "—" },
  { label: "Following",     value: "—" },
  { label: "Profile Views", value: "4+" },
]);

onMounted(async () => {
  try {
    const res  = await fetch("https://api.github.com/users/Hein21-bot");
    const data = await res.json();
    ghStats.value = [
      { label: "Public Repos",  value: data.public_repos ?? "—" },
      { label: "Followers",     value: data.followers ?? "—" },
      { label: "Following",     value: data.following ?? "—" },
      { label: "Years Coding",  value: "4+" },
    ];
  } catch (_) {}
  loading.value = false;
});
</script>
