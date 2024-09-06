import { useState, useEffect } from 'react';

const useDebounce = <T extends string>(value: T, delay: number = 500): { debouncedValue: T } => {
    const [debouncedValue, setValue] = useState(value);
    useEffect(() => {
        const id = setTimeout(() => {
            setValue(value);
        }, delay);
        return () => {
            clearTimeout(id);
        };
    }, [delay, value]);
    return { debouncedValue };
};

export default useDebounce;
