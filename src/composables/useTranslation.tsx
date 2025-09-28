import { useState, useEffect, createContext, useContext } from 'react';

type TranslationContextType = {
  language: string;
  setLanguage?: (lang: string) => void;
  translate: (key: string, value: string) => string;
};

export type NestedKeyOf<ObjectType> = ObjectType extends object ? {
    [Property in keyof ObjectType]: `${Property & string}` | `${Property & string}.${NestedKeyOf<ObjectType[Property]>}`;
}[keyof ObjectType] : never;
export type NestedValueOf<ObjectType, Path extends string> = Path extends `${infer Cur}.${infer Rest}` ? Cur extends keyof ObjectType ? NestedValueOf<ObjectType[Cur], Rest> : never : Path extends keyof ObjectType ? ObjectType[Path] : never;
export type NamespaceKeys<ObjectType, AllKeys extends string> = {
    [PropertyPath in AllKeys]: NestedValueOf<ObjectType, PropertyPath> extends string ? never : PropertyPath;
}[AllKeys];
export type MessageKeys<ObjectType, AllKeys extends string> = {
    [PropertyPath in AllKeys]: NestedValueOf<ObjectType, PropertyPath> extends string ? PropertyPath : never;
}[AllKeys];

const TranslationContext = createContext<TranslationContextType>({
  language: 'ru',
  translate: () => ''
});

export const TranslationProvider = ({
  children,
  lang = 'ru'
}: {
  children: React.ReactNode;
  lang: string;
}) => {
  const [language, setLanguage] = useState(lang);
  const [strings, setStrings] = useState<Record<string, Record<string, string>>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const messages = await import(`../../messages/${language}.json`);
        setStrings(messages);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
        setStrings({}); // Fallback to empty object
      }
    };
    loadTranslations();
  }, [language]);

  const translate = (key: string, value: string) => {
    if(!strings[key]) return ''
    if (strings[key] && typeof strings[key] === 'string') return strings[key]

    return strings[key][value] || key; // Return key if translation not found
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
