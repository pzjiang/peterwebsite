import React, {useState}from 'react';
import Route from './Route'


const Router = ({children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const findRightChild = () => {
        React.Children.toArray(children).forEach(child => {
            if (child.props.href === currentPath) {
                console.log("found path");
                console.log(child.props.href);
                return child;
            }
        })
        console.log("is null");
        return null;
    }

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



