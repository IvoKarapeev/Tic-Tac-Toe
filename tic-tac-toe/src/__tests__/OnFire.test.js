import React from "react";
import '@testing-library/jest-dom';
import { render,screen,cleanup } from '@testing-library/react';

import OnFire from "../components/OnFire";

afterEach(() => {
    cleanup();
});

describe('OnFire Component Testing',() => {
    test('shoud render OnFire component',() => {
        const onFire = {x:false, o:false}
        render(<OnFire onFire={onFire}/>);
        const onFireElement = screen.getByTestId('on-fire');
        expect(onFireElement).toBeInTheDocument();
    });
    test('shoud render OnFire component with X:true',() => {
        const onFire = {x:true, o:false}
        render(<OnFire onFire={onFire}/>);
        const onFireElement = screen.getByTestId('on-fire');
        expect(onFireElement).toHaveTextContent('x is on Fire');
    });
    test('shoud render OnFire component with O:true',() => {
        const onFire = {x:false, o:true}
        render(<OnFire onFire={onFire}/>);
        const onFireElement = screen.getByTestId('on-fire');
        expect(onFireElement).toHaveTextContent('o is on Fire');
    });
})