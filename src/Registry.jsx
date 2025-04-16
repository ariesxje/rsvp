import styled from "styled-components";
import {
    SectionContainer,
    SectionImageBox,
    SectionImageContainer,
    SectionImageSizer,
    SectionImageWrapper,
    Title
} from "./ui/ui.jsx";
import {useEffect, useRef} from "react";
import {useElementAboveScreenMidpoint} from "./hooks/useElementAtScreenMidPoint.js";
import useIsMobile from "./hooks/useWindowDimensions.js";
import ThankYou from './assets/images/Thank-You-PNG-Isolated-Photo.png';

const Registry = ({
    onVisible,
    scrollContainer
                  }) => {
    const ref = useRef()
    const isMobile = useIsMobile()
    const isMid = useElementAboveScreenMidpoint(scrollContainer, ref, !isMobile);

    useEffect(() => {
        if (isMid) {
            onVisible('registry');
        }
    }, [isMid, onVisible]);
    return (
        <div style={{display: 'inline-block', width: '100%'}} id='registry' ref={ref}>
            <RegistryContainer>
                {isMobile &&
                    <SectionImageContainer>
                        <SectionImageSizer>
                            <SectionImageWrapper ratio={66.6667}>
                                <SectionImageBox style={{backgroundImage: 'url(https://withjoy.com/media/ebeefa4f8d2bbc6c303fdf0745c22656b4a50ba0d8daedb8f/e6886620-1549-11f0-a0fc-b538aad12de8-DSC01160.JPG?rendition=medium)'}}/>
                            </SectionImageWrapper>
                        </SectionImageSizer>
                    </SectionImageContainer>
                }
                <Title>Registry</Title>
                <ContentContainer><p>We're lucky to have everything we need at home. If you'd like to give a gift, we’d be grateful for a contribution to help us build our next chapter.</p></ContentContainer>
                <div>
                    {/*<div style={{backgroundImage: `url(${ThankYou})`}} />*/}
                    <ThankYouImage src={ThankYou}/>
                </div>
            </RegistryContainer>
        </div>
    )
}

const RegistryContainer = styled(SectionContainer)`
    @media screen and (min-width: 90em) {
        max-width: 614px;
    }
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    max-width: 700px;
`

const ContentContainer = styled.div`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.5;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: center;
    word-break: break-word;
    
    @media screen and (min-width: 64em) {
        max-width: calc(27.5rem);
    }
`

const ThankYouImage = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
`
export default Registry;