import React from 'react';
import { Form } from 'react-bootstrap';

function ToggleSwitch({ isDarkMode, onToggle }) {
  return (
    <Form.Check
      type="switch"
      id="dark-mode-switch"
      label="Dark Mode"
      checked={isDarkMode}
      onChange={onToggle}
      className="mb-3"
    />
  );
}

export default ToggleSwitch;
