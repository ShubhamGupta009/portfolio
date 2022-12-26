import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello! Welcome to <br />My Personal Portfolio
    </SectionTitle>
    <SectionText>
      I am a Web Developer from Last 6 Years working on React Js and Node Js.I do web things so you don`t have to do it.
    </SectionText>
    <Button onClick={()=>{ window.location='mailto:shubhamgupta@hpmindia.com'}}>Contact Me</Button>
  </LeftSection>
</Section>
);

export default Hero;