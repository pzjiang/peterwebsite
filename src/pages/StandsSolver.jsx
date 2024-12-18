import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import wordsFile from '../static/wordsFile.txt';

const StrandsSolver = () => {

    useEffect(() => {
        fetch(wordsFile).then((res) => {res.text()}).then(
            (text)=>{console.log(text);}
        );
    },[]);

    return (
        <>
            <Footer href="/home#projects"/>
        </>
    );

}

export default StrandsSolver;