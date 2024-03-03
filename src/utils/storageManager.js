export const saveDataStorage = (dataStorage) => {
  localStorage.setItem("dataStorage", JSON.stringify(dataStorage));
};

export const loadDataStorage = () => {
  //   const saveData = localStorage.getItem("dataStorage");
  return JSON.parse(localStorage.getItem("dataStorage"));
};

export const deleteDataStorageItem = (id) => {
  const dataStorage = loadDataStorage();
  const newDataStorage = dataStorage.filter((todo) => todo.id !== id);
  saveDataStorage(newDataStorage);
};
