import styled from "styled-components";
import {useEffect, useState} from "react";
import { motion, AnimatePresence } from 'motion/react';

const LeftSide = ({
    imageUrl
                  }) => {
    const [currentImage, setCurrentImage] = useState(imageUrl);
    const [prevImage, setPrevImage] = useState(null);
    let timeout;

    useEffect(() => {
        if (imageUrl !== currentImage) {
            clearTimeout(timeout)
            console.log('set prev', currentImage)
            console.log('set new', imageUrl)
            setPrevImage(currentImage);
            setCurrentImage(imageUrl);
            timeout = setTimeout(() => {
                console.log(prevImage)
                setPrevImage(null); // remove after fade
            }, 800); // must match fade duration

            return () => clearTimeout(timeout);
        }
    }, [imageUrl]);

    return (
        <Container>
            <div style={{position: 'relative', height: '100%', width: '61%'}}>
                <AnimatePresence initial={false}>
                    {
                        prevImage &&
                        <ImageContainer
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ ease: [1, 0.9, 0.7, 0], duration: 1.5}}
                            exit={{ opacity: 0 }}
                            key={prevImage}
                            style={{backgroundImage: `url(${prevImage})`}}
                        />
                    }
                    <ImageContainer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ease: [0, 0.7, 0.9, 1], duration: 1.5}}
                        exit={{ opacity: 0 }}
                        key={imageUrl}
                        style={{backgroundImage: `url(${imageUrl})`}}
                    />
                </AnimatePresence>
                <ImageOverlay>
                    <HighLight>KATIE & KYLE</HighLight>
                    <SubtitleContainer><Subtitle>We said yes to forever — now we just need you to say yes to the party!</Subtitle></SubtitleContainer>
                </ImageOverlay>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    inset: 0;
    pointer-events: none;
`;

const ImageContainer = styled(motion.div)`
    position: absolute;
    pointer-events: none;
    inset: 0;
    height: 100vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: background-position 500ms cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 1;
`;

const ImageOverlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 10% 20% 11% 10%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.306) 13%, rgba(0, 0, 0, 0.227) 26%, rgba(0, 0, 0, 0.165) 37%, rgba(0, 0, 0, 0.114) 48%, rgba(0, 0, 0, 0.07) 59%, rgba(0, 0, 0, 0.043) 68%, rgba(0, 0, 0, 0.024) 77%, rgba(0, 0, 0, 0.008) 85%, rgba(0, 0, 0, 0.004) 92%, rgba(0, 0, 0, 0) 100%);
    width: 100%;
    height: 75%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    bottom: 0px;
    align-items: flex-start;
    color: rgb(255, 255, 255);
`

const HighLight = styled.p`
    font-family: "Cinzel Decorative";
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 1.25;
    text-transform: none;
    letter-spacing: 0;
`

const SubtitleContainer = styled.div`
    margin-top: 1rem;
`
const Subtitle = styled.p`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.0625rem;
    line-height: 1.5;
    letter-spacing: 0em;
    white-space: pre-wrap;
`

export default LeftSide;