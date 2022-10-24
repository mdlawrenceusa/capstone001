export interface CountryDataInterface {
  name: string;
  mobilephones: number;
  mortalityunder5: number;
  healthexpenditurepercapita: number;
  healthexpenditureppercentGDP: number;
  population: number;
  populationurban: number;
  birthrate: number;
  lifeexpectancy: number;
  GDP: number;
}

export const countryData = [
  {
    name: 'United States',
    mobilephones: 109478031,
    mortalityunder5: 9,
    healthexpenditurepercapita: 4703,
    healthexpenditureppercentGDP: 13,
    population: 282162411,
    populationurban: 223190467,
    birthrate: 15,
    lifeexpectancy: 77,
    GDP: 9898800000000
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
