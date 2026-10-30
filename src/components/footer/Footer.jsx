import React from 'react';
import "./Footer.css"

function MyFooter() {
  return (
    <footer>
      Jason Morgan &copy; {new Date().getFullYear()}
    </footer>
  );
}

export default MyFooter;