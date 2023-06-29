export interface CountryType {
  name: Name;
  continents: Continent[];
  flags: Flags;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Name {
  common: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}
