<h1 align="center">Pizza Shop</h1>

<div align="center">
    <img src="https://img.shields.io/github/languages/top/Gustavohps10/pizzashop-web?label=TypeScript&color=121214&style=flat-square&logo=typescript&logoColor=ffffff"/>
    <img src="https://img.shields.io/github/commit-activity/w/Gustavohps10/pizzashop-web?label=Commits&color=121214&style=flat-square&logo=git&logoColor=ffffff"/>
    <img src="https://img.shields.io/github/created-at/gustavohps10/pizzashop-web?label=Created At&color=121214&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGsSURBVEiJxZW/S5VRHIefc7ukpFzoB0iBBGJEcQmHImprqSWucNvCwNEcMpA2ixanRv8Aoa21JYegJXOKDIRoEQe7CVFg+KOgehrue+XlvUfxdqI+23k45/NwDrzfF/531LPqrQK7oNYL7JJaK54vRwp7gL4cGgfq6nyO3QWG1MUcmwQG1KUcWw8RwRxwbY9LdZKoYAH4CjzK0ChwFbiZ2zYBnAHGcuwe0A/cydbXgYm2J8rSCCE8z4RbwFJrnbEDwKkC6wZO5M4NRpvVBXV2F/G+o46pxp5oDThG85lScgjoiglWgA/A00TBCFBto2pDfZhYjvpMtVSAZeAI8DlVAFQASgVYBbqAxbbtnedkTHAR+Am8SWlWe4HjMcENYD6EsJEiAIbbutV+9Yd6O7EcdU5dVs3DGfWLWkksP28zszsCtap+V+8nlpfUl+p7dVwVtUd9q77L5kmKYEr9pV5pjYoy8AQ4B7wGHqsDwDbwscP+g0ANmA4hvFBPQ/OHswa0puJhYBDYBL79wSWmgQd77vgX0/QVzS/6U6KjAhyNCWrA5cTyVlb/Us/u+Q0qFg8bVgxnCQAAAABJRU5ErkJggg=="/>
    <img src="https://img.shields.io/github/license/gustavohps10/pizzashop-web?label=License&color=121214&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHxSURBVEiJtZS/axVREIW/ScQuKhJELIyKqNjYGYKxsLKwsbAICNHWztikkyAi2BhLG0HwBwoWafIHiBqCpcQmxELBIDbhmcqQ5LPIRJ+buy/7RA8sc3dn7pwzM3sv/GdEnUMN4CJwrEGeLxHxpCtmddLuMNktQUt9pvZuEzfRiaSnw95dwHxErDXUNAlcr5Ls6LDhAzDfIHEr7cO0YyoRMdZQGKhH1O+Vns+lb0BdKszkSrECdRA4C6wDMxExCywCt4G9baFzABHxST0FXAL2pW8cOFxNvFudLiiZVvc0Lncjl+pEtYLnwDngBhv97AWuAneBp8CF3HwUOFTIu5oVr5QYh5J1y2DUsfSdzvevHc7CtboKhtI+Kih7DNzLmHfAcKcKqh+rQy5dHTvT9gBExAKwUIgrYpPgTdpR4H4lZjTtawB1BBgo5FoHXkTE5yKTOqWuZM/71QPquPpDnWqLm6vp/2qS/zGDdoK+DsPra9qSKsGvGUTEsgobv+Rmy4aByxGx3A1BO0p30UJEPEgl+9tUnQFuUn9BrgO3IuLtdgSo/X8lt4ASwXHgfa5fbX5MZee7JSiVO1KzbgT1ZC5bJeeauqieyGdRXUvfSP6KTbCkHoStLRoFZiPiYyYdBgbTNwPc4ffJrsM34GXtgfvX+AkvyO4YoQp6EQAAAABJRU5ErkJggg=="/>
</div>

<p align="center"><img width="100%" src=".github/screenshot.png"></p>

## :page_with_curl: Description
A front-end application that allows you to control a restaurant's sales

## :game_die: Features
- [x] Authentication (Magic Link)
- [x] Metrics dashboard
- [x] View order list
- [x] Change order status
- [x] Change restaurant details

## :gear: Running
Make sure the [API](https://github.com/Gustavohps10/pizzashop-api) is running, you can run it using Docker

### Environment
You must create a copy of ```.env.local.example``` file and rename it to ```.env.local```

### Install dependencies
```
yarn install
```

### Run app
```
yarn dev
```

### Run with mocks
```
yarn dev:test
```

### Playwright E2E tests
```
yarn playwright test
```

## :hammer_and_wrench: Tools
<p>
    <img src="https://img.shields.io/static/v1?label=&message=Yarn&colorA=2a2a2a&colorB=1a1a1e&logo=yarn&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=&message=TypeScript&colorA=2a2a2a&colorB=1a1a1e&logo=typescript&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=&message=React&colorA=2a2a2a&colorB=1a1a1e&logo=react&style=flat-square">
    <img src="https://img.shields.io/static/v1?label=&message=Vite&colorA=2a2a2a&colorB=1a1a1e&logo=vite&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=&message=Shadcn/UI&colorA=2a2a2a&colorB=1a1a1e&logo=shadcnui&style=flat-square">
    <img src="https://img.shields.io/static/v1?label=&message=Tailwind&colorA=2a2a2a&colorB=1a1a1e&logo=tailwindcss&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=&message=Axios&colorA=2a2a2a&colorB=1a1a1e&logo=axios&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=&message=Zod&colorA=2a2a2a&colorB=1a1a1e&logo=zod&style=flat-square">
    <img src="https://img.shields.io/static/v1?label=&message=React%20Router&colorA=2a2a2a&colorB=1a1a1e&logo=react-router&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=&message=React%20Hook%20Form&colorA=2a2a2a&colorB=1a1a1e&logo=react-hook-form&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=&message=React%20Query&colorA=2a2a2a&colorB=1a1a1e&logo=react-query&style=flat-square">
  <img src="https://img.shields.io/static/v1?label=&message=Recharts&colorA=2a2a2a&colorB=1a1a1e&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGgSURBVEiJzZU7SBxRFIa/GdaNoE0UUykoiIlgZxnyquxVBCshYJXWLk1Ki1SCpYWwoEEMpBECgXRCyqSy89mYgNgoWdbwWczeZB/uzswqwa+cOef/z+NyL9wH1Edql9qv/lL31E11Ru3uRLBQTf6knpmwrI7ZzJE6n0f8ufrjBqHVFgaBNbWYJv5arbQQSDNQ3VbjWs24RnwRWAMK+QZaxzTw9qbKJ9XfKdVl6UC1rI42dvAeeHCLymspAkt/DdSnwMs7Eg/MhoXHJHO7a/qBiWDwKkeiOWKfQHJiBnMk7QPLQF9KXAXYBYjUMsli0tgFXkRRdBU+qA9Tci5QTzIcvcCW2lUVf5ch/igGDjJUH5gFSmoBKAEnKfGVGPicwwBgDtgADkkOSDuT76jj6p8cYwp8MLl1h9X9FjELAKilDgy0uhN1VD1u+Heq9gaDIZOHpBNCJ40mb+qGZfIOlDs0WalqBJMdNWraiPpM/ZlT/NKaF03tUVtfnOqgum62xX9RJ9odueY2/hk9BmaAKWAEGADOgWPgK/AxiqJv7cT/C9eaB2tpdIhOIQAAAABJRU5ErkJggg==">  
    <img src="https://img.shields.io/static/v1?label=&message=Vitest&colorA=2a2a2a&colorB=1a1a1e&logo=vitest&style=flat-square">
    <img src="https://img.shields.io/static/v1?label=&message=MSW&colorA=2a2a2a&colorB=1a1a1e&logo=mockserviceworker&style=flat-square">
    <img src="https://img.shields.io/static/v1?label=&message=Playwright&colorA=2a2a2a&colorB=1a1a1e&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfoBwoVLS4NTzmAAAAEDUlEQVRIx+2US2yUZRSGn/N9/2X+dsrQy7RUpRQN2NBCTCoaY6i3oEKIiYHElbcFW6MmrtyQaKLoQhNiiHGFLhQT8RJJNCFuBIogKKWAWqFNkdJC7TDTmc7MP/N/x0UlSgiXxIUb3u05Oe/JyXseuKn/W3Kt4v1sYfzdHdiLDdmkqTyAsAfIn3n59A0b2GsVMw+30rH9cTvXf+r1JF15E+hCONqwJp1rfaKd/Dcz/81g8aqlJMvPrijfmnsjaag2C7IKWGt9axWdbF7fOpt5rFnz3+aufqJfNq6bv5OAKogoU5Uqi6MoWoDt2RXOvvhOz8TThagmwqUeSVT1tN/gf59uTw+KyKiq5kUwKFkVaUb5CqHg3dlUYmcu/WSfdeuMcAbFtQZBR6zaOye6UsNa21xYFwCdX0QVtcAyL/CWichzQFWQGBCECJgE9qEUPII6o4l5oMe6zcH8CIyAqlLHcSqqEhtVvxidDyYzsUvVOuPOnMVT8UIPwIBGCBEqICDoNMJFALNjspkpZ0bKCqqiJZXKhDPjF5wUquqYCmsADusOuiDZGo62fxlMNDtjBRMYcKCxUVVRRBUFlF9R8qrg7Y49anB0RqWYEpWxxGyvw0i30Vcr6hbMegkINomqG5IlFx6sLcrlpRyo9T2M2LKONA4y0ujRWb1bVxUi8R0oB1TEiSreSGKYcObEo379RLdJ7un1kmcFDEhLySmJqP7rX9IuqDcR1AlTDYgBXTo3Rzb+gQMLYTIcoKs8jcpeURjadARTUmEqm58ZTuwXORUEsgqtTikOJ97QeOIngmJLKQ0mFzpbCjFqsSkLRiMJ3AZpibewdno17TEo+4Hjl2JqRvbsYs1ME/tq9pOhujnuVADqRth6qOq/FVb8miCol8T+VGZn45HbdzYc6/rdnmiu6NmU6pxVVTHiu0jCpKwqHyJU/s7c/KMVl/RyuKV48b1yOLvI6Np2owoS9Nv6xkhqbT9mS5L4iVdblK/XOvMfhOdatpuRzHdMpnKodJGNG8WqKOwG3gbiY5uO/GNQHj3Jx513MVj1TzZYLadF78uIrvBEFqZikeFMRf+M6hgnndhkve2r3OsPFBdL7+wSOqrdYglVGBN4QYQxEM5/eu5yVBRGT9J2R4/bX/UPVYWDBZVSHpk4F/s/D1XCzkJLqVH9REUkiDLRbcbaXmCpGAKQKZCXRGWPClza/uo07X8G6p6Qiq2P0eVNxc1JR/61Svf5NrJV0rc0YqxB6wJlM0oir0jf7GeMRQw9dfhyFl2Phisf2oQ4sWrdgGusPu/aKv1eu2si0AI12UvJe99t6/tJNowy/PXnV8LuurwFHpFtTK8exNR8LwmqrU6SNLEp8kfTNKlK8tv4R8Q3NuqmrtRfXRvgPblScC8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDctMTBUMjE6NDU6NDYrMDA6MDAQNyvUAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTA3LTEwVDIxOjQ1OjQ2KzAwOjAwYWqTaAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNC0wNy0xMFQyMTo0NTo0NiswMDowMDZ/srcAAAAASUVORK5CYII=">
    
</p>

## :adult: Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://gustavohenrique.vercel.app/"><img src="https://avatars.githubusercontent.com/u/61752235?v=4?s=100" width="100px;" alt="Gustavo Henrique"/><br /><sub><b>Gustavo Henrique</b></sub></a><br /><a href="#code-Gustavohps10" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
