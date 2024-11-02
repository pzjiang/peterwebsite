import React from 'react';


const Section = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Section;