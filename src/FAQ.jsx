import {
    BigContentColumn, Link,
    SectionContainer, SectionImageBox,
    SectionImageContainer,
    SectionImageSizer,
    SectionImageWrapper,
    Title
} from "./ui/ui.jsx";
import styled from "styled-components";
import {useEffect, useRef} from "react";
import {useElementAboveScreenMidpoint} from "./hooks/useElementAtScreenMidPoint.js";
import useIsMobile from "./hooks/useWindowDimensions.js";
import Map from './assets/images/map.png'

const FAQ = ({
    onVisible,
    scrollContainer,
             }) => {
    const ref = useRef()
    const isMobile = useIsMobile()
    const isMid = useElementAboveScreenMidpoint(scrollContainer, ref, !isMobile);

    useEffect(() => {
        if (isMid) {
            onVisible('faq');
        }
    }, [isMid, onVisible]);
    return (
        <div style={{display: 'inline-block', width: '100%'}} id='faq' ref={ref}>
            <QAContainer>
                {isMobile &&
                    <SectionImageContainer>
                        <SectionImageSizer>
                            <SectionImageWrapper ratio={150}>
                                <SectionImageBox style={{backgroundImage: 'url(https://withjoy.com/media/ebeefa4f8d2bbc6c303fdf0745c22656b4a50ba0d8daedb8f/0bf25740-154a-11f0-a0fc-b538aad12de8-DSC01155.JPG?rendition=medium)'}}/>
                            </SectionImageWrapper>
                        </SectionImageSizer>
                    </SectionImageContainer>
                }
                <Title>Q & A</Title>
                <Subtitle><p>We have prepared some commonly asked questions and answers about the party, please check them out! If you still have questions, you are more than welcome to ask us directly!</p></Subtitle>
                <ContentContainer>
                    <div style={{flexDirection: 'column', display: 'flex'}}>
                        <BigContentColumn>
                            <Question>When is the RSVP deadline?</Question>
                            <Answer><p>Please RSVP by the 20th of June, so we can have an estimate for catering. 🥰 We hope you’ll be able to join us on our special day, but we completely understand if you’re unable to make it. Your love and well wishes mean the world to us either way! (<Link href="#welcomeMessage">Take me to RSVP</Link>)</p></Answer>
                        </BigContentColumn>
                        <BigContentColumn>
                            <Question>Can I bring a date?</Question>
                            <Answer><p>We send out invitations to each individual unless we don't know who your +1 is. If that's the case, please enter your +1's details when you RSVP.</p></Answer>
                        </BigContentColumn>
                        <BigContentColumn>
                            <Question>Are kids welcome?</Question>
                            <Answer><p>As much as we love your little ones, due to limited seating, we’ve decided to keep the ceremony and reception adults-only. We hope this gives you the perfect opportunity to relax and enjoy the evening!</p></Answer>
                        </BigContentColumn>
                        <BigContentColumn>
                            <Question>What should I wear?</Question>
                            <Answer><p>Garden formal. Please refer to the <Link href="#schedule">dress color code here</Link>. Ladies - Let's avoid black!</p></Answer>
                        </BigContentColumn>
                        <BigContentColumn>
                            <Question>What will the weather be like?</Question>
                            <Answer><p>Welcome to Melbourne—where you might experience all four seasons in a single day! Our Kiwi friends may feel right at home, but be ready for temperatures that can soar up to 40°C during the day. If you're traveling from afar, don’t be surprised to see the sun still shining around 8pm. Just be sure to pack a few warm layers, as the evenings can get chilly quickly once the sun goes down.</p></Answer>
                        </BigContentColumn>
                        <BigContentColumn>
                            <Question>Where should I park?</Question>
                            <Answer><p>Our reception is at the <b>Stables</b>, not the Barn. Free car parking is available for guests, as you head down the entrance of The Stones driveway, veer <b>left</b> (follow "The Stables" signage) and head towards the hedges for convenient parking.</p></Answer>
                            <img style={{marginTop: 20}} src={Map} />
                        </BigContentColumn>
                        <BigContentColumn>
                            <Question>Are the ceremony and reception locations wheelchair accessible?</Question>
                            <Answer><p>Yes, and we will have a golf cart available for anyone needing assistance getting around the property!</p></Answer>
                        </BigContentColumn>
                        <BigContentColumn>
                            <Question>Is the wedding indoors or outdoors?</Question>
                            <Answer><p>Both our ceremony and reception will take place indoors, while some of the photos will be taken outdoors.</p></Answer>
                        </BigContentColumn>
                        <BigContentColumn>
                            <Question>What kind of shoes should/shouldn't I wear?</Question>
                            <Answer><p>Most parts of the wedding will be indoors, but there are grassy areas you might need to walk on to get to certain spots like group photos. We recommend wearing chunky heels or sandals to stay comfortable—after all, we’d hate for anyone to ruin their nice shoes or risk an ankle injury!</p></Answer>
                        </BigContentColumn>
                        <BigContentColumn>
                            <Question>Is it okay to take pictures during the ceremony?</Question>
                            <Answer><p>We’d love for you to take photos and share them with us. However, we kindly ask that you refrain from taking photos during the ceremony. The celebrant will let you know when it’s time to take a quick snap.</p></Answer>
                        </BigContentColumn>
                    </div>
                </ContentContainer>
            </QAContainer>
        </div>
    )
}

const QAContainer = styled(SectionContainer)`
    @media screen and (min-width: 90em) {
        max-width: 614px;
    }
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    max-width: 700px;
`

const Subtitle = styled.div`
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

const ContentContainer = styled.div`
    margin: 0px auto;
    padding: 4rem 2rem;
    
    @media screen and (min-width: 64em) {
        max-width: calc(27.5rem);
    }
`

const Question = styled.p`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1.0625rem;
    line-height: 1.4;
    letter-spacing: -0.005em;
`

const Answer = styled.div`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0em;
    word-break: break-word;
    margin-top: 1rem;
`

export default FAQ;
