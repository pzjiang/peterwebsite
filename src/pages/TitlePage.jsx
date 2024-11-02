import React from 'react';
import Link from '../components/Link';
import '../style/TitlePage.css';

const TitlePage = () => {
    return (
        <div className="_titlePageMainDiv">
            <Link className="_titleLink" href="hello">Peter Jiang</Link>
        </div>
    );
}
export default TitlePage;