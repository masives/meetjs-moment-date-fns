# meetjs-moment-date-fns

Repozytorium stworzone na potrzeby lightning talk dla spotkania meetjs Katowice (14.11.2018). Wystąpienie dotyczyło wagi biblioteki potrzebnej do edycji wyświetlania daty.

## Warianty

Składa się z mini projektu z webpackiem oraz 4 wariantów:

- moment.js (528kb)
- moment.js z użyciem [Context Replacement Plugin](https://webpack.js.org/plugins/context-replacement-plugin/) (179kb)
- (date-fns)[https://date-fns.org/] - (41kb + 3-7kb per język)
- date-fns z dynamicznym importem

## Użycie

1. Sklonuj repozytorium
2. Zainstaluj paczki npm (`npm install` lub `yarn install`)
3. Wybierz brancha
4. Użyj skryptu `build` (`npm run build` lub `yarn build`)
5. Otwórz plik html - w konsoli będzie widoczny efekt
6. Otwórz `localhost:8888` by zobaczyć bundle analyzera
