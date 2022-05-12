import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements';

const Footer = () => {
  return (
      <FooterContainer>
          <FooterWrap>
              <FooterLinksContainer>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to="/signin">Our Products</FooterLink>
                              <FooterLink to="/signin">Testimonials</FooterLink>
                              <FooterLink to="/signin">Careers</FooterLink>
                              <FooterLink to="/signin">Terms of Service</FooterLink>
                      </FooterLinkItems>
                       <FooterLinkItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to="/signin">Our Products</FooterLink>
                              <FooterLink to="/signin">Testimonials</FooterLink>
                              <FooterLink to="/signin">Careers</FooterLink>
                              <FooterLink to="/signin">Terms of Service</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>
          </FooterWrap>
    </FooterContainer>
  )
}

export default Footer