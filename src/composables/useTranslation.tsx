import { useState, useEffect, createContext, useContext } from 'react';

type TranslationContextType = {
  language: string;
  setLanguage?: (lang: string) => void;
  translate: (key: string, value: string) => string;
  getLink: (url: string) => string;
};

const TranslationContext = createContext<TranslationContextType>({
  language: 'ru',
  translate: () => '',
  getLink: () => ''
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

  const getLink = (url : string) => {
    return language === 'ru' ? url : `/en${url}`
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate, getLink }}>
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
