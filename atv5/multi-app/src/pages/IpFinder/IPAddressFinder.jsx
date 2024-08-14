import { useState } from 'react';
import axios from 'axios';
import { IpResultsContainer } from './IpStyle';
import { Button, Container, Input, Title } from '../UtilsStyle';

function IPAddressFinder() {
  const [ip, setIp] = useState('');
  const [ipData, setIpData] = useState(null);

  const findIP = async () => {
    if (!ip) return;

    if (!ip.match(/^((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/)) {
      alert('Invalid IP address');
      return;
    }

    try {
      const url = `https://ipinfo.io/${ip}/json`;
      const response = await axios.get(url);
      setIpData(response.data);
    } catch (error) {
      alert('Error fetching IP address data:', error);
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
      <Button onClick={ findIP }>Find IP</Button>
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
