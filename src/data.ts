import { Listing } from "./types";

export const listings: Listing[] = [
  {
    category: "Compact\nrosette",
    name: "Echeveria",
    image: "compact-rosette",
    imageFull: "rosette-full",
    description:
      "Low-growing plant which grows in a tight, circular, clustered arrangement. ",
    greatFor: ["Geometric-style", "Office", "Creating pattern"],
    url: "compact-rosette"
  },
  {
    category: "Climbing\nplants",
    name: "Hoya",
    image: "climbing",
    url: "climbing-plants"
  },
  {
    category: "Trailing\nplants",
    name: "String of hearts",
    image: "trailing",
    url: "string-of-hearts",
    darkText: true
  },
  {
    category: "Flowering\nplants",
    name: "Orchid",
    image: "flowering",
    url: "flowering"
  },
  {
    category: "Leafy\nfoliage",
    name: "Dragon trees",
    image: "leafy",
    description:
      "Strikingly architectural plants produce lance to strap-shaped, glossy leaves",
    greatFor: ["Architectural-style", "Office", "Adding colour"],
    url: "leafy"
  }
];
