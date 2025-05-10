import { makeAutoObservable } from 'mobx';

export interface ButtonConfig {
    text: string;
    onClick: (value: string) => void;
    position: 'left' | 'right';
}

export class ControlViewModel {
    value: string = '';
    buttons: ButtonConfig[] = [];

    constructor(buttons: ButtonConfig[]) {
        this.buttons = buttons;
        makeAutoObservable(this);
    }

    setValue(newValue: string) {
        this.value = newValue;
    }
}