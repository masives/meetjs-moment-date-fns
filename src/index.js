import format from 'date-fns/format';
import subDays from 'date-fns/sub_days';
const getLocale = locale => import(`date-fns/locale/${locale}/index.js`);

const niceFormat = 'dddd D MMMM YYYY';

let now = new Date();

console.log(`dzisiaj jest ${now}`);

now = format(now, niceFormat);
console.log(`ładniej sformatowane ${now}`);

let pl = {};
getLocale('pl').then(module => {
  pl = module.default;

  now = format(new Date(), niceFormat, {
    locale: pl
  });
  console.log(`Albo po polsku -  ${now}`);

  const yesterday = subDays(new Date(), 1);
  console.log(
    `Wczoraj był ${format(yesterday, niceFormat, {
      locale: pl
    })}`
  );
});
