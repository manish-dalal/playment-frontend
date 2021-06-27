import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';

import './Editor.css';

export default function Editor(props) {
  const { isDarkMode, data, setData } = props;
  return (
    <Col>
      <AceEditor
        placeholder='Enter HTML, CSS, JS code'
        mode='html'
        theme={isDarkMode ? 'monokai' : 'github'}
        name='manish-editor'
        width='100%'
        height='100%'
        onChange={setData}
        className='ace-editor'
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={data}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </Col>
  );
}

Editor.propTypes = {
  data: PropTypes.string,
  setData: PropTypes.func,
  isDarkMode: PropTypes.bool,
};
