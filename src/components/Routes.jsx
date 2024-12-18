import React, {useState, useEffect}from 'react';
import Footer from './Footer';

//custom implementation of the Router component
const Router = ({children}) => {
    //keep track of what the current path is
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //upon load, set path to current path, and add a listender for the popstate event
    useEffect(() => {
        const onPathChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener("popstate",onPathChange);

        //make sure to clean up listeners upon dismount!
        return (() => {
                window.removeEventListener("popstate",onPathChange);
            }
        );
    },[]);    

    const noMatchPath = () => {
        for (const child of children) {
            if (child.props.href === currentPath) {
                return false;
            }
        }

        return true;
    }

    //only display children if they match the path
    return (
        <>
            {
                 React.Children.map(children, child => (
                    child.props.href === currentPath ? child : null
                 ))
            }
            {
                noMatchPath() &&
                <> 
                    No matching page found
                    <Footer href="/home" />
                </>
            }

        </>
    );
}

//export router
export default Router;



