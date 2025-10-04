import { useState, useEffect, createContext, useContext } from 'react';

type TranslationContextType = {
  language: string;
  setLanguage?: (lang: string) => void;
  translate?: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType>({
  language: 'ru',
});

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState('ru');
  const [strings, setStrings] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const messages = await import(`../../messages/${language}.json`);
        setStrings(messages);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
        setStrings({});
      }
    };
    loadTranslations();
  }, [language]);

  const translate = (key: string) => {
    return strings[key] || key;
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
