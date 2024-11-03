import React, {useState, useEffect}from 'react';


const Router = ({children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onPathChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener("popstate",onPathChange);
        return () => {window.removeEventListener("popstate",onPathChange);}
    },[]);    

    return (
        <div style={{width: "100%", height: "100%"}}>
            {
                 React.Children.map(children, child => (
                    child.props.href === currentPath ? child : null
                 ))
            }

        </div>
    );
}

export default Router;



