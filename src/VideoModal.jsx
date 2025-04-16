import styled from "styled-components";
import CrossIcon from "./svg/cross.jsx";
import {useEffect, useState} from "react";

const VideoModal = ({
    onClose
                    }) => {
    const [showCloseButton, setShowCloseButton] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowCloseButton(true)
        }, 3000)

        return () => clearTimeout(timeout)
    }, []);

    return (
        <div  id="modal-container2">
            <div className="modal-background">
                {showCloseButton && <CloseButton onClick={onClose}><StyledCloseIcon/></CloseButton>}
                <div className="modal" style={{padding: 0}}>
                    <VideoContainer>
                        {/*<iframe*/}
                        {/*    src="https://player.vimeo.com/video/1073956329?h=7b50ff2ee3&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"*/}
                        {/*    frameBorder="0"*/}
                        {/*    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"*/}
                        {/*    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}*/}
                        {/*    title="KK wedding invatation"></iframe>*/}
                        <iframe src="https://player.vimeo.com/video/1073956329?h=7b50ff2ee3&amp;app_id=122963"
                                 frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                title="KK wedding invatation" data-ready="true"></iframe>
                    </VideoContainer>
                </div>
            </div>
        </div>
    )
}

const VideoContainer = styled.div`
    position: relative;
    aspect-ratio: 240 / 427;
    height: 100vh;
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

export default VideoModal