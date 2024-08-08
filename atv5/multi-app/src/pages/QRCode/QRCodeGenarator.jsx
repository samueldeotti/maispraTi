// Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { useState } from 'react';
// Importa a biblioteca styled-components para criar componentes estilizados.
// Importa o componente QRCode da biblioteca qrcode.react para gerar códigos QR.
import QRCode from 'qrcode.react';
import { QRCodeContainer, QRContainer, QRInput, QRTitle } from './QRCodeStyle';

// Define o componente funcional QRCodeGenerator.
function QRCodeGenerator() {
  // Usa o hook useState para criar uma variável de estado chamada 'text' e uma função para atualizá-la.
  // 'text' armazena o texto que será codificado no QR Code.
  const [text, setText] = useState('');

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <QRContainer>
      {/* Exibe o título do gerador de QR Code */}
      <QRTitle>QR Code Generator</QRTitle>
      {/* Renderiza um campo de input para o usuário inserir o texto que será codificado */}
      <QRInput
        type="text"
        value={ text } // Define o valor do input como o texto do estado.
        onChange={ (e) => setText(e.target.value) } // Atualiza o estado 'text' quando o valor do input muda.
        placeholder="Enter text to encode" // Texto exibido quando o campo está vazio.
      />
      {/* Renderiza o QRCode apenas se 'text' não estiver vazio */}
      {text && (
        <QRCodeContainer>
          <QRCode value={ text } size={ 256 } />
          {' '}
          {/* Gera o QR Code com o texto atual e tamanho 256px */}
        </QRCodeContainer>
      )}
    </QRContainer>
  );
}

// Exporta o componente QRCodeGenerator para que possa ser utilizado em outras partes da aplicação.
export default QRCodeGenerator;
