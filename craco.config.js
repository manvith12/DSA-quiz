// This file is needed for create-react-app style projects
// You can remove this if you use Vite or another tool
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
