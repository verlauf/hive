<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)

const myCookie = useCookie("myKey", {
  default: () => "Mein Fallback-Wert"
});

console.log('log', myCookie.value)

const route = useRoute()
console.log('route ', route.fullPath)
</script>