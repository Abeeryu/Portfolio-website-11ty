module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};