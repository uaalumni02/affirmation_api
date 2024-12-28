const isValidCategory = (category) => {
  const regExp = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/i;
  return regExp.test(category);
};

export { isValidCategory };
