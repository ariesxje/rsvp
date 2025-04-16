import {useState} from "react";
import styled from "styled-components";
import { useForm } from '@formspree/react';
import CrossIcon from "./svg/cross.jsx";

const RSVPModal = ({
    onClose
                   }) => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [radio, setRadio] = useState()
    const [state, handleSubmit, reset] = useForm('mgvaqwej');

    const onFirstNameChange = event => {
        setFirstName(event.target.value)
    }

    const onLastNameChange = event => {
        setLastName(event.target.value)
    }

    const onRadioSelected = (event) => {
        setRadio(event.target.value)
    }

    const resetForm = () => {
        setFirstName('')
        setLastName('')
        setRadio(null)
        reset()
    }

    return (
        <div id="modal-container">
            <div className="modal-background">
                <div className="modal">
                    <CloseButton onClick={() => {resetForm(); onClose();}}><StyledCloseIcon/></CloseButton>
                    {
                        state.succeeded ?
                            <ModalContentContainer style={{alignItems: 'center'}}><
                                SuccessMessage>Thank you</SuccessMessage>
                                <FormButton onClick={resetForm}>RSVP for another guest</FormButton>
                            </ModalContentContainer>
                            :
                        <form onSubmit={handleSubmit}>
                            <ModalContentContainer>
                                <h2>Enter your name to RSVP</h2>
                                <Label htmlFor='firstName'>First Name</Label>
                                <TextInput id='firstName' type="text" placeholder="First Name" autoComplete="given-name" required
                                       value={firstName} name='firstName' onChange={onFirstNameChange}/>
                                <Label htmlFor='lastName'>Last Name</Label>
                                <TextInput id='lastName' type="text" placeholder="Last Name" autoComplete="family-name" required
                                       value={lastName} name='lastName' onChange={onLastNameChange}/>

                                <RadioButton>
                                    Joyfully Accept<RadioButtonInput type='radio' value='yes' name='rsvp' onChange={onRadioSelected} checked={radio === 'yes'} /><RadioButtonBorder/>
                                </RadioButton>
                                <RadioButton>
                                    Regretfully Decline<RadioButtonInput type='radio' value='no' name='rsvp' onChange={onRadioSelected} checked={radio === 'no'}/><RadioButtonBorder/>
                                </RadioButton>

                                {radio === 'yes' && <InfoMessage>Please ensure your +1 is also RSVPed!</InfoMessage>}
                                <FormButton type='submit' disabled={!firstName || !lastName || !radio || state.submitting}>Submit</FormButton>
                            </ModalContentContainer>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}

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
    height: 24px;
    width: 24px;
`

const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    font-family: "Gotham SSm", Helvetica, Arial, sans-serif;
`

const Label = styled.label`
    display: inline-block;
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-size: 15px;
`

const TextInput = styled.input`
    line-height: 24px;
    outline: 0;
    background-color: transparent;
    border: 1px solid rgb(214, 214, 214);
    border-radius: 4px;
    display: block;
    padding: 0.65rem 1rem;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.1px;
    color: rgb(51, 51, 51);
    width: 100%;
    margin-bottom: 1rem;
`

const RadioButton = styled.label`
    display: block;
    width: 100%;
    min-height: 48px;
    padding: 15px 32px;
    position: relative;
    color: rgb(51, 51, 51);
    text-align: center;
    font-size: 15px;
    margin-bottom: 15px;
`

const RadioButtonInput = styled.input`
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 5;
    cursor: pointer;
    transition: border-color 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    
    &:checked + div {
        border-color: rgb(51, 51, 51);
        border-width: 3px;
        cursor: default;
    }
`

const RadioButtonBorder = styled.div`
    width: 100%;
    min-height: 100%;
    border-radius: 25.5px;
    border: 2px solid rgb(217, 217, 217);
    padding: 15px 32px;
    position: absolute;
    top: 0px;
    left: 0px;
    cursor: pointer;
`

const FormButton = styled.button`
    margin: 30px auto 16px;
    -webkit-box-align: center;
    align-items: center;
    border: none;
    cursor: pointer;
    display: inline-flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    transition: color 500ms cubic-bezier(0.23, 1, 0.32, 1), border 500ms cubic-bezier(0.23, 1, 0.32, 1), background-color 500ms cubic-bezier(0.23, 1, 0.32, 1), border-color 500ms cubic-bezier(0.23, 1, 0.32, 1);
    vertical-align: middle;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.02em;
    line-height: 22px;
    min-height: 48px;
    min-width: 203px;
    padding: 0 1.5rem;
    color: rgb(255, 255, 255);
    background-color: rgb(80, 32, 128);
    border-radius: 4px;
    
    &:disabled {
        cursor: not-allowed;
        background-color: rgb(234, 234, 234);
        color: rgb(187, 187, 187);
    }
`

const InfoMessage = styled.label`
    margin-top: 8px;
    font-weight: 400;
    color: rgb(118, 118, 118);
    font-size: 15px;
`

const SuccessMessage = styled.p`
    font-family: "Cinzel Decorative";
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.25;
    text-transform: none;
    letter-spacing: 0;
    margin-top: 15px;
`

export default RSVPModal