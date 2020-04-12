export const updateObject = (oldObjects, updatedProperties) => {
  return {
    ...oldObjects,
    ...updatedProperties,
  };
};
