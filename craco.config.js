// This file is needed for create-react-app style projects
// You can remove this if you use Vite or another tool
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.extensions = ['.jsx','.json']; // Prioritize .jsx files
      return webpackConfig;
    },
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
