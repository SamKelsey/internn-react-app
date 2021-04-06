// @args Path to directory, filename
export default (filename) => {
  const {
    title,
    subtitle,
    intro,
    body,
  } = require(`../Blog/articleData/${filename}`);

  return {
    filename,
    title,
    subtitle,
    intro,
    body,
  };
};
