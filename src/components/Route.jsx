import {useEffect, useState} from 'react';

const Route = ({path, children}) => {
    [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        
    },[]);
    return window.location.pathname === path ? children: null;
}

export default Route;