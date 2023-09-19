/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        small: { max: '600px', min: '50px' },
        large: { max: '5000px', min: '601px' },
      },
      colors: {
        biologyPrimary: '#CC4090',
        biologySecondary: '#CC4090B2',
        artPrimary: '#05A2C2',
        artSecondary: '#05A2C2B2',
        geographyPrimary: '#C26719',
        geographySecondary: '#C26719B2',
        sociologyPrimary: '#9B19C2',
        sociologySecondary: '#9B19C2B2',
        button: '#E9FF1A',
        redNote: '#FF5964',
        yellowNote: '#FFFF99',
        greenNote: '#05FF00',
        grayPlaceholder: '#05FF00',
      },
      boxShadow: {
        around:
          '0 59.6602px 184.454px #00000015, 0 24.9246px 77.0605px #0000001e, 0 13.3259px 41.2002px #00000025, 0 7.47038px 23.0965px #0000002c, 0 3.96746px 12.2664px #00000035, 0 1.65095px 5.10431px #0000004a;',
        modal:
          '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 4px 8px 0px rgba(0, 0, 0, 0.10), 0px 15px 15px 0px rgba(0, 0, 0, 0.09), 0px 33px 20px 0px rgba(0, 0, 0, 0.05), 0px 59px 24px 0px rgba(0, 0, 0, 0.01), 0px 92px 26px 0px rgba(0, 0, 0, 0.00);',
      },
      fontFamily: {
        main: ['Montserrat'],
        special: ['Poiret One'],
        secondary: ['Inter'],
      },
    },
  },
  plugins: [],
}

