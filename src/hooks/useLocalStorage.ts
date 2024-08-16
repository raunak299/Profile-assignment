export type UseLocalStorageProps<T> = {
  key: string;
  defaultValue?: T | null;
};

/**
 * Custom hook for interacting with local storage.
 *
 * This hook provides functions to get, set, and remove items from local storage. It uses the provided key to
 * identify the item and optionally allows specifying a default value if the item is not found.
 *
 * @template T - The type of the value stored in local storage.
 * @param {UseLocalStorageProps<T>} props - The props for initializing the hook.
 * @param {string} props.key - The key used to store and retrieve data from local storage.
 * @param {T | null} [props.defaultValue] - An optional default value to return if the key does not exist or if there is an error.
 *
 * @returns {Object} An object with the following methods:
 * @returns {() => T | null} getFromLocalStorage - A function that retrieves the value from local storage. Returns `null` if the key is not found or if there is an error.
 * @returns {(value: T) => void} setLocalStorage - A function that sets the value in local storage.
 * @returns {() => void} removeLocalStorage - A function that removes the value associated with the key from local storage.
 */

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
