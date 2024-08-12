import { useState } from 'react';
import axios from 'axios';
import { Label, Select, TranslatedText } from './LanguageTranslatorStyle';
import { Button, Container, Input, Title } from '../UtilsStyle';

export default function LanguageTranslator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
  ];
  const [sourceLang, setSourceLang] = useState(languages[0].code);
  const [targetLang, setTargetLang] = useState(languages[1].code);

  const translateText = async () => {
    try {
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: text,
          langpair: `${sourceLang}|${targetLang}`,
        },
      });
      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <Container maxWidth="600px">
      <Title>Language Translator</Title>
      <div>
        <Label>Source Language:</Label>
        <Select value={ sourceLang } onChange={ (e) => setSourceLang(e.target.value) }>

          {languages.map((language) => (
            <option key={ language.code } value={ language.code }>
              {language.name}
            </option>
          ))}

        </Select>
      </div>
      <div>
        <Label>Target Language:</Label>
        <Select value={ targetLang } onChange={ (e) => setTargetLang(e.target.value) }>
          {languages.map((language) => (
            <option key={ language.code } value={ language.code }>
              {language.name}
            </option>
          ))}
        </Select>
      </div>
      <Input
        type="text"
        value={ text }
        onChange={ (e) => setText(e.target.value) }
        placeholder="Enter text to translate"
      />
      <Button onClick={ translateText }>Translate</Button>

      {translatedText && <TranslatedText>{translatedText}</TranslatedText>}

    </Container>
  );
}
