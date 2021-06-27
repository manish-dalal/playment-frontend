import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

export default function Output(props) {
  const { showData } = props;
  return (
    <Col>
      <iframe
        title='output'
        srcDoc={showData}
        width='100%'
        height='100%'
      ></iframe>
    </Col>
  );
}

Output.propTypes = {
  showData: PropTypes.string,
};
