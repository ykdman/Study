export const generateGuid = () => {
  const guid = new crypto.randomUUID();
  return guid;
};
