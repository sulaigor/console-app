const getEncodedData = (data: string) => btoa(data);
const getDecodedData = (data: string) => atob(data);

const getItem = (key: string): string => {
  const encodedKey = getEncodedData(key);
  const keyValue = localStorage.getItem(encodedKey);

  if (!keyValue) return '';
  return getDecodedData(keyValue);
};

const setItem = (key: string, value: string): void => {
  const encodedKey = getEncodedData(key);
  const encodedValue = getEncodedData(value);
  localStorage.setItem(encodedKey, encodedValue);
};

const removeItem = (key: string): void => {
  const encodedKey = getEncodedData(key);
  localStorage.removeItem(encodedKey);
};

export const getStorageUtils = (key: string) => ({
  getItem: () => getItem(key),
  setItem: (value: string) => setItem(key, value),
  removeItem: () => removeItem(key),
});
