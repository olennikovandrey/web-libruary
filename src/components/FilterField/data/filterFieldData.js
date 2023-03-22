import { data } from "../../../data/data";

export const getAuthors = () => {
  const allAuthors = data.map(item => item.author.split(", ")).flat();
  const allAuthorsSet = new Set(allAuthors);
  return Array.from(allAuthorsSet).sort();
};

export const stackRU = [
  "Все",
  ".NET",
  "Agile",
  "Angular",
  "API",
  "AWS",
  "Bootstrap",
  "CSS",
  "C#",
  "C++",
  "DevOps",
  "Git",
  "GraphQL",
  "HTML",
  "iOS",
  "Java",
  "JavaScript",
  "Kotlin",
  "Lavarel",
  "NodeJS",
  "PHP",
  "Python",
  "React",
  "Ruby",
  "Rust",
  "Three.js",
  "TypeScript",
  "MySQL",
  "Visual Studio Code",
  "Vue.js",
  "Webpack",
  "Web security",
  "UI/UX",
  "Other"
];

export const yearRU = [
  "Все",
  2023,
  2022,
  2021,
  2020,
  2019,
  2018,
  2017,
  2016,
  2015,
  2014,
  2009
];

export const stackEN = [
  "Все",
  ".NET",
  "Agile",
  "Angular",
  "API",
  "AWS",
  "Bootstrap",
  "CSS",
  "C#",
  "C++",
  "DevOps",
  "Git",
  "GraphQL",
  "HTML",
  "iOS",
  "Java",
  "JavaScript",
  "Kotlin",
  "NodeJS",
  "PHP",
  "Python",
  "React",
  "Ruby",
  "Rust",
  "Three.js",
  "TypeScript",
  "MySQL",
  "Visual Studio Code",
  "Vue.js",
  "Web security",
  "UI/UX",
  "Other"
];

export const yearEN = [
  "Все",
  2023,
  2022,
  2021,
  2020,
  2019,
  2018,
  2017,
  2016,
  2015,
  2014,
  2009
];

export const formats = [
  "pdf",
  "epub",
  "mobi"
];

export const amountPerPage = [
  20,
  50,
  100
];
