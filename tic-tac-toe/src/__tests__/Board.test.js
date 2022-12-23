import React from "react";
import '@testing-library/jest-dom';
import { render,screen,cleanup } from '@testing-library/react';

import Board from "../components/Board";

afterEach(() => {
    cleanup();
});

describe('Board Component Testing',() => {
    test('shoud render Board component',() => {
        const board = Array(9).fill(null)
        render(<Board board={board} onClick={() => {}}/>);
        const boardElement = screen.getByTestId('board');
        expect(boardElement).toBeInTheDocument();
    });
    test('rendered Board component with right childs',() => {
        
        let board = Array(9).fill(null);

        const onClick = () => {
        };
        
        render(<Board board={board} onClick={onClick}/>);
        const boardElement = screen.getByTestId('board');
        expect(boardElement).toMatchSnapshot();
    });
    test('rendered Board component with different props',() => {
        
        let board = ['X',  null, null, 'X',  null, null, 'X', null, null]

        const onClick = () => {
        };
        
        render(<Board board={board} onClick={onClick}/>);
        const boardElement = screen.getByTestId('board');
        expect(boardElement).toMatchSnapshot();
    });

});