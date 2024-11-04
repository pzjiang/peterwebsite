import React, {useState, useEffect} from 'react';
import Link from '../components/Link';
import '../style/TitlePage.css';
import pigeon from '../static/pixelPigeon.png';
import pixelCloud from '../static/pixelCloud.png';

const TitlePage = () => {
    const [anim,setAnim] = useState();

    useEffect(() => {
        const pigeon = document.getElementById("pixelPigeon");
        const cloud = document.getElementById("pixelCloud");

        setAnim(
            setInterval(()=> {
                
                if (pigeon) {
                    const pigeonPos = pigeon.offsetLeft;
                    pigeon.style.left = (pigeonPos - 1) + "px";
                    if (pigeon.offsetLeft < -50) {
                        pigeon.style.left = "100%";
                    }
                }
                
                if (cloud) {
                    const cloudPos = cloud.offsetLeft;
                    cloud.style.left = (cloudPos + 2) + "px";
                    if (cloud.offsetLeft > 2500) {
                        cloud.style.left = "-250px";
                    }
                }
            }, 1000/60)
        );
        return ()=>{
            clearInterval(anim);
        }
    },[])

    return (
        <div className="_titlePageMainDiv">
            <img id="pixelPigeon" className="_pixelPigeon" alt="pixel pigeon" src={pigeon}></img>
            <img id="pixelCloud" className="_pixelCloud" alt="pixel cloud" src={pixelCloud}></img>
            
            <div className='_titleContainer'>
                <Link className="_titleLink" href="home">
                    <span className="_titleSpan _titleInitial">Welcome</span>
                    <span className="_titleSpan _titleSecond">Enter</span>
                </Link>
            </div>
            

        </div>
    );
}
export default TitlePage;