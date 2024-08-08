import React, { useState } from 'react';

import QRCode from 'qrcode.react';
import { Container, QRCodeContainer, QRInput, Title } from './QRCodeStyle';

export default function QRCodeGenarator() {
  const [text, setText] = useState('');

  return (
    <Container maxWidth="400px">
      <Title>QR Code Generator</Title>
      <QRInput
        type="text"
        value={ text }
        onChange={ (e) => setText(e.target.value) }
        placeholder="Enter text to encode"
      />
      {text && (
        <QRCodeContainer>
          <QRCode value={ text } size={ 256 } />
        </QRCodeContainer>
      )}
    </Container>
  );
}
