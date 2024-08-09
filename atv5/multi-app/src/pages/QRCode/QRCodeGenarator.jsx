import React, { useState } from 'react';

import QRCode from 'qrcode.react';
import { QRCodeContainer } from './QRCodeStyle';
import { Container, Input, Title } from '../UtilsStyle';

export default function QRCodeGenarator() {
  const [text, setText] = useState('');

  return (
    <Container maxWidth="400px">
      <Title>QR Code Generator</Title>
      <Input
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
