const getPayload = (userDataValues) => {
  const { _password, ...payload } = userDataValues;
  return payload;
};

module.exports = getPayload;