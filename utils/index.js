exports.createRef = (list, { key, value }) => {
  if (!list.length) return {};
  return list.reduce((ref, item) => {
    ref[item[key]] = item[value];
    return ref;
  }, {});
};
