import format from 'date-fns/format';
import subDays from 'date-fns/sub_days';
import pl from 'date-fns/locale/pl';
let now = new Date();

console.log(`dzisiaj jest ${now}`);

now = format(now, 'D-M-YYYY');
console.log(`ładniej sformatowane ${now}`);

// now = moment().format('dddd D MMMM Y');
now = format(new Date(), 'dddd D MMMM YYYY', {
  locale: pl
});
console.log(`Albo po polsku -  ${now}`);

const yesterday = subDays(new Date(), 1);
console.log(
  `Wczoraj był ${format(yesterday, 'dddd D MMMM YYYY', {
    locale: pl
  })}`
);
