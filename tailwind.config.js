/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Components**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: true,
    extend: {},
  },
  plugins: [],
}
