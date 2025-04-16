import styled from "styled-components";

const PlainColumn = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
`

const SectionContainer = styled.div`
    @media (min-width: 48em) {
        margin-bottom: 4rem;
    }
`

const Link = styled.a`
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0em;
    text-decoration: underline;
    color: rgb(182, 148, 190);
    transition: color 500ms cubic-bezier(0.23, 1, 0.32, 1);
    word-break: break-word;
`

const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    
    &:not(:first-child) {
        margin-top: 1.5rem;
    }
`

const BigContentColumn = styled(ContentColumn)`
    &:not(:first-child) {
        margin-top: 4rem;
    }
`

const Separator = styled.hr`
    border-width: 0px 0px 1px;
    border-top-style: initial;
    border-right-style: initial;
    border-left-style: initial;
    border-image: initial;
    border-color: rgb(235, 235, 235);
    border-bottom-style: solid;
    width: 100%;
    &:not(:first-child) {
        margin-top: 1.5rem;
    }
`

const Title = styled.p`
    margin-left: 0.24rem;
    margin-right: 0.24rem;
    word-break: break-word;
    font-family: "Cinzel Decorative",serif;
    font-weight: 400;
    font-size: 1.625rem;
    line-height: 1.25;
    text-transform: none;
    letter-spacing: 0em;
    margin-top: 1rem;
    text-align: center;
`

const smallIconDecorator = (icon) => styled(icon)`
    flex-shrink: 0;
    backface-visibility: hidden;
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    width: 24px;
`

const SectionImageContainer = styled.div`
    padding-bottom: 4rem;
`

const SectionImageSizer = styled.div`
    max-width: 100%;
`

const SectionImageWrapper = styled.div`
    width: 100%;
    position: relative;

    &:after {
        content: " ";
        display: block;
        padding-top: ${props => `${props.ratio}%`};
        pointer-events: none;
    }
`

const SectionImageBox = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
`

export {
    PlainColumn,
    SectionContainer,
    Link,
    ContentColumn,
    BigContentColumn,
    Separator,
    Title,
    SectionImageContainer,
    SectionImageSizer,
    SectionImageWrapper,
    SectionImageBox,
    smallIconDecorator,
}