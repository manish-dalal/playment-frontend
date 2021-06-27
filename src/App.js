import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './App.css';
import Editor from './components/Editor';
import Output from './components/Output';

function App() {
  const [isDarkMode, setisDarkMode] = useState(false);
  const [data, setData] = useState('');
  const [showData, setShowData] = useState('<html></html>');
  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([data], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'download.txt';
    document.body.appendChild(element);
    element.click();
  };
  return (
    <div className={`${isDarkMode ? 'dark-mode' : ''}`}>
      <Container className={`body ${isDarkMode ? 'dark-mode' : ''}`}>
        <Row className='actions_bar'>
          <Col>
            <Button className='m-1' onClick={downloadTxtFile} variant='success'>
              Save the Code
            </Button>
            <Button
              className='m-1'
              onClick={() => setisDarkMode(!isDarkMode)}
              variant='success'
            >
              {`${isDarkMode ? 'Light' : 'Dark'} mode`}
            </Button>
            <Button
              className='m-1'
              onClick={() => setShowData(data)}
              variant='success'
            >
              Run
            </Button>
          </Col>
        </Row>
        <Row className='main_row'>
          <Editor isDarkMode={isDarkMode} data={data} setData={setData} />
          <Output showData={showData} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
