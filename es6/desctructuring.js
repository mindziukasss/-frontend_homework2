export const amzius = [13, 15, 22];

export const namas = {
  ismatavimai: {
    aukstis: 13,
    plotis: 22,
    ilgis: 5,
  },
  spalva: 'raudona',
  gyventojai: [
    'Liudas',
    'Ausra',
    'Tomas',
  ],
};

const foo = 3;

export default foo;

namas.ismatavimai.ilgis

const { spalva, gyventojai } = namas;
const { ismatavimai: { aukstis, plotis } } = namas;
const [ pirmasGyventojas, antrasGyventojas ] = gyventojai;
