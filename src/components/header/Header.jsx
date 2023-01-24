import React, { useEffect, useRef } from 'react';
import 'animate.css';
import '../../scss/header.scss';
import Typed from 'typed.js';

function Header() {
  const typing = useRef();
  useEffect(() => {
    const typed = new Typed(typing.current, {
      strings: [
        'software engineer.',
        'javascript developer.',
        'react developer.',
        'nodejs developer.',
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      cursorChar: '|',
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <header>
      <div className="title">
        <h1 className="animate__bounceIn">hi, my name is mostafa</h1>
        <h2 className="animate__bounceIn">
          I'm a <span ref={typing}></span>
        </h2>
      </div>
    </header>
  );
}

export default Header;
