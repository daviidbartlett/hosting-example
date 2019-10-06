exports.createRef = (list, { key, value }) => {
  if (!list.length) return {};
  return list.reduce((ref, item) => {
    ref[item[key]] = item[value];
    return ref;
  }, {});
};

exports.formatWizards = (wizards, ref) => {
  if (!wizards.length) return [];
  return wizards.map(({ name: wizard_name, house }) => {
    return { wizard_name, house_id: ref[house] };
  });
};
