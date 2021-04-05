// @args Path to directory, filename
export default (filename) => {
  const { title, subtitle, intro } = require(`../Blog/articleData/${filename}`);

  return {
    filename,
    title,
    subtitle,
    intro,
  };
};
