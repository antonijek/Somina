import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="material-icons">
      <Helmet>
        <title>Somina | kontakt</title>
      </Helmet>
    </div>
  );
};

export default Contact;
