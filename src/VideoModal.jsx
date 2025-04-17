import styled, {keyframes} from "styled-components";
import CrossIcon from "./svg/cross.jsx";
import {useEffect, useRef, useState} from "react";
import PlayIcon from "./svg/play.jsx";
import ChevronDownIcon from "./svg/chevronDown.jsx";
// import {keyframes} from "motion";

const VideoModal = ({
    onClose
                    }) => {
    const [showCloseButton, setShowCloseButton] = useState(false)
    const [showPlayButton, setShowPlayButton] = useState(true)
    const [ended, setEnded] = useState(false)
    const playerRef = useRef();
    const iframeRef = useRef();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowCloseButton(true)
        }, 3000)

        playerRef.current = new Vimeo.Player(iframeRef.current);
        playerRef.current.on('ended', () => {
            setEnded(true)
        })
        playerRef.current.on('play', () => {
            setShowPlayButton(false)
            setEnded(false)
        })
        playerRef.current.on('pause', () => {
            setShowPlayButton(true)
        })

        const setRealViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        setRealViewportHeight();
        window.addEventListener('resize', setRealViewportHeight);

        return () => {
            clearTimeout(timeout)
            window.removeEventListener('resize', setRealViewportHeight);
        }
    }, []);

    const closeAndPauseVideo = () => {
        playerRef.current?.pause();
        onClose();
    }

    const playVideo = () => {
        playerRef.current?.play()
    }

    return (
        <div  id="modal-container2">
            <div className="modal-background">
                {showCloseButton && <CloseButton onClick={closeAndPauseVideo}>skip</CloseButton>}
                <div className="modal" style={{padding: 0}}>
                    <VideoContainer>
                        <iframe src="https://player.vimeo.com/video/1073956329?h=7b50ff2ee3&amp;app_id=122963"
                                 frameBorder="0"
                                ref={iframeRef}
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                title="KK wedding invatation" data-ready="true" id="myVimeo"></iframe>
                    </VideoContainer>
                    {showPlayButton && !ended && <PlayButton onClick={playVideo}><StyledPlayIcon/></PlayButton>}
                    {ended &&
                      <MessageContainer>
                          <SeeMoreButton onClick={closeAndPauseVideo}>Open the invitation</SeeMoreButton>
                          <StyledChevron/>
                      </MessageContainer>
                    }
                </div>
            </div>
        </div>
    )
}

const VideoContainer = styled.div`
    position: relative;
    aspect-ratio: 240 / 427;
    height: calc(var(--vh, 1vh) * 100);
    max-width: 100vw;
    
    & iframe, & video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    width: 44px;
    height: 44px;
    background-color: transparent;
    z-index: 1300;
    border: none;
    color: #888888;
`

const StyledCloseIcon  = styled(CrossIcon)`
    flex-shrink: 0;
    backface-visibility: hidden;
    display: inline-block;
    vertical-align: middle;
    height: 44px;
    width: 44px;
    color: #888888;
`

const PlayButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    outline: none;
    border: 0;
    color: white;
    border-radius: 50%;
`

const StyledPlayIcon = styled(PlayIcon)`
    color: white;
    width: 30vw;
    height: 30vw;
    max-width: 226px;
    max-height: 226px;
`

const MessageContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    bottom: 0;
`

const SeeMoreButton = styled.button`
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 2rem;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    border: 0;
    margin-bottom: 1.5rem;
`

const floating = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0px);
    }
    40% {
        transform: translateY(-23px);
    }
    60% {
        transform: translateY(-23px);
    }
`;

const StyledChevron = styled(ChevronDownIcon)`
    bottom: 2px;
    animation: 4s ease-out 1.5s infinite normal none running ${floating} ;
`

export default VideoModal