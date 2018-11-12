const namas = {
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

const { ismatavimai, ismatavimaiSkladuko } = namas;

const naujasObjektas = {
  ...ismatavimai,
  ...ismatavimaiSkladuko,
  ilgis: 14,
};

const funkcija = (...rest) => {
  console.log(rest);
};

funkcija(1, 2, 3, 4);
