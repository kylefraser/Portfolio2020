import React from "react"
import {keyframes} from '@emotion/core'
import styled from "@emotion/styled"
import '../css/reset.css'
import '../css/fonts.css'
import {useStaticQuery, graphql} from "gatsby"
import Image from "gatsby-image"
import facepaint from 'facepaint'

const breakpoints = [480, 768]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const Container = styled.div({display: 'flex', marginLeft: 'auto', marginRight: 'auto', webkitFontSmoothing: 'antialiased', maxWidth: 1100})

const Content = styled.div({
  color: '#555',
  maxWidth: 720,
  paddingTop: 20,
  paddingBottom: 20
}, mq({
  paddingLeft: [
    '20px', '40px'
  ],
  paddingRight: ['20px', '40px']
}))

const Name = styled.h2({fontFamily: "'Roboto Condensed', sans-serif", marginTop: 0, marginBottom: 4, letterSpacing: 1})

const Description = styled.h5({fontFamily: "'Roboto Condensed', sans-serif", marginTop: 0, letterSpacing: 1})

const SubHeader = styled.h4({fontFamily: "'Roboto Condensed', sans-serif"})

const Text = styled.p({fontFamily: "'PT Serif', serif", fontWeight: 400, lineHeight: 1.5})

const List = styled.ul({listStyle: 'none', padding: 0, margin: '0 0 0 12px'})

const Divider = styled.hr({backgroundColor: '#90ce70', height: 1})

const LinkItem = styled.a({
  boxShadow: 'none',
  color: '#90ce70',
  '&:hover': {
    boxShadow: '0 1px 0 0 currentColor'
  }
})

const ListItem = styled.li({
  fontFamily: 'PT Serif',
  fontWeight: 400,
  lineHeight: 1.5,
  marginBottom: 32,
  '&:before': {
    content: '"• "',
    color: '#90ce70',
    marginLeft: -12
  }
})

const MinimalListItem = styled.li({
  fontFamily: 'PT Serif',
  fontWeight: 400,
  lineHeight: 1.5,
  marginBottom: 12,
  '&:before': {
    content: '"• "',
    color: '#90ce70',
    marginLeft: -12
  }
})

const ListText = styled.p({fontSize: 14, marginTop: 12, paddingRight: 32})

// const Span = styled.span({color: '#90ce70', fontWeight: 700})

const animation = keyframes `
  0% {
    border-color: #fff;
    color: #fff;
  }
  12% {
    border-color: #f1f1e7;
    color: #f1f1e7;
  }
  24% {
    border-color: #cc9;
    color: #cc9;
  }
  36% {
    border-color: #666;
    color: #666;
  }
  48% {
    border-color: #555;
    color: #555;
  }
  60% {
    border-color: #3c4831;
    color: #3c4831;
  }
  72% {
    border-color: #7f7f56;
    color: #7f7f56;
  }
  86% {
    border-color: #90ce70;
    color: #90ce70;
  }
  100% {
    border-color: #484832;
    color: #484832;
  }
`

const LogoText = styled.h1({
  cursor: 'default',
  fontFamily: 'devil',
  textDecoration: 'none',
  margin: '7px 5px',
  letterSpacing: -4,
  fontSize: 42,
  fontWeight: 400
})

const LogoCircle = styled.div({
  cursor: 'default',
  height: 50,
  width: 50,
  borderRadius: '50%',
  border: '2px solid #555',
  background: 'transparent',
  margin: '24px 0',
  '&:hover': {
    animation: `${animation} 2000ms linear infinite alternate`,
    '& > h1': {
      animation: `${animation} 2000ms linear infinite alternate`
    }
  }
})

const Layout = () => {
  const data = useStaticQuery(graphql `
  query TopBarQuery {
      topbar: file(absolutePath: { regex: "/topbar.png/" }) {
        childImageSharp {
          fixed(height: 10) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <Image
        fixed={data.topbar.childImageSharp.fixed}
        style={{
        display: 'block',
        margin: 0,
        width: '100%'
      }}/>
      <Container>
        <Content>
          <LogoCircle>
            <LogoText>
              KF
            </LogoText>
          </LogoCircle>
          <Name>Kyle Fraser</Name>
          <Description>Frontend Developer</Description>
          <Divider/>
          <SubHeader>Mission</SubHeader>
          <Text>To leverage and expand upon my development skills in an effective and
            efficient manner as a member of a proficient team with strong culture towards
            providing a well thought out and innovative product.</Text>
          <SubHeader>About</SubHeader>
          <Text>Raised in Maine, our state motto is '<LinkItem href="https://en.wikipedia.org/wiki/Seal_of_Maine" target="_blank">Dirigo</LinkItem>'
— latin for 'I Lead'. It's a phrase that defines the core of who I strive to be.
Someone who is constantly learning, honing his skills, and contributing
intelligently with what is given. Working in sync with strong teams forges these
qualities.</Text>
          <Text>I aim to excel and expect to be challenged.</Text>
          <SubHeader>Experience</SubHeader>
          <List>
            <ListItem><LinkItem href="https://robinpowered.com" target="_blank" stryl>Robin Powered</LinkItem> - Frontend Designer
              <ListText>Planning, development, and management of graphics and user interface
                design projects. Provide support for products developed for both internal use
                and for customers.
              </ListText>
            </ListItem>
            <ListItem><LinkItem href="https://hellobonfire.com" target="_blank">Bonfire Studios</LinkItem> - Frontend Web Developer
              <ListText>Cut up and integrate designs into beautiful responsive code.
                Proficiency implementing user interfaces (and UI elements), with a keen eye on
                the larger experience. Collaborate seamlessly with the Bonfire team towards
                rapid iteration and integration given creative direction.
              </ListText>
            </ListItem>
          </List>
          <SubHeader>Projects</SubHeader>
          <List>
            <ListItem>Ordnance
              <ListText>A comprehensive ledger for the firearms enthusiast. Keep track of
                weapon data, reloading recipes, items on hand, and build specifications. Record
                and chart your progression through a number of different training scenarios. Add
                your friends and compete to see who has the best times, accuracy, and precision.</ListText>
            </ListItem>
          </List>
          <SubHeader>Education</SubHeader>
          <List>
            <ListItem>Web Design & Development - Startup Institute, Boston 2017
              <ListText>UI/UX design, user research, rapid ideation, data visualization,
                front-end development, responsive design, information architecture, product
                management, wireframing and rapid prototyping, typography.</ListText>
            </ListItem>
            <ListItem>Bachelor of Science in Business Administration - Finance & Management,
              University of Maine 2010</ListItem>
          </List>
          <SubHeader>Recreation</SubHeader>
          <List>
            <MinimalListItem>Outdoor everything enthusiast</MinimalListItem>
            <MinimalListItem>Fish more, worry less</MinimalListItem>
            <MinimalListItem>Salt water paddler</MinimalListItem>
            <MinimalListItem>Rain or shine runner</MinimalListItem>
            <MinimalListItem>Novice eastern game hunter</MinimalListItem>
            <MinimalListItem>Mountains and plains rucker</MinimalListItem>
            <MinimalListItem>Cement Tacoma offroad driver</MinimalListItem>
            <MinimalListItem>Local community supporter</MinimalListItem>
            <MinimalListItem>Confidence through preparedness</MinimalListItem>
            <MinimalListItem>Heavy metal guitar picker</MinimalListItem>
          </List>
          <SubHeader>Contact</SubHeader>
          <Text>I can be reached by e-mail at
            <LinkItem
              href="mailto:FraserKC@gmail.com"
              style={{
              paddingLeft: '0.5ch'
            }}>FraserKC@gmail.com</LinkItem>
          </Text>
          <footer>
            <Text>Made in
              <span
                role="img"
                aria-label="America"
                style={{
                padding: '0 0.5ch'
              }}>🇺🇸</span>
              — © {new Date().getFullYear()}, Kyle Fraser</Text>
          </footer>
        </Content>
      </Container>
    </div>
  )
}

export default Layout
