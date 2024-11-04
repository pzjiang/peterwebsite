import React from 'react';


const Section = ({className, children}) => {
    return (
        <div style={{width: "100%", height: "500px"}} className={className}>
            {children}
        </div>
    );
}

export default Section;