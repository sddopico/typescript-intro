let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a'];


// verbose vanilla js way
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

//ts, obj oriented way
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2
};

let backgroundColor = Color.Red;
// like most enum, ts enum will auto assign sequential numbers to vals in array
