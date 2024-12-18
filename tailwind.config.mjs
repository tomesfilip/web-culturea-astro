/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'dark-green': '#234526',
      'light-green': '#6A984D',
      beige: '#FEFAE0',
      'light-brown': '#DDA15E',
      'dark-brown': '#BC6C25',
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
