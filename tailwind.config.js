module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'bounce-scale': 'bounce-scale 0.6s ease-in-out',
        'spin-slow': 'spin-slow 3s linear infinite',
      }
    },
  },
  plugins: [],
}
