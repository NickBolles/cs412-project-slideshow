// Import React
import React from 'react';
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Fit
} from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import Typist from "react-typist";
import Loading from "react-loading";
import Terminal from "spectacle-terminal";

const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: true,
  hideWhenDoneDelay: 1000
};


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  ha: require("../assets/HA_logo.png"),
  HAMOPSC: require("../assets/HA_MPD_SC_diagram.png"),
  sadCat: require("../assets/sad_cat.jpg"),
  desktopCap: require("../assets/web_client.png"),
  mobileCap: require("../assets/mobile_interface.png")
};

preloader(images);

const theme = createTheme({
  primary: "#03A9FC",
  // primary: "#4caf50",
  // primary: "#3f51b5",
  secondary: "#1F2022",
  tertiary: "#ff9800",
  // tertiary: "#4caf50",
  quartenary: "#388e3c"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Music Server
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} fit bold>
            Peter Bitante & Nick Bolles
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" align="start center">
          <Heading size={4} textColor="primary">Goal</Heading>
          <Heading fill/>
          <List fill>
            <Appear fid="2">
              <ListItem>Use RPI to play music</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Control RPI from (almost) any device</ListItem>
            </Appear>
          </List>
          <Appear fid="4">
            <List margin="-28px 0 0 0">
              <ListItem>Play locally on device</ListItem>
              <ListItem>"Cast" music to DLNA and UPNP recievers</ListItem>
            </List>
          </Appear>
          <Appear fid="1">
            <List margin="-28px 0 0 0">
              <ListItem>Software that is Open Source and Free</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["slide", "fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={4} textColor="primary" caps>Research</Heading>
          <List>
            <Appear fid="1">
              <ListItem size={2}>Mopidy</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem margin="0 0 0 64px" textSize="2rem">by far the most common music player for
                RPI</ListItem>
            </Appear>

            <Appear fid="3">
              <ListItem size={2}>Mopidy and PulseAudio</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem margin="0 0 0 64px" textSize="2rem">It wasn't clear how to stream to other
                devices though</ListItem>
            </Appear>

            <Appear fid="5">
              <ListItem size={2}>Logitech Media Server (Squeezebox)</ListItem>
            </Appear>
            <Appear fid="6">
              <ListItem margin="0 0 0 64px" textSize="2rem">Old and proprietary</ListItem>
            </Appear>
            <Appear fid="7">
              <ListItem>Full Fledged media server (like Plex or Emby)</ListItem>
            </Appear>
            <Appear fid="8">
              <ListItem margin="0 0 0 64px" textSize="2rem">This would accomplish everything we
                want, but it's a heavyweight solution</ListItem>
            </Appear>
          </List>
        </Slide>
        {/*<Slide transition={["spin"]} bgColor="secondary" textColor="primary">*/}
        {/*<BlockQuote>*/}
        {/*<Quote>failure is not fatal: it is the courage to continue that counts.</Quote>*/}
        {/*<Cite>Winston S. Churchill</Cite>*/}
        {/*</BlockQuote>*/}
        {/*</Slide>*/}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Typist cursor={ cursor }>But then...</Typist>
          <Appear>
            <Heading>Home Assistant to the rescue</Heading>
          </Appear>
          <Appear>
            <Text textColor="primary">
              So What's Home Assistant?
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Image src={images.ha.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <List textColor="tertiary">
            <ListItem textSize="2rem">Home Assistant is an open-source home automation
              platform</ListItem>
            <ListItem textSize="2rem">Aims to consolidate control of all your devices</ListItem>
            <ListItem textSize="2rem">Has a HUGE developer base</ListItem>
            <ListItem textSize="2rem">But it's geared towards developers</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Image src={images.HAMOPSC.replace("/", "")} margin="0px auto 0px" height="350px"/>
          </Appear>
          <Text textColor="tertiary" textSize="2rem">
            We came across an <Link textColor="primary"
                                    href="https://home-assistant.io/blog/2016/02/18/multi-room-audio-with-snapcast/">awesome
            blog post</Link> on the HA blog
          </Text>
          <List textColor="tertiary">
            <Appear>
              <ListItem textSize="2rem">Multiple instances of Mopidy & Snapcast</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2rem">One set (Mopidy and Snapcast) is controlled by HA</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2rem">The rest are clients and can be "Cast" to by the main
                snapcast server</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Typist>We Tried... and we failed...</Typist>
          <List>
            <Appear>
              <ListItem>We weren't able to get Home Assistant up and running easily</ListItem>
            </Appear>
            <Appear>
              <ListItem>Plan kinda fell apart then since, you know HA is the connecting
                link</ListItem>
            </Appear>
          </List>
          <Appear>
            <Image src={images.sadCat.replace("/", "")} margin="0px auto 0px" height="200px"/>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>If At first you don't succeed...</Quote>
            <Appear>
              <Quote>Remove the problem</Quote>
            </Appear>
            <Cite>Someone</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" textColor="primary">
          <Heading size={3}>We decided to focus on making Mopidy work well</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" textColor="primary" align="center start">
          <Heading size={2}>Setting Up Mopidy</Heading>
          <div style="margin: 16px 0;"></div>
          <Terminal margin="32px 0 0 0" title="1. root: ~(sh)" output={ [
            <div># install mopidy core</div>,
            <Typist cursor={ cursor }>apt-get install mopidy</Typist>,
            <div>  </div>,
            <div># install additional extensions (through apt-get or Python's pip)</div>,
            <Typist cursor={ cursor }>pip install mopidy-soundcloud \ </Typist>,
            <Typist cursor={ cursor }>            mopidy-spotify \ </Typist>,
            <Typist cursor={ cursor }>            mopidy-gmusic \ </Typist>,
            <Typist cursor={ cursor }>            mopidy-youtube \ </Typist>,
            <Typist cursor={ cursor }>            mopidy-musicbox-webclient</Typist>,
            [
              <div style={{ display: "flex", alignItems: "center" }}>
                <Loading type="bars" color="#fff" height="30" width="30" />
                <span style={{ marginLeft: "1rem" }}>Installing dependencies...</span>
              </div>,
              <div style={{ color: "#33B969"}}>Dependencies installed!</div>
            ],
            <div># Set mopidy to start on system boot</div>,
            <Typist>sudo systemctl enable mopidy</Typist>
            ]
          }
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">Browse to RPI-IP:6680</Heading>
          <div margin="16px 0"></div>
          <Layout>
            <Fill>
              <Appear>
                <Image src={images.desktopCap.replace("/", "")} margin="0px auto 0px" height="300px"/>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Image src={images.mobileCap.replace("/", "")} margin="0px auto 0px" height="300px"/>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Text textSize="2.5rem" textColor="#33B969"> // todo: get Home Assistant up and running</Text>
          <div style="margin: 16px 0"></div>
          <Text textSize="2.5rem" textColor="#33B969"> // todo: setup multiple RPI's with Mopidy and snapcast</Text>
          <div style="margin: 16px 0"></div>
          <Text textSize="2.5rem" textColor="#33B969"> // todo: coordinate mopidy and snapcast instances with Home Assistant</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={2}>Thank You!</Heading>
        </Slide>
      </Deck>
    );
  }
}


// {/*<div>wget -q -O - https://apt.mopidy.com/mopidy.gpg | sudo apt-key add -</div>,*/}
// {/*<div>sudo wget -q -O /etc/apt/sources.list.d/mopidy.list https://apt.mopidy.com/jessie.list</div>,*/}

// research
//   mopidy was the first thing we came across
//   mopidy and PulseAudio
//   Logitech media server (SqueezeBox)
//   full fledged media servers (Plex, Emby etc)
//   mopidy and snapcast (thanks to this awesome blog pose https://home-assistant.io/blog/2016/02/18/multi-room-audio-with-snapcast/)

// mopidy is by far the most used open source music player
// emby and plex are a little heavy-weight of a solution

// this leaves us with mopidy and snapcast
// just using the two system means either local, or all other devices
// This means something has to control the source for each mopidy instance
// [screenshot]
// Enter HomeAssistant to control them

// we would have loved to do this, but there are a few barriers
// first getting HomeAssistant setup is a fairly large learning curve
// second we would need multiple devices and multiple speakers

// it was just too complicated. After some difficulty we simplified it to just mopidy

// setup
// # install base mopidy package
// apt-get install mopidy

// # use python's pip installer to install the python package and it's dependancies
// pip install mopidy

// # install additional mopidy plugins for music services
// pip install mopidy-soundcloud \
//             mopidy-spotify \
//             mopidy-gmusic \
//             mopidy-youtube \
//             mopidy-musicbox-webclient

// # set it up to start on system boot
// sudo systemctl enable mopidy

// [web interface screenshot]
// [mobile interface screenshot]

// todo: setup multiple RPI's with Mopidy and snapcast
// todo: get Home Assistant up and running
// todo: coordinate mopidy and snapcast instances with Home Assistant
