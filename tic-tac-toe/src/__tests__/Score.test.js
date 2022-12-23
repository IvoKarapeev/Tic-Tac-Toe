import React from "react";
import '@testing-library/jest-dom';
import { render,screen,cleanup } from '@testing-library/react';

import Score from "../components/Score";

afterEach(() => {
    cleanup();
});

describe('Score Component Testing', () => {
    test('shoud render Score component',() => {
        const score = {xScore:0,oScore:0};
        const xPlaying = true;
        render(<Score score={score} xPlaying={xPlaying}/>);
        const scoreElement = screen.getByTestId('score');
        expect(scoreElement).toBeInTheDocument();
    });
    test('shoud render Score component with score for X',() => {
        const score = {xScore:1,oScore:0};
        const xPlaying = true;
        render(<Score score={score} xPlaying={xPlaying}/>);
        const scoreElement = screen.getByTestId('score');
        expect(scoreElement).toHaveTextContent(`X - ${score.xScore}`);
    });
    test('shoud render Score component with score for O',() => {
        const score = {xScore:0,oScore:1};
        const xPlaying = true;
        render(<Score score={score} xPlaying={xPlaying}/>);
        const scoreElement = screen.getByTestId('score');
        expect(scoreElement).toHaveTextContent(`O - ${score.oScore}`);
    });
})