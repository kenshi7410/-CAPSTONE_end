/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // tắt preflight để dùng chung với Ant Design

  corePlugins: {
    preflight: false,
  },
};
