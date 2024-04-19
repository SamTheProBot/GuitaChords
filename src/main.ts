const notes: any = document.querySelector('.chords');
const RangeSlider: HTMLElement | null = document.querySelector('.range');
let intervalID: number;
let interval: number = 2000;

const allchords: Array<string> = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'Am',
  'Bm',
  'Dm',
  'Cadd9',
];

const updateChords = () => {
  clearInterval(intervalID);
  intervalID = setInterval(() => {
    console.log(interval);
    notes.innerHTML = allchords[randomVal()];
  }, interval);
};

const randomVal = () => {
  return Math.floor(Math.random() * allchords.length);
};

document.addEventListener(`DOMContentLoaded`, () => {
  updateChords();
  RangeSlider?.addEventListener('input', (e) => {
    interval = parseInt((e.target as HTMLInputElement).value);
    updateChords();
  });
});
