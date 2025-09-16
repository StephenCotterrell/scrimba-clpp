import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"
import Card from "./components/Card/index"
import Tooltip from "./components/Tooltip/index"

function App() {
  return (
    <>
      <h1>Your components go here</h1>
      <Badge shape={"square"} color={"indigo"}>Test</Badge>
      <Banner status="error">
          <Banner.Heading>There is a problem with your application</Banner.Heading>  
          <Banner.Content>Lorem ipsum dolor sit amet consecteutur adipisicing elit. Aliquid pariatru, ipsum similique veniam.</Banner.Content>
      </Banner>    
      <Banner status='success'>
        <Banner.Heading>Congratulations!</Banner.Heading>
      </Banner>
      <Banner status="warning">
        <Banner.Heading>Attention</Banner.Heading>
        <Banner.Content>Lorem ipsum dolor sit amet consecteutur adipisicing elit. Aliquid pariatru, ipsum similique veniam.</Banner.Content>
      </Banner>
      <Banner status="neutral">
        <Banner.Heading>Update Available</Banner.Heading>
        <Banner.Content>Lorem ipsum dolor sit amet consecteutur adipisicing elit. Aliquid pariatru, ipsum similique veniam.</Banner.Content>
      </Banner>

      <Card>
        <Card.Title>Easy Deployment</Card.Title>
        <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
      </Card>
      <Tooltip.Wrapper style="bold" color="blue">
        <Badge shape="square" color="gray">Tooltip test</Badge>
        <Tooltip>
          <Tooltip.Heading>
            Archive Notes
          </Tooltip.Heading>  
          <Tooltip.Content>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
          </Tooltip.Content>
            
          
        </Tooltip>
      </Tooltip.Wrapper>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
