import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; // Certifique-se de que seu CSS está importado corretamente

export default function Footer() {
  const location = useLocation();
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Conversas', value: '1', to: "/conversas" },
    { name: 'Chamados', value: '2', to: "/abertos" },
    { name: 'Favoritas', value: '3', to: "/favoritas" },
  ];

  // Atualiza o estado do botão selecionado com base na rota atual
  useEffect(() => {
    const currentRadio = radios.find(radio => radio.to === location.pathname);
    if (currentRadio) {
      setRadioValue(currentRadio.value);
    } else {
      setRadioValue(''); // Resetar o estado quando não houver correspondência
    }
  }, [location.pathname, radios]);

  return (
    <Navbar className="footer-navbar fixed-bottom" style={{ padding: 0, backgroundColor: '#010317' }}>
      <Nav className="mx-auto d-flex align-items-center" style={{ width: '100%', justifyContent: 'space-around' }}>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={() => setRadioValue(radio.value)} // Atualiza o estado ao clicar
              className={`custom-toggle-button ${radioValue === radio.value ? 'active' : ''}`} // Aplica a classe CSS personalizada
              style={{ margin: '1px 3px' }}
            >
              <Link to={radio.to} style={{ color: '#ffffff', textDecoration: 'none' }}>
                {radio.name}
              </Link>
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Nav>
    </Navbar>
  );
}