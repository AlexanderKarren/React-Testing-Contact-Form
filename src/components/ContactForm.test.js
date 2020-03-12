import React from "react";
import { render, fireEvent, findByTestId } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("allows the user to submit when making a contribution to all three required fields", () => {
    const { getAllByText, getByLabelText } = render(<ContactForm />);

    fireEvent.change(getByLabelText(/first name/i), {
        target: { name: 'firstName', value: 'Alexander'}
    });
    fireEvent.change(getByLabelText(/last name/i), {
        target: { name: 'lastName', value: 'Karren'}
    });
    fireEvent.change(getByLabelText(/email/i), {
        target: { name: 'email', value: 'alex@Karren.com'}
    });

    const submit = getAllByText(/submit/i);
    console.log(submit);

    // fireEvent.click();
})