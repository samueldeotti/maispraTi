import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios';
import { IpButton, IpInput, IpResultsContainer } from './IpStyle';
import { Container, Title } from '../QRCode/QRCodeStyle';
// Importa a biblioteca axios para fazer requisições HTTP

// Componente principal IPAddressFinder
function IPAddressFinder() {
  const [ip, setIp] = useState(''); // Define o estado para o IP digitado pelo usuário
  const [ipData, setIpData] = useState(null); // Define o estado para armazenar os dados do IP

  // Função para buscar os dados do IP
  const findIP = async () => {
    try {
      const url = `https://ipinfo.io/${ip}/json`;
      const response = await axios.get(url); // Faz uma requisição GET para a API ipinfo.io
      setIpData(response.data); // Armazena os dados da resposta no estado ipData
    } catch (error) {
      console.error('Error fetching IP address data:', error); // Exibe um erro no console em caso de falha
    }
  };

  return (
    <Container maxWidth="400px">
      <Title>IP Address Finder</Title>
      <IpInput
        type="text"
        value={ ip } // Valor do campo de entrada é ligado ao estado ip
        onChange={ (e) => setIp(e.target.value) } // Atualiza o estado ip conforme o usuário digita
        placeholder="Enter IP address" // Placeholder do campo de entrada
      />
      <IpButton onClick={ findIP }>Find IP</IpButton>
      {' '}
      {/* Botão que chama a função findIP quando clicado */}
      {ipData && ( // Condicional que exibe os dados do IP se ipData não for null
        <IpResultsContainer>
          <p>
            <strong>IP:</strong>
            {ipData.ip}
          </p>
          <p>
            <strong>Location:</strong>
            {ipData.city}
            ,
            {ipData.region}
            ,
            {ipData.country}
          </p>
          <p>
            <strong>ISP:</strong>
            {ipData.org}
          </p>
        </IpResultsContainer>
      )}
    </Container>
  );
}

export default IPAddressFinder; // Exporta o componente IPAddressFinder como padrão
