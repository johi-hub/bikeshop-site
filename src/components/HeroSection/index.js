import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'

const HeroSection = () => {
  return (
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Your Expected Site When Expecting</HeroH1>
        <HeroP>Sign up for a new account today and recieve information and support from those like you!</HeroP>
        <HeroBtnWrapper>
          <Button to="signup">
            Get started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection