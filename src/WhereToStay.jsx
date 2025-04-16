import styled from "styled-components";
import {useEffect, useRef} from "react";
import {useElementAboveScreenMidpoint} from "./hooks/useElementAtScreenMidPoint.js";
import useIsMobile from "./hooks/useWindowDimensions.js";
import {SectionImageBox, SectionImageContainer, SectionImageSizer, SectionImageWrapper} from "./ui/ui.jsx";

const WhereToStay = ({
    onVisible,
    scrollContainer
                     }) => {
    const ref = useRef()
    const isMobile = useIsMobile()
    const isMid = useElementAboveScreenMidpoint(scrollContainer, ref, !isMobile);

    useEffect(() => {
        if (isMid) {
            onVisible('accommodations');
        }
    }, [isMid, onVisible]);
    return (
        <Container id='accommodations' ref={ref}>
            <SecondContainer>
                {isMobile &&
                    <SectionImageContainer>
                        <SectionImageSizer>
                        <SectionImageWrapper ratio={150.011}>
                            <SectionImageBox style={{backgroundImage: 'url(https://withjoy.com/media/2652fd5c-609f-4ed1-9262-88fdf3f7d330/b0b1e5d0-1549-11f0-a0fc-b538aad12de8-IMG_9409.JPG?rendition=medium)'}}/>
                        </SectionImageWrapper>
                        </SectionImageSizer>
                    </SectionImageContainer>
                }
                <Title>WHERE TO STAY</Title>
                <ParagraphWrapper>
                    <p>
                        For our lovely guests traveling from abroad to celebrate with us, we invite you to take this opportunity to explore the beautiful city of Melbourne. We highly recommend staying in or around the city—where great coffee ☕, delicious cuisines 🥘, and of course, boba 🧋, are never far away!
                        <br/>
                        <br/>
                        We’ll also have transportation arranged to and from the venue, so all you need to do is sit back, relax, and enjoy the ride (and the night!).
                    </p>
                </ParagraphWrapper>
            </SecondContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    @media (min-width: 48em) {
        margin-bottom: 4rem;
    }
`

const SecondContainer = styled.div`
    margin-top: 4rem;
    max-width: 700px;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
`

const Title = styled.p`
    font-family: "Cinzel Decorative",serif;
    font-weight: 400;
    font-size: 1.625rem;
    line-height: 62.4px;
    text-transform: none;
    letter-spacing: 0em;
    margin-top: 1rem;
    text-align: center;
    word-break: break-word;
`

const ParagraphWrapper = styled.div`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 325;
    font-size: 1rem;
    line-height: 1.75;
    letter-spacing: 0.16px;
    margin: 2.5rem auto;
    padding-right: 2rem;
    padding-left: 2rem;
    text-align: center;
    max-width: 500px;
    word-break: break-word;
    color: rgb(51, 51, 51);
`

export default WhereToStay;