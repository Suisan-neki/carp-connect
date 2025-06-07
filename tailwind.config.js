/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'carp-red': '#FF0000', // カープの赤色
        'carp-dark-red': '#CC0000', // 濃い赤色
        'carp-light-red': '#FF6666', // 薄い赤色
      },
    },
  },
  plugins: [],
}
