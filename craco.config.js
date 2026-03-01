const { plugins } = require("./tailwind.config");

//craco.config.js
module.exports = {
    style:{
        postcss:{
            plugins: [
                require('tailwindercss'),
                require('autoprefixer'),
            ],
        },
    },
};