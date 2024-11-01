import {useEffect} from 'react';

const Route = ({path, children}) => {
    useEffect(() => {
        
    },[]);
    return window.location.pathname === path ? children: null;
}

export default Route;