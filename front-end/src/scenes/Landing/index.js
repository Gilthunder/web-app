import React, { Component } from 'react';

import Welcome from './components/Welcome/index.js';
import About from './components/About/index.js';
import HowItWorks from './components/HowItWorks/index.js';
import Testimonials from './components/Testimonials/index.js';
import Partnerships from './components/Partnerships/index.js';
import NeedHelp from './components/NeedHelp/index.js';

class Landing extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <About />
        <HowItWorks />
        <Testimonials />
        <Partnerships />
        <NeedHelp />
      </div>
    );
  }
}

export default Landing;
