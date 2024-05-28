module.exports = (config) => {
  // config.addCollection("blog", (collection) => {
  //   return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  // });

  // Filters
  const date = require("./src/filters/date-filter.js");
  const getLinkActiveState = require("./src/_data/helper.js");
  const w3DateFilter = require("./src/filters/w3-date-filter.js");
  config.addFilter("date", date);
  config.addFilter("w3DateFilter", w3DateFilter);
  config.addFilter("activelink", getLinkActiveState);

  config.addNunjucksFilter("dateFilter", date);
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy("./src/videos/");
  config.addPassthroughCopy("./src/css/");
  config.addPassthroughCopy("./src/js/");
  config.addPassthroughCopy("./src/admin/config.yml");
  config.addPassthroughCopy("./src/admin/");

  config.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  });
  config.addCollection("radios", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/radio-posts/**/*.md");
  });
  config.addCollection("tvs", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/tv-posts/**/*.md");
  });
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      include: "includes",
    },
  };
};
