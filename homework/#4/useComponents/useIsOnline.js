import { useState, useEffect } from 'react';

function getOnlineStatus() {
    return typeof navigator !== "undefined" && typeof navigator.onLine === "boolean" ? navigator.onLine : true;
}

function useIsOnline() {
    const [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());

    const handleOnline  = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    useEffect(() => {
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return onlineStatus;
}

export default useIsOnline