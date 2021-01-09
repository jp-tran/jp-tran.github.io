import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Typing from 'react-typing-animation';

import PortfolioContext from '../../context/context';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  const { hero } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const heroText = (
    <h1 className="hero-title">
      Hi, I'm <span className="text-color-main">Joseph Tran.</span>
      <br />
      <span className="hero-subtitle">Driven developer and lifelong learner. 🚀</span>
    </h1>
  );

  const typedText = (
    <Typing speed={35} startDelay={2000} hideCursor={true}>
      {heroText}
    </Typing>
  );

  const fadeText = (
    <Fade bottom duration={1000} delay={2000} distance="30px">
      {heroText}
    </Fade>
  );

  return (
    <section id="hero" className="jumbotron">
      <NavBar className="navbar" />
      <Container>{isDesktop ? typedText : fadeText}</Container>
    </section>
  );
};

export default Header;
