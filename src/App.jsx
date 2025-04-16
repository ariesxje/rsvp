import {useEffect, useRef, useState} from 'react'
import './App.css'
import './modal.css'
import LeftSide from "./LeftSide.jsx";
import styled from "styled-components";
import Home from "./Home.jsx";
import Schedule from "./Schedule.jsx";
import WhereToStay from "./WhereToStay.jsx";
import Travel from "./Travel.jsx";
import Registry from "./Registry.jsx";
import FAQ from "./FAQ.jsx";
import useIsMobile from "./hooks/useWindowDimensions.js";
import RSVPModal from "./RSVPModal.jsx";
import VideoModal from "./VideoModal.jsx";

const sectionImageMapping = {
    welcome: 'https://withjoy.com/media/ebeefa4f8d2bbc6c303fdf0745c22656b4a50ba0d8daedb8f/5124ecb0-1540-11f0-afd5-cf92046b8b40-IMG_9393.JPG?rendition=xlarge',
    schedule: 'https://withjoy.com/media/ebeefa4f8d2bbc6c303fdf0745c22656b4a50ba0d8daedb8f/4bb55380-19f2-11f0-84b5-5343c3402306-Artboard.jpeg?rendition=xlarge',
    accommodations: 'https://withjoy.com/media/2652fd5c-609f-4ed1-9262-88fdf3f7d330/b0b1e5d0-1549-11f0-a0fc-b538aad12de8-IMG_9409.JPG?rendition=xlarge',
    travel: 'https://withjoy.com/media/ebeefa4f8d2bbc6c303fdf0745c22656b4a50ba0d8daedb8f/ec081470-1543-11f0-a0f9-d501c3f66cc8-weyne-yew-iFdPrhOPI_E-unsplash.jpg?rendition=xlarge',
    registry: 'https://withjoy.com/media/ebeefa4f8d2bbc6c303fdf0745c22656b4a50ba0d8daedb8f/e6886620-1549-11f0-a0fc-b538aad12de8-DSC01160.JPG?rendition=xlarge',
    faq: 'https://withjoy.com/media/ebeefa4f8d2bbc6c303fdf0745c22656b4a50ba0d8daedb8f/0bf25740-154a-11f0-a0fc-b538aad12de8-DSC01155.JPG?rendition=xlarge',
}
function App() {
    const isMobile = useIsMobile();
    const [currentSection, setCurrentSection] = useState('welcome')
    const scrollContainerRef = useRef()

    const rsvp = () => {
        document.getElementById('modal-container').removeAttribute('class')
        document.getElementById('modal-container').classList.add('two')
        document.getElementsByTagName('body')[0].classList.add('modal-active')
    }

    const closeRsvp = () => {
        document.getElementById('modal-container').classList.add('out')
        document.getElementsByTagName('body')[0].classList.remove('modal-active')
    }

    const openVideo = () => {
        document.getElementById('modal-container2').removeAttribute('class')
        document.getElementById('modal-container2').classList.add('one')
        document.getElementsByTagName('body')[0].classList.add('modal-active')
    }

    const closeVideo = () => {
        document.getElementById('modal-container2').classList.add('out')
        document.getElementsByTagName('body')[0].classList.remove('modal-active')
    }

    useEffect(() => {
        openVideo()
    }, []);

    return (
        <>
            <Container ref={scrollContainerRef}>
                {!isMobile && <LeftSide imageUrl={sectionImageMapping[currentSection]}></LeftSide>}
                <RightSide>
                    <Home rsvp={rsvp} scrollContainer={scrollContainerRef} onVisible={setCurrentSection}></Home>
                    <Schedule scrollContainer={scrollContainerRef} onVisible={setCurrentSection}></Schedule>
                    <WhereToStay scrollContainer={scrollContainerRef} onVisible={setCurrentSection}></WhereToStay>
                    <Travel scrollContainer={scrollContainerRef} onVisible={setCurrentSection}></Travel>
                    <Registry scrollContainer={scrollContainerRef} onVisible={setCurrentSection}></Registry>
                    <FAQ scrollContainer={scrollContainerRef} onVisible={setCurrentSection}></FAQ>
                </RightSide>
            </Container>
            <RSVPModal onClose={closeRsvp}/>
            <VideoModal onClose={closeVideo}/>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    flex-direction: column;
    visibility: initial;
    transition: opacity 500ms cubic-bezier(0.23, 1, 0.32, 1);
    height: 100vh;
    max-height: 100%;
    z-index: 1;
    overflow: auto;
    display: flex;
    scroll-behavior: smooth;
`;

const RightSide = styled.div`
    background: rgb(255, 255, 255);
    width: 39%;
    transition: background 500ms cubic-bezier(0.23, 1, 0.32, 1), background-color 500ms cubic-bezier(0.23, 1, 0.32, 1);
    position: static;
    margin-left: auto;
    z-index: 1;

    @media screen and (max-width: 60em) {
        width: 100%;
    }
`;



export default App
