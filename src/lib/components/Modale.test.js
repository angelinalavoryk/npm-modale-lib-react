import { screen, render } from "@testing-library/react";
import Modale from "./Modale";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
// import { click } from "@testing-library/user-event/dist/click";

describe ("Modale", () => {
    test('Doit afficher le message donnée en props', () => {
        //Given 
        const message = 'Ceci ets un message'; 
        //When
        render(<Modale showModal={true} message={message}/>);
        // screen.debug();
        //Then
        expect(screen.getByText("Ceci ets un message")).toBeInTheDocument();
    });

     test('Doit fermer la modale', async () => {
        //Given
        const onClose = jest.fn();
        //When
        render(<Modale showModal={true} closeModal={onClose}/>);
        await userEvent.click(screen.getByText('✕'));
        //Then
        expect(onClose).toHaveBeenCalled();
    })
})