export type UseLocalStorageProps<T> = {
  key: string;
  defaultValue?: T | null;
};

const useLocalStorage = <T>(props: UseLocalStorageProps<T>) => {
  const { key, defaultValue = null } = props;

  const getFromLocalStorage = (): T | null => {
    try {
      const data = localStorage.getItem(key);
      const parsedData = data ? JSON.parse(data) : null;
      return parsedData;
    } catch (err) {
      console.log(`Error getting ${key} value from local storage`);
      return defaultValue;
    }
  };

  const setLocalStorage = (value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(`Error getting ${key} value from local storage`);
    }
  };

  function removeLocalStorage(): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing key "${key}" from localStorage:`, error);
    }
  }

  return {
    getFromLocalStorage,
    setLocalStorage,
    removeLocalStorage,
  };
};

export default useLocalStorage;
