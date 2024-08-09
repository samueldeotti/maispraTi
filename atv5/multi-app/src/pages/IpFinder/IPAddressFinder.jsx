import { useState } from 'react';
import axios from 'axios';
import { IpButton, IpResultsContainer } from './IpStyle';
import { Container, Input, Title } from '../UtilsStyle';

function IPAddressFinder() {
  const [ip, setIp] = useState('');
  const [ipData, setIpData] = useState(null);

  const findIP = async () => {
    try {
      const url = `https://ipinfo.io/${ip}/json`;
      const response = await axios.get(url);
      setIpData(response.data);
    } catch (error) {
      console.error('Error fetching IP address data:', error);
    }
  };

  return (
    <Container maxWidth="400px">
      <Title>IP Address Finder</Title>
      <Input
        type="text"
        value={ ip }
        onChange={ (e) => setIp(e.target.value) }
        placeholder="Enter IP address"
      />
      <IpButton onClick={ findIP }>Find IP</IpButton>
      {' '}
      {ipData && (
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

export default IPAddressFinder;
