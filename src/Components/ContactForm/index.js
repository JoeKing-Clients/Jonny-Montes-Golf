import React from 'react'
import { ContactContainer, ContactWrapper, ContactRow, ContactInput, SubmitButton, ContactTitle } from './ContactElements'

const Contact = () => {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactRow>
                    <ContactTitle>First Name</ContactTitle>
                    <ContactInput placeholder="John" />
                    <ContactTitle>Last Name</ContactTitle>
                    <ContactInput placeholder="Doe"/>
                    <ContactTitle>Email</ContactTitle>
                    <ContactInput placeholder="johndoe@holeinone.com"/>
                    <ContactTitle>Phone</ContactTitle>
                    <ContactInput placeholder="123-456-789"/>
                    <ContactTitle>Message</ContactTitle>
                    <ContactInput placeholder="I would love another golf lesson!"/>
                </ContactRow>
                <SubmitButton>Submit</SubmitButton>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
