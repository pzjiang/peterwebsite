import React from 'react';
import Link from '../components/Link';
import '../style/TitlePage.css';

const TitlePage = () => {
    return (
        <div className="_titlePageMainDiv">
            <div className='_titleContainer'>
                <Link className="_titleLink" href="hello">
                    <span className="_titleSpan _titleInitial">Peter Jiang</span>
                    <span className="_titleSpan _titleSecond">Enter</span>
                </Link>
            </div>
            

        </div>
    );
}
export default TitlePage;