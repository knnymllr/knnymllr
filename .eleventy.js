module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/fonts");

  eleventyConfig.addCollection("nav", function (collection) {
    let pages = collection.getFilteredByTag("nav");
    return pages.sort(function (a, b) {
      return a.data.weight - b.data.weight;
    })
  });

  return {
    dir: {
      input: "src",
      output: "_public",
    },
  };
};
