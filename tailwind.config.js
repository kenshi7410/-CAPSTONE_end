/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],

  // tắt preflight để dùng chung với Ant Design

  corePlugins: {
    preflight: false,
  },
};
