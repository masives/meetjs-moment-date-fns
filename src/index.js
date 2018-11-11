import moment from 'moment';

const format = 'dddd D MMMM Y';

let now = moment();
console.log(`dzisiaj jest ${now}`);

now = now.format(format);
console.log(`ładniej sformatowane ${now}`);

moment.locale('pl');

now = moment().format(format);
console.log(`Albo po polsku -  ${now}`);

console.log(
  `Wczoraj był ${moment()
    .subtract(1, 'days')
    .format(format)}`
);
