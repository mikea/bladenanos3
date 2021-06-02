const dev = true;

const postcss = require('postcss');
const postcssPlugins = [
    require('postcss-advanced-variables'),
    require('postcss-nested'),
    require('cssnano')
];
const postcssOptions = {
    from: 'scss/main.scss',
    syntax: require('postcss-scss'),
    map: dev ? { inline: true } : false
};

module.exports = async (content, outputPath) => {
    if (!String(outputPath).endsWith('.css')) return content;
    return (
        await postcss(postcssPlugins).process(content, postcssOptions)
    ).css;
};