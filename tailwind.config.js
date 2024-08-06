module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Pixelify Sans',
      tertiary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#ffff',
        site: '#121212',
        semiblack: '#212121',
        accent: '#1db954',
        secondary: '#535353',
        tertiary: '#b3b3b3'
      },
      backgroundImage: {
        main: "url('./assets/bg-main.jpg')",
        responsive: "linear-gradient(153deg, rgba(0,0,0,0.8295693277310925) 0%, rgba(0,0,0,0.4150035014005602) 100%),url('./assets/main-bg-responsive.jpg')",
      },
      filter: {
        custom : 'blur(8px)',
      }
    },
  },
  plugins: [],
};
