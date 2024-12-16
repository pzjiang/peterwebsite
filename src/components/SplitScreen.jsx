import React from 'react';
import '../style/ComponentStyles.css';

const SplitScreen = ({children, leftWidth, className}) => {
    return  (
        <>
            <div className={`_splitScreenContainer ${className}`}>
                <div className="_splitScreenLeft" style={{width: `${leftWidth}vw`}}> 
                    {children[0]}
                </div>
                <div className="_splitScreenRight" style={{width: `${100 - leftWidth}vw`}}>
                    {children[1]}
                </div>
            </div>
        </>
    );
}
export default SplitScreen;