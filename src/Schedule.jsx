import styled from "styled-components";
import {
    Link,
    PlainColumn,
    SectionContainer,
    SectionImageBox,
    SectionImageContainer, SectionImageSizer,
    SectionImageWrapper,
    Title
} from "./ui/ui.jsx";
import CalenderPlusIcon from "./svg/calenderPlus.jsx";
import ClothHangerIcon from "./svg/clothHanger.jsx";
import LocationMarkIcon from "./svg/locationMark.jsx";
import {useEffect, useRef} from "react";
import {useElementAboveScreenMidpoint} from "./hooks/useElementAtScreenMidPoint.js";
import useIsMobile from "./hooks/useWindowDimensions.js";

const Schedule = ({
    onVisible,
    scrollContainer
                  }) => {
    const ref = useRef()
    const isMobile = useIsMobile()
    const isMid = useElementAboveScreenMidpoint(scrollContainer, ref, !isMobile)

    useEffect(() => {
        if (isMid) {
            onVisible('schedule');
        }
    }, [isMid, onVisible]);
    return (
        <div style={{display: 'inline-block', width: '100%'}} id='schedule' ref={ref}>
            <ScheduleContainer>
                {isMobile &&
                    <SectionImageContainer>
                        <SectionImageSizer>
                            <SectionImageWrapper ratio={66.68}>
                                <SectionImageBox style={{backgroundImage: 'url(https://withjoy.com/media/ebeefa4f8d2bbc6c303fdf0745c22656b4a50ba0d8daedb8f/4bb55380-19f2-11f0-84b5-5343c3402306-Artboard.jpeg?rendition=medium)'}}/>
                            </SectionImageWrapper>
                        </SectionImageSizer>
                    </SectionImageContainer>
                }
                <Title>Schedule</Title>
                <ContentContainer>
                    <PlainColumn>
                        <section>
                            <Header>
                                <DateParagraph>Monday, January 5, 2026</DateParagraph>
                            </Header>
                            <div style={{flexDirection: 'column', display: 'flex'}} role="list">
                                <AnotherColumn role="listitem">
                                    <ColumnWrapper>
                                        <Item>
                                            <ItemSecondary>
                                                <div>
                                                    <EventParagraph>Ceremony and Reception</EventParagraph>
                                                    <EventTime>4:30 PM to 11:00 PM</EventTime>
                                                </div>
                                                <div style={{marginTop: '2.5rem', columnGap: '0.375rem', display: 'flex'}}>
                                                    <Button>
                                                        <span style={{display: 'inline-flex', marginRight: '0.5rem'}}><StyledCalenderIcon></StyledCalenderIcon></span>Add to Calender
                                                    </Button>
                                                </div>
                                            </ItemSecondary>
                                        </Item>
                                        <Item>
                                            <div style={{marginTop: 0, marginBottom: '2.5rem'}}>
                                                <div style={{flexDirection: 'column', display: 'flex'}}>
                                                    <div style={{flexDirection: 'row', display: 'flex'}}>
                                                        <StyledClothHangerIcon></StyledClothHangerIcon>
                                                        <RightColumn>
                                                            <Text>Garden formal. Please come in the below colours to match our theme: buttermilk, dusty blue, sage green, fudge brown or charcoal black. 🫶</Text>
                                                        </RightColumn>
                                                    </div>
                                                    <div style={{
                                                        flexDirection: 'column',
                                                        display: 'flex',
                                                        marginTop: '1.5rem'
                                                    }}>
                                                        <Link rel="noopener nofollow" target="_blank"
                                                                   href="https://www.google.com/maps/search/?api=1&amp;query=Stones+of+the+Yarra+Valley%2C+Saint+Huberts+Road%2C+Coldstream+VIC%2C+Australia">
                                                            <div style={{flexDirection: 'row', display: 'flex'}}>
                                                                <StyledLocationMarkIcon></StyledLocationMarkIcon>
                                                                <RightColumn>
                                                                    <Text style={{textDecoration: 'underline'}}>Stones
                                                                        of the Yarra Valley, Saint Huberts Road,
                                                                        Coldstream VIC, Australia</Text>
                                                                </RightColumn>
                                                            </div>
                                                        </Link>
                                                        <Iframe
                                                            title="Map for Stones of the Yarra Valley, Saint Huberts Road, Coldstream VIC, Australia"
                                                            width="" height="320px"
                                                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB9ePoqHL2N2xqOhy2H_7vjDokVDIq8-fE&amp;zoom=10&amp;q=place_id%3AChIJ0RMxyVYr1moR2m6tM6XJ5ZU"
                                                            className="Linkifystyles__StyledLinkifyWrapper-sc-za1d5g-0 eUydfu"></Iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </Item>
                                    </ColumnWrapper>
                                </AnotherColumn>
                            </div>
                        </section>
                    </PlainColumn>
                    <div style={{marginTop: '1.5rem'}}>
                        <section>
                            <Header>
                                <DateParagraph>To Be Announced</DateParagraph>
                            </Header>
                            <div style={{flexDirection: 'column', display: 'flex'}} role="list">
                                <AnotherColumn role="listitem">
                                    <ColumnWrapper>
                                        <Item>
                                            <ItemSecondary>
                                                <EventParagraph style={{textAlign: 'left', width: '100%'}}>Shuttle Bus 🚌</EventParagraph>
                                                <div style={{marginTop: '1.5rem'}}>
                                                    <div style={{flexDirection: 'row', display: 'flex'}}>
                                                        <Text>
                                                            We will be organising a shuttle bus to pick up guests from Melbourne city center to our Wedding Venue, and also dropping you back to the city after the wedding ends.
                                                            <br/>
                                                            <br/>
                                                            Please let us know by private message if you would like to be added to the shuttle bus list, this will help us with head counts. The exact pick up location to be announced later, and we will notify you once confirmed.
                                                        </Text>
                                                    </div>
                                                </div>
                                            </ItemSecondary>
                                        </Item>
                                    </ColumnWrapper>
                                </AnotherColumn>
                            </div>
                        </section>
                    </div>
                </ContentContainer>
            </ScheduleContainer>
        </div>
    );
}

const ScheduleContainer = styled(SectionContainer)`
    @media screen and (min-width: 90em) {
        max-width: 614px;
    }
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    max-width: 700px;
`

const ContentContainer = styled.div`
    @media screen and (min-width: 64em) {
        padding-right: 4rem;
        padding-left: 4rem;
    }

    margin: 0px auto;
    max-width: 100%;
    padding: 2.5rem 2rem 4rem;
`

const Header = styled.header`
    border-bottom: 1px solid rgb(235, 235, 235);
    padding-bottom: 0.5rem;
    margin-bottom: 2.5rem;
    margin-top: 0rem;
`

const DateParagraph = styled.p`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.1875rem;
    line-height: 1.4;
    letter-spacing: 0.03em;
    text-align: center;
`

const AnotherColumn = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 64em) {
        max-width: 59rem;
    }
    @media screen and (min-width: 72em) {
        max-width: 61rem;
    }
    @media screen and (min-width: 80em) {
        max-width: 69rem;
    }
    @media screen and (min-width: 85.375em) {
        max-width: 74.375rem;
    }
    @media screen and (min-width: 90em) {
        max-width: 79rem;
    }
`
const ColumnWrapper = styled.div`
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    @media screen and (min-width: 60em) {
        margin-left: -0.75rem;
        margin-right: -0.75rem;
    }
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    @media screen and (min-width: 60em) {
        display: flex;
    }
`

const Item = styled.div`
    margin-top: 0rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    @media screen and (min-width: 60em) {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
    }
    display: block;
    max-width: 100%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-basis: 100%;
`

const ItemSecondary = styled.div`
    margin-bottom: 2.5rem;
    flex-direction: column;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`

const EventParagraph = styled.p`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.35;
    margin-bottom: 0.875rem;
    text-align: center;
    word-break: break-word;
`

const EventTime = styled.div`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.2;
    letter-spacing: 0.03em;
    text-align: center;
    color: rgb(118, 118, 118);
`

const Button = styled.button`
    margin: 0;
    overflow: visible;
    cursor: pointer;
    display: inline-flex
;
    appearance: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 9999px;
    vertical-align: middle;
    border: 2px solid rgb(235, 235, 235);
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
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    background-color: transparent;
    color: rgb(51, 51, 51);

    @media screen and (min-width: 60em) {
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        width: 260px;
    }
    
    &:hover {
        background-color: rgb(247, 247, 247);
    }
`

const StyledCalenderIcon = styled(CalenderPlusIcon)`
    flex-shrink: 0;
    backface-visibility: hidden;
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    width: 24px;
`

const StyledClothHangerIcon = styled(ClothHangerIcon)`
    flex-shrink: 0;
    backface-visibility: hidden;
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    width: 24px;
`

const StyledLocationMarkIcon = styled(LocationMarkIcon)`
    flex-shrink: 0;
    backface-visibility: hidden;
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    width: 24px;
`

const RightColumn = styled.div`
    flex: 1 0 auto;
    width: 50px;
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0em;
    overflow: hidden;
    margin-left: 1rem;
`

const Text = styled.p`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0em;
    display: inline-block;
    vertical-align: middle;
`

const Iframe = styled.iframe`
    border: none;
    box-sizing: border-box;
    border-radius: 8px;
    max-width: 100%;
    margin-top: 1.5rem;
`
export default Schedule;