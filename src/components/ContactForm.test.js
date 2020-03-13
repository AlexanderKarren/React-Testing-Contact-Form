import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("allows the user to submit when making a contribution to all three required fields", async () => {
    const { getByTestId, getByLabelText, findByText } = render(<ContactForm />);
    
    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const email = getByLabelText(/email/i);

    fireEvent.change(firstName, {
        target: { name: 'firstName', value: 'Ace'}
    });
    fireEvent.change(lastName, {
        target: { name: 'lastName', value: 'Karren'}
    });
    fireEvent.change(email, {
        target: { name: 'email', value: 'alex@karren.com'}
    });

    const submit = getByTestId("submit");
    fireEvent.click(submit);

    // await findByText(`{
    //     "firstName": "Ace",
    //     "lastName": "Karren",
    //     "email": "alex@karren.com",
    //     "message": ""
    //   }`)
    await findByText(/ace/i);
    await findByText(/karren/i);
    await findByText(/alex@karren.com/i);
})