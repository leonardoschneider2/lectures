export const addPersonalData = (value) => ({
  type: 'ADD_PERSONAL_DATA',
  ...value,
});

export const addProfessionalData = (value) => ({
  type: 'ADD_PROFESSIONAL_DATA',
  ...value,
});
