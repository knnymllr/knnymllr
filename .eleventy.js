module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addPassthroughCopy("src/scss");

  return {
    dir: {
      input: "src",
      output: "_public",
    },
  };
};
