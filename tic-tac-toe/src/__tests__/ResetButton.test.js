import React from "react";
import '@testing-library/jest-dom';
import { render,screen,cleanup,fireEvent } from '@testing-library/react';

import ResetButton from "../components/ResetButton";

afterEach(() => {
    cleanup();
});

describe('Reseting the score',() => {
    test('shoud render ResetButton component',() => {
        const resetBoard = () => {
        };

        render(<ResetButton resetBoard={resetBoard}/>);

        const resetButtonElement = screen.getByTestId('resetBtn');
        expect(resetButtonElement).toBeInTheDocument();
    });
    test('ResetButton component shoud have text content: Reset Game',() => {
        const resetBoard = () => {
        };

        render(<ResetButton resetBoard={resetBoard}/>);

        const resetButtonElement = screen.getByTestId('resetBtn');
        expect(resetButtonElement).toHaveTextContent('Reset Game');
    });
    test('shoud reset score when button is clicked',() => {

        let score = {xScore:2,oScore:1};

        const resetBoard = () => {
            score = {xScore:0,oScore:0};
        };

        render(<ResetButton resetBoard={resetBoard}/>);

        const resetButtonElement = screen.getByTestId('resetBtn');
        fireEvent.click(resetButtonElement);
        expect(score).toStrictEqual({ xScore: 0,oScore: 0 });

    });
});