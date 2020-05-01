let data : number | string= 42;

data = "xd";

export interface ICar{
    color: string;
    model: string;
    topSpeed?: number;
}

const car1: ICar = {
    color: 'blue',
    model: 'bmw'
}

const car12 : ICar = {
    color: 're',
    model: 'maluch',
    topSpeed: 100
}

const multiply = (x: number, y: number):void => {
    x*y;
}

export const cars =[car1, car12];