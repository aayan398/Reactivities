import { Container, Header, Segment, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function HomePage() {
        return ( 
          <Segment inverted textAlign = 'center' vertical className = 'masthead'>
            <Container text>
              <Header as = 'h1' inverted>
                 <Image size = 'massive' src = '/asstes/logo.png' alt = 'logo' style ={{marginBottom: 12}}/> 


              </Header> 
              <Header as ='h2' inverted content = 'welcome to Reactivities' />
              <Button as = {Link} to = '/activities' size = 'huge' inverted>
                Take me to the Activities 
              </Button>
            </Container>
          </Segment>
        )
}