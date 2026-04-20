import { ref, onMounted, onUnmounted } from "vue";

export function useTypewriter(words, speed = 90, pause = 1800) {
  const displayed = ref("");
  const showCursor = ref(true);
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let timer;

  function tick() {
    const current = words[wordIndex];

    if (!deleting) {
      displayed.value = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        timer = setTimeout(tick, pause);
        return;
      }
    } else {
      displayed.value = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    timer = setTimeout(tick, deleting ? speed / 2 : speed);
  }

  onMounted(() => { timer = setTimeout(tick, 600); });
  onUnmounted(() => clearTimeout(timer));

  return { displayed, showCursor };
}
