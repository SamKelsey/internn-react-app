// @args Path to directory, filename
const fn = (filename) => {
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

export default fn;
