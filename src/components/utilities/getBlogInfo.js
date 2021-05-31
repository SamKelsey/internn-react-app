// @args Path to directory, filename
const fn = (filename) => {
  const blogObject = require(`../Blog/articleData/${filename}`);

  return blogObject;
};

export default fn;
