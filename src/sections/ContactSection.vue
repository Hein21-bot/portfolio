<template>
  <section id="contact" class="py-24">
    <div class="max-w-5xl mx-auto px-6">
      <div class="reveal">
        <p class="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
        <h2 class="section-heading mb-4">Let's Work Together</h2>
        <p class="text-gray-400 mb-12 max-w-lg">Available for full-time roles and freelance projects. Feel free to reach out — I'll get back to you quickly.</p>
      </div>

      <div class="reveal reveal-delay-1 grid md:grid-cols-2 gap-4 mb-12">
        <!-- Copy email -->
        <button @click="copyEmail"
          class="flex items-center gap-5 bg-gray-900 border border-gray-800 hover:border-accent/40 rounded-2xl p-5 transition-all group text-left w-full">
          <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl shrink-0">✉️</div>
          <div class="flex-1 min-w-0">
            <p class="text-xs text-gray-500 mb-0.5">Email</p>
            <p class="text-white font-medium group-hover:text-accent transition-colors truncate">htetminhein755@gmail.com</p>
          </div>
          <span class="text-xs text-gray-600 shrink-0 transition-colors" :class="copied ? 'text-emerald-400' : 'group-hover:text-accent'">
            {{ copied ? "✓ Copied!" : "Click to copy" }}
          </span>
        </button>

        <a href="tel:+66962192574"
          class="flex items-center gap-5 bg-gray-900 border border-gray-800 hover:border-accent/40 rounded-2xl p-5 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl shrink-0">📱</div>
          <div>
            <p class="text-xs text-gray-500 mb-0.5">Phone</p>
            <p class="text-white font-medium group-hover:text-accent transition-colors">+66 962192574</p>
          </div>
        </a>

        <a href="https://github.com/Hein21-bot" target="_blank"
          class="flex items-center gap-5 bg-gray-900 border border-gray-800 hover:border-accent/40 rounded-2xl p-5 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl shrink-0">🐙</div>
          <div>
            <p class="text-xs text-gray-500 mb-0.5">GitHub</p>
            <p class="text-white font-medium group-hover:text-accent transition-colors">github.com/Hein21-bot</p>
          </div>
        </a>

        <div class="flex items-center gap-5 bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl shrink-0">📍</div>
          <div>
            <p class="text-xs text-gray-500 mb-0.5">Location</p>
            <p class="text-white font-medium">Bangkok, Thailand</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="reveal reveal-delay-2 bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20 rounded-2xl p-8 text-center">
        <h3 class="text-xl font-bold mb-2">Ready to build something great?</h3>
        <p class="text-gray-400 text-sm mb-6">Let's discuss your project and see how I can help.</p>
        <a href="mailto:htetminhein755@gmail.com"
          class="inline-block px-8 py-3 bg-accent hover:bg-accent-light rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-accent/25">
          Send me an email
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal.js";
useScrollReveal();

const copied = ref(false);
async function copyEmail() {
  await navigator.clipboard.writeText("htetminhein755@gmail.com");
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}
</script>
