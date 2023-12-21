/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { flushOrange: '#FE8133', lightOrange: '#F9BA7E', cookieBg: '#59BEBF' },
      fontFamily: {
        body: ['GalanoGrotesqueRegular'],
        headline: ['GalanoGrotesqueBold'],
      },
    },
  },
  plugins: [],
};
