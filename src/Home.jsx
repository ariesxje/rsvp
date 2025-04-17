import styled from "styled-components";
import {SectionContainer} from "./ui/ui.jsx";
import {useEffect, useRef} from "react";
import {useElementAboveScreenMidpoint} from "./hooks/useElementAtScreenMidPoint.js";
import useIsMobile from "./hooks/useWindowDimensions.js";

const Home = ({
    rsvp,
    onVisible,
    scrollContainer,
              }) => {
    const ref = useRef()
    const isMobile = useIsMobile()
    const isMid = useElementAboveScreenMidpoint(scrollContainer, ref, !isMobile)

    useEffect(() => {
        if (isMid) {
            onVisible('welcome');
        }
    }, [isMid, onVisible]);

    return (
        <div style={{display: 'inline-block', width: '100%'}} id='welcome' ref={ref}>
            {isMobile &&
                <Hero>
                    <ImageBox/>
                    <ImageOverlay>
                        <TitleContainer>
                            <TitleWrapper>
                                <div>KATIE & KYLE</div>
                            </TitleWrapper>
                        </TitleContainer>
                        <SubtitleContainer>
                            <Subtitle>We said yes to forever — now we just need you to say yes to the party!</Subtitle>
                        </SubtitleContainer>
                    </ImageOverlay>
                </Hero>
            }
            <SectionContainer id='welcomeMessage'>
                <Container>
                    <Background1>
                        <BackgroundContent1></BackgroundContent1>
                    </Background1>
                    <Background2>
                        <BackgroundContent2></BackgroundContent2>
                    </Background2>
                    <Background3>
                        <BackgroundContent3></BackgroundContent3>
                    </Background3>
                    <ContentContainer>
                        <div style={{flexDirection: 'column', textAlign: 'center', display: 'flex'}}>
                            <Paragraph1>Monday
                                January 5, 2026</Paragraph1>
                            <div style={{marginTop: '1rem'}}>
                                <Paragraph2>Stones of the Yarra Valley, Saint Huberts Road, Coldstream VIC, Australia</Paragraph2>
                            </div>
                        </div>
                        <ButtonContainer>
                            <RSVPButton onClick={rsvp}>RSVP</RSVPButton>
                        </ButtonContainer>
                    </ContentContainer>
                </Container>
            </SectionContainer>
        </div>
    );
}

const Container = styled.div`
    color: rgba(51, 51, 51, 1);
    background-color: rgba(255, 255, 255, 1);
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    padding-right: 15%;
    padding-left: 15%;
    overflow-y: hidden;
`;

const Background1 = styled.div`
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    pointer-events: none;
`;

const BackgroundContent1 = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-image: url('https://withjoy.com/assets/public/styles/prod/vineyard_vignette/03ae591f81f3fe41351249cebaeade1325e942af850bbc6625dfe92ae2e5678c@2x');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
`;

const Background2 = styled.div`
    left: 50%;
    width: 100%;
    bottom: 0;
    height: auto;
    position: absolute;
    transform: translateX(-50%);
    pointer-events: none;

    &:after {
        width: 0;
        content: ' ';
        display: block;
        padding-top: 54.72826086956522%;
    }
`;

const BackgroundContent2 = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: contain;
    background-image: url('https://withjoy.com/assets/public/styles/prod/vineyard_vignette/32129f2955bebd8ab1e5e7280359874c9fa587a988ec3a9a973ee53765c27500@2x');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
`;

const Background3 = styled.div`
    top: 0;
    left: 50%;
    width: 104px;
    height: 99.9585px;
    position: absolute;
    transform: translateX(-50%);
    pointer-events: none;
`;

const BackgroundContent3 = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: contain;
    background-image: url('https://withjoy.com/assets/public/styles/prod/vineyard_vignette/2cc991f257f29f7e05c979a36702e70cc73e1b40368be1c42e9d38dcb9c82e51@2x');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: top;
`;

const ContentContainer = styled.div`
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    row-gap: 3rem;
    display: flex
;
`

const Paragraph1 = styled.p`
    font-family: "Cinzel Decorative";
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.25;
    text-transform: none;
    letter-spacing: 0em;
    white-space: pre-wrap;
`

const Paragraph2 = styled.p`
    font-family: "Cinzel Decorative";
    font-weight: 400;
    font-size: 1.625rem;
    line-height: 1.25;
    text-transform: none;
    letter-spacing: 0em;
`

const ButtonContainer = styled.div`
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    max-width: max-content;
`

const RSVPButton = styled.button`
    appearance: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 9999px;
    vertical-align: middle;
    border: 2px solid rgb(182, 148, 190);
    text-decoration: none;
    position: relative;
    white-space: nowrap;
    transition: background-color 500ms cubic-bezier(0.23, 1, 0.32, 1), color 500ms cubic-bezier(0.23, 1, 0.32, 1), border-color 500ms cubic-bezier(0.23, 1, 0.32, 1);
    letter-spacing: -0.01em;
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2;
    font-feature-settings: "tnum", "lnum";
    height: 3rem;
    min-width: 3rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    background-color: transparent;

    width: 100%;
    color: inherit;
    border-color: inherit;
    display: inline-flex;
    
    &:hover {
        opacity: 0.8;
    }
`

const Hero = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    position: relative;
    color: white;
`
const ImageBox = styled.div`
    position: absolute;
    pointer-events: none;
    inset: 0px;
    height: 100vh;
    background-image: url('https://withjoy.com/media/ebeefa4f8d2bbc6c303fdf0745c22656b4a50ba0d8daedb8f/5124ecb0-1540-11f0-afd5-cf92046b8b40-IMG_9393.JPG?rendition=xlarge');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: background-position 500ms cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 1;
`

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
`

const TitleContainer = styled.div`
    font-family: "Cinzel Decorative";
    font-weight: 400;
    line-height: 1.25;
    text-transform: none;
    letter-spacing: 0em;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    flex-direction: column;
`

const TitleWrapper = styled.div`
    height: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    flex-direction: column;
    font-size: 100px;
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

export default Home;