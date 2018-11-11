import format from 'date-fns/format';
import subDays from 'date-fns/sub_days';
const getLocale = locale => import(`date-fns/locale/${locale}/index.js`);

let now = new Date();

console.log(`dzisiaj jest ${now}`);

now = format(now, 'D-M-YYYY');
console.log(`ładniej sformatowane ${now}`);

let pl = {};
getLocale('pl').then(module => {
  pl = module.default;

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
});
