const replacements: Array<[string, string]> = [
  ["Alicante", "Valencia"],
  ["alicante", "valencia"],
  ["Torrevieja", "Paterna"],
  ["torrevieja", "paterna"],
  ["Elche", "Torrent"],
  ["elche", "torrent"],
  ["Benidorm", "Sagunto"],
  ["benidorm", "sagunto"],
  ["Orihuela", "Gandía"],
  ["orihuela", "gandía"],
  ["Costa Blanca", "Costa Valenciana"],
  ["costa blanca", "costa valenciana"],
  [
    "Valencia, Paterna, Torrent, Sagunto u Gandía",
    "Valencia, Paterna, Torrent, Sagunto, Gandía, Algemesí, L'Alcúdia, Guadassuar, Carlet, Benifaió, Alfafar, Benetússer y Carcaixent",
  ],
  [
    "Valencia, Paterna, Torrent, Sagunto y Gandía",
    "Valencia, Paterna, Torrent, Sagunto, Gandía, Algemesí, L'Alcúdia, Guadassuar, Carlet, Benifaió, Alfafar, Benetússer y Carcaixent",
  ],
  [
    "Valencia y la provincia",
    "Valencia, Algemesí, L'Alcúdia, Guadassuar, Carlet, Benifaió, Alfafar, Benetússer, Carcaixent y la provincia",
  ],
  [
    "Valencia y provincia",
    "Valencia, Algemesí, L'Alcúdia, Guadassuar, Carlet, Benifaió, Alfafar, Benetússer, Carcaixent y provincia",
  ],
  [
    "valencia y la provincia",
    "valencia, algemesí, l'alcúdia, guadassuar, carlet, benifaió, alfafar, benetússer, carcaixent y la provincia",
  ],
  [
    "valencia y provincia",
    "valencia, algemesí, l'alcúdia, guadassuar, carlet, benifaió, alfafar, benetússer, carcaixent y provincia",
  ],
];

export const localizeToValencia = (value: string) =>
  replacements.reduce(
    (localized, [from, to]) => localized.split(from).join(to),
    value
  );
