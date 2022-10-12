module.exports = {
  content: [    
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx,html}",
      './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tw-elements/dist/plugin')
  ],
}
