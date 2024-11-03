import React, {useState, useEffect} from 'react';
import Link from '../components/Link';
import '../style/TitlePage.css';
import pigeon from '../static/pixelPigeon.png';

const TitlePage = () => {
    const [anim,setAnim] = useState();

    useEffect(() => {
        console.log("set interval");
        setAnim(
            setInterval(()=> {
                const pigeon = document.getElementById("pixelPigeon");
                if (pigeon) {
                    const pigeonPos = pigeon.offsetLeft;
                    pigeon.style.left = (pigeonPos - 2) + "px";
                    if (pigeon.offsetLeft < -50) {
                        pigeon.style.left = "100%";
                    }
                }
            }, 1000/60)
        );
        return ()=>{
            console.log("clean up");
            clearInterval(anim);
        }
    },[])

    return (
        <div className="_titlePageMainDiv">
            <img id="pixelPigeon" className="_pixelPigeon" alt="pixel pigeon" src={pigeon}></img>
            <div className='_titleContainer'>
                <Link className="_titleLink" href="home">
                    <span className="_titleSpan _titleInitial">Peter Jiang</span>
                    <span className="_titleSpan _titleSecond">Enter</span>
                </Link>
            </div>
            

        </div>
    );
}
export default TitlePage;