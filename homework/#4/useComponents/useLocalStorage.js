import { useState } from 'react'

function useLocalStorage(initialKey, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(initialKey);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            const valueToStore = typeof value === 'function' ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(initialKey, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}

export default useLocalStorage