import styled from "styled-components";
import {
    Link,
    SectionContainer,
    ContentColumn,
    smallIconDecorator,
    Separator,
    Title,
    SectionImageContainer, SectionImageSizer, SectionImageWrapper, SectionImageBox
} from "./ui/ui.jsx";
import PlaneIcon from "./svg/plane.jsx";
import CarIcon from "./svg/car.jsx";
import LocationMarkIcon from "./svg/locationMark.jsx";
import BusIcon from "./svg/bus.jsx";
import CalenderIcon from "./svg/calendar.jsx";
import ClockIcon from "./svg/clock.jsx";
import RoadSignIcon from "./svg/roadSign.jsx";
import DotOutlinedIcon from "./svg/dotOutlined.jsx";
import BedIcon from "./svg/bed.jsx";
import {useEffect, useRef} from "react";
import {useElementAboveScreenMidpoint} from "./hooks/useElementAtScreenMidPoint.js";
import useIsMobile from "./hooks/useWindowDimensions.js";

const Travel = ({
    onVisible,
    scrollContainer
                }) => {
    const ref = useRef()
    const isMobile = useIsMobile()
    const isMid = useElementAboveScreenMidpoint(scrollContainer, ref, !isMobile);

    useEffect(() => {
        if (isMid) {
            onVisible('travel');
        }
    }, [isMid, onVisible]);
    return (
        <div style={{display: 'inline-block', width: '100%'}} id='travel' ref={ref}>
            <TravelContainer>
                {isMobile &&
                    <SectionImageContainer>
                        <SectionImageSizer>
                            <SectionImageWrapper ratio={66.6609}>
                                <SectionImageBox style={{backgroundImage: 'url(https://withjoy.com/media/ebeefa4f8d2bbc6c303fdf0745c22656b4a50ba0d8daedb8f/ec081470-1543-11f0-a0f9-d501c3f66cc8-weyne-yew-iFdPrhOPI_E-unsplash.jpg?rendition=medium)'}}/>
                            </SectionImageWrapper>
                        </SectionImageSizer>
                    </SectionImageContainer>
                }
                <Title>TRAVEL</Title>
                <ContentContainer>
                    <ContentRestriction>
                        <ContentAnotherWrapper>
                            <Item>
                                <ContentColumn>
                                    <TravelItem>
                                        <Item>
                                            <TitleContainer>
                                                <StyledPlaneIcon></StyledPlaneIcon>
                                                <TitleText>Getting in</TitleText>
                                            </TitleContainer>
                                            <Item style={{marginTop: '1.5rem'}}>
                                                <ContentTextWrapper>
                                                    <p>We recommend flying into Melbourne Tullermarine International Airport. (Avalon airport is a bit far from the city and we don't recommend it if you have better options.)</p>
                                                </ContentTextWrapper>
                                            </Item>
                                        </Item>
                                    </TravelItem>

                                    <TravelItem>
                                        <Item>
                                            <TitleContainer>
                                                <StyledCarIcon></StyledCarIcon>
                                                <TitleText>Getting to the city</TitleText>
                                            </TitleContainer>
                                            <Item style={{marginTop: '1.5rem'}}>
                                                <ContentColumn>
                                                    <ContentTextWrapper>
                                                        <p>There a lots of ways to get into the city! The most cost effective way is to take the Skybus departing right outside arrivals in Terminal 2!</p>
                                                    </ContentTextWrapper>
                                                    <div style={{flexDirection: 'column', display: 'flex', marginTop: '1.5rem'}}>
                                                        <Link rel="noopener nofollow" target="_blank"
                                                                   href="https://www.google.com/maps/search/?api=1&query=Melbourne+Airport+%28MEL%29%2C+Melbourne+Airport+VIC%2C+Australia">
                                                            <div style={{flexDirection: 'row', display: 'flex'}}>
                                                                <StyledLocationMarkIcon></StyledLocationMarkIcon>
                                                                <RightColumn>
                                                                    <Text style={{textDecoration: 'underline'}}>Melbourne Airport (MEL), Melbourne Airport VIC, Australia</Text>
                                                                </RightColumn>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </ContentColumn>
                                            </Item>
                                        </Item>
                                    </TravelItem>

                                    <TravelItem>
                                        <Item>
                                            <TitleContainer>
                                                <StyledBusIcon></StyledBusIcon>
                                                <TitleText>Complimentary Shuttle</TitleText>
                                            </TitleContainer>
                                            <Item style={{marginTop: '1.5rem'}}>
                                                <ContentColumn>
                                                    <Row>
                                                        <StyledCalendarIcon></StyledCalendarIcon>
                                                        <Text style={{marginLeft: '0.75rem'}}>Jan 5</Text>
                                                    </Row>
                                                    <Row>
                                                        <StyledClockIcon></StyledClockIcon>
                                                        <Text style={{marginLeft: '0.75rem'}}>2:45 PM - 3:00 PM</Text>
                                                    </Row>
                                                    <Row><Text>Shuttles to the wedding will depart from the city and the exact time and location to be announced.</Text></Row>
                                                    <Separator></Separator>
                                                </ContentColumn>
                                                <ContentColumn>
                                                    <Row>
                                                        <StyledCalendarIcon></StyledCalendarIcon>
                                                        <Text style={{marginLeft: '0.75rem'}}>Jan 5</Text>
                                                    </Row>
                                                    <Row>
                                                        <StyledClockIcon></StyledClockIcon>
                                                        <Text style={{marginLeft: '0.75rem'}}>11:00 PM</Text>
                                                    </Row>
                                                    <Row><Text>There will also be a shuttle bus taking you back to the city after party. It's difficult to find other transporation from the venue at night.</Text></Row>
                                                </ContentColumn>
                                            </Item>
                                        </Item>
                                    </TravelItem>

                                    <TravelItem>
                                        <Item>
                                            <TitleContainer>
                                                <StyledRoadSignIcon></StyledRoadSignIcon>
                                                <TitleText>Our Favorite Restaurants</TitleText>
                                            </TitleContainer>
                                            <Item style={{marginTop: '1.5rem'}}>
                                                <ContentColumn>
                                                    <div style={{flexDirection: 'row', display: 'flex'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>
                                                                <Link rel="noopener nofollow" target="_blank"  href="https://withjoy.com/services/redirect/redirect?url=https%3A%2F%2Fwww.instagram.com%2Falienandcoco%3Figsh%3DMXJkeWt2YmZsdDUyZg%3D%3D">Alien & Coco - Amazing korean influenced coffee and sandwiches.
                                                                    - Peanut Matcha & Yuzu Iced Latte
                                                                    - Korean BBQ Beef Cheesestake & Tuna Melt</Link>
                                                            </p>
                                                        </RightColumn>
                                                    </div>
                                                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '1.5rem'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>
                                                                <Link rel="noopener nofollow" target="_blank"  href="https://withjoy.com/services/redirect/redirect?url=https%3A%2F%2Fwww.instagram.com%2Fsoi38%3Figsh%3DNmo3bzZ3amkwcjQ2">Soi 38 - Super authentic and tasty Thai Street Food.
                                                                    - Papaya Salad classic style
                                                                    - Deep fried Pork Jowl!!
                                                                    - Calimari!!
                                                                    - Ultimate bowl Tomyum</Link>
                                                            </p>
                                                        </RightColumn>
                                                    </div>
                                                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '1.5rem'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>
                                                                <Link rel="noopener nofollow" target="_blank"  href="https://withjoy.com/services/redirect/redirect?url=https%3A%2F%2Fwww.instagram.com%2Fyamamoto_udon%3Figsh%3DOHZuOXBjbHVmcGhu">Yamamoto Udon - Unique style flat dipping udon.
                                                                    - Himokawa set with tempura!!!</Link>
                                                            </p>
                                                        </RightColumn>
                                                    </div>
                                                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '1.5rem'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>
                                                                <Link rel="noopener nofollow" target="_blank"  href="https://withjoy.com/services/redirect/redirect?url=https%3A%2F%2Fwww.instagram.com%2Fmile_end_bagels%3Figsh%3DdjFrMm45amZ0eXBq">Mile End Bagels - best savoury & sweet bagels in town. Different flavours every month!</Link>
                                                            </p>
                                                        </RightColumn>
                                                    </div>
                                                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '1.5rem'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>
                                                                <Link rel="noopener nofollow" target="_blank"  href="https://withjoy.com/services/redirect/redirect?url=https%3A%2F%2Fwww.instagram.com%2Fmckinly.eatery%3Figsh%3DMXJyenU4d25rYjd2eQ%3D%3D">Mckinly Eatery - Yummy brunch near Victoria Market
                                                                    - Funghi truffle toastie
                                                                    - unagi chill scrambled eggs
                                                                    - squid ink vongole</Link>
                                                            </p>
                                                        </RightColumn>
                                                    </div>
                                                </ContentColumn>
                                            </Item>
                                        </Item>
                                    </TravelItem>

                                    <TravelItem>
                                        <Item>
                                            <TitleContainer>
                                                <StyledRoadSignIcon></StyledRoadSignIcon>
                                                <TitleText>Things to do in Melbourne</TitleText>
                                            </TitleContainer>
                                            <Item style={{marginTop: '1.5rem'}}>
                                                <ContentColumn>
                                                    <div style={{flexDirection: 'row', display: 'flex'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>
                                                                <Link rel="noopener nofollow" target="_blank"  href="https://withjoy.com/services/redirect/redirect?url=https%3A%2F%2Fwww.instagram.com%2Fngvmelbourne%3Figsh%3DMWF1OGloZ3o3dXZuaA%3D%3D">NGV - National Gallery of Victoria
                                                                    - fun exhibitions </Link>
                                                            </p>
                                                        </RightColumn>
                                                    </div>
                                                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '1.5rem'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>Carlton Gardens</p>
                                                        </RightColumn>
                                                    </div>
                                                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '1.5rem'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>Victoria Market</p>
                                                        </RightColumn>
                                                    </div>
                                                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '1.5rem'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>Flinders Street station</p>
                                                        </RightColumn>
                                                    </div>
                                                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '1.5rem'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>Point Ormond sunset look out</p>
                                                        </RightColumn>
                                                    </div>
                                                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '1.5rem'}}>
                                                        <StyledDotOutlinedIcon></StyledDotOutlinedIcon>
                                                        <RightColumn>
                                                            <p>St Kilda</p>
                                                        </RightColumn>
                                                    </div>
                                                </ContentColumn>
                                            </Item>
                                        </Item>
                                    </TravelItem>

                                    <TravelItem>
                                        <Item>
                                            <TitleContainer>
                                                <StyledBedIcon></StyledBedIcon>
                                                <TitleText>Where to Stay</TitleText>
                                            </TitleContainer>
                                            <Item style={{marginTop: '1.5rem'}}>
                                                <ContentColumn>
                                                    <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                                                        <Link href="#accommodations">For more information on where to stay</Link>
                                                    </div>
                                                </ContentColumn>
                                            </Item>
                                        </Item>
                                    </TravelItem>
                                </ContentColumn>
                            </Item>
                        </ContentAnotherWrapper>
                    </ContentRestriction>
                </ContentContainer>
            </TravelContainer>
        </div>
    )
}

const TravelContainer = styled(SectionContainer)`
    @media screen and (min-width: 90em) {
        max-width: 614px;
    }
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    max-width: 700px;
`

const ContentContainer = styled.div`
    margin: 0px auto;
    padding: 4rem 2rem;
    @media screen and (min-width: 64em) {
        max-width: calc(27.5rem);
    }
`

const ContentRestriction = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 90em) {
        max-width: 79rem;
    }
    @media screen and (min-width: 85.375em) {
        max-width: 74.375rem;
    }
    @media screen and (min-width: 80em) {
        max-width: 69rem;
    }
    @media screen and (min-width: 72em) {
        max-width: 61rem;
    }
    @media screen and (min-width: 64em) {
        max-width: 59rem;
    }
`

const ContentAnotherWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    @media screen and (min-width: 60em) {
        margin-left: -0.75rem;
        margin-right: -0.75rem;
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
    flex-basis: 0px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    max-width: 100%;
    @media screen and (min-width: 30em) {
        -webkit-box-flex: 0;
        flex-grow: 0;
        flex-basis: 100%;
        max-width: 100%;
    }
`

const TravelItem = styled.div`
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    display: flex;
    flex-wrap: wrap;
    
    &:not(:first-child) {
        margin-top: 4rem;
    }
`

const TitleContainer = styled.div`
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
`

const bigIconDecorator = (icon) => styled(icon)`
    flex-shrink: 0;
    backface-visibility: hidden;
    display: inline-block;
    vertical-align: middle;
    height: 40px;
    width: 40px;
`

const StyledPlaneIcon = bigIconDecorator(PlaneIcon);
const StyledCarIcon = bigIconDecorator(CarIcon);
const StyledBusIcon = bigIconDecorator(BusIcon);
const StyledRoadSignIcon = bigIconDecorator(RoadSignIcon);
const StyledBedIcon = bigIconDecorator(BedIcon);

const TitleText = styled.p`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.1875rem;
    line-height: 1.4;
    letter-spacing: 0.03em;
    margin-top: 1rem;
    text-align: center;
    word-break: break-word;
`

const ContentTextWrapper = styled.div`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0em;
    word-break: break-word;
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

const Row = styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    
    &:not(:first-child) {
        margin-top: 1.5rem;
    }
`

const StyledCalendarIcon = smallIconDecorator(CalenderIcon);
const StyledClockIcon = smallIconDecorator(ClockIcon);
const StyledDotOutlinedIcon = smallIconDecorator(DotOutlinedIcon);

export default Travel;