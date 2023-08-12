import "server-only";

interface Dictionary {
    [key: string]: () => Promise<{ [key: string]: { title: string; description: string } }>;
}

const dictionaries: Dictionary = {
  en: () => import("./en.json").then((module) => module.default),
  de: () => import("./de.json").then((module) => module.default)
};

export const getDictionary = async (lang: string) => dictionaries[lang]();