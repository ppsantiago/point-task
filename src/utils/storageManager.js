// export const saveDataStorage = (dataStorage) => {
//   localStorage.setItem("dataStorage", JSON.stringify(dataStorage));
// };

// export const loadDataStorage = () => {
//   const storage = JSON.parse(localStorage.getItem("dataStorage"));
//   return storage || [];
// };

// export const deleteDataStorageItem = (id) => {
//   const dataStorage = loadDataStorage();
//   const newDataStorage = dataStorage.filter((todo) => todo.id !== id);
//   saveDataStorage(newDataStorage);
// };

// export const updateDataStorageItem = (id, newData) => {
//   const dataStorage = loadDataStorage();
//   const newDataStorage = dataStorage.map((todo) => {
//     if (todo.id === id) {
//       return { ...todo, status: newData };
//     }
//     return todo;
//   });
//   saveDataStorage(newDataStorage);
//   return newDataStorage;
// };

// export const getOneTodo = (id) => {
//   const dataStorage = loadDataStorage();
//   return dataStorage.find((todo) => todo.id === id);
// };
const saveAndLoadData = (data) => {
  if (data) {
    localStorage.setItem("dataStorage", JSON.stringify(data));
  } else {
    const storage = JSON.parse(localStorage.getItem("dataStorage"));
    return storage || [];
  }
};

export const saveDataStorage = (dataStorage) => {
  saveAndLoadData(dataStorage);
};

export const loadDataStorage = () => {
  return saveAndLoadData();
};

export const deleteDataStorageItem = (id) => {
  const dataStorage = loadDataStorage();
  const newDataStorage = dataStorage.filter((todo) => todo.id !== id);
  saveDataStorage(newDataStorage);
};

export const updateDataStorageItem = (id, newData) => {
  const dataStorage = loadDataStorage();
  const newDataStorage = dataStorage.map((todo) => {
    if (todo.id === id) {
      return { ...todo, status: newData };
    }
    return todo;
  });
  saveDataStorage(newDataStorage);
  return newDataStorage;
};

export const getOneTodo = (id) => {
  const dataStorage = loadDataStorage();
  return dataStorage.find((todo) => todo.id === id);
};
