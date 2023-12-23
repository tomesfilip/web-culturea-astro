/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'blue-1': '#19777A',
      'blue-2': '#59BEBF',
      'blue-3': '#B1F7F9',
      'orange-1': '#FE8133',
      'brown-1': '#A8663B',
      'brown-2': '#FFA878',
    },
    extend: {
      fontFamily: {
        body: ['GalanoGrotesqueRegular'],
        headline: ['GalanoGrotesqueBold'],
      },
    },
  },
  plugins: [],
};
