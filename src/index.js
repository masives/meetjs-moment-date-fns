import moment from 'moment';
// import pl from 'moment/locale/pl.js';

let now = moment();
console.log(`dzisiaj jest ${now}`);

now = now.format('D-M-YYYY');
console.log(`ładniej sformatowane ${now}`);

moment.locale('pl');

now = moment().format('dddd D MMMM Y');
console.log(`Albo po polsku -  ${now}`);

console.log(
  `Wczoraj był ${moment()
    .subtract(1, 'days')
    .format('dddd D MMMM Y')}`
);
