import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Grid,Icon,Table,Menu,Label,Feed,Search,List} from "semantic-ui-react"

function App(){

    return (
  <div style={{margin:"10px"}}>
<Grid textAlign="center">
  <Grid.Column width={12}>
  <Table celled>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell colSpan='3' textAlign="right">
      <Search icon='search' placeholder='Search Document' />
      </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Nama Document</Table.HeaderCell>
        {/* <Table.HeaderCell>Header</Table.HeaderCell> */}
        <Table.HeaderCell>Jenis File</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell positive>
          <Label ribbon>Panduan Belajar Javascript</Label>
        </Table.Cell>
        <Table.Cell>PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Panduan Belajar CSS</Table.Cell>
        <Table.Cell>PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Panduan Belajar React JS</Table.Cell>
        <Table.Cell>PDF</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

  </Grid.Column>
  <Grid.Row textAlign="left" >
    <Grid.Column width={10}>
    <Feed size='large'>
    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Anton</Feed.User> added you as a friend
          <Feed.Date>3 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label icon='pencil' />
      <Feed.Content>
        <Feed.Summary>
          You submitted a new post to the page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Saya Senang Belajar Bahasa Pemrograman
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>11 Likes</Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
      <Feed.Content>
        <Feed.Date>4 days ago</Feed.Date>
        <Feed.Summary>
          <a href="/">Helen Troy</a> added <a href="/">2 new illustrations</a>
        </Feed.Summary>

        <Feed.Extra images>
          <a href="/">
            <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' alt="" />
          </a>
          <a href="/">
            <img src='https://cdn-images-1.medium.com/v2/resize:fit:1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' alt="" />
          </a>
        </Feed.Extra>

        <Feed.Meta like='2 Like' />
      </Feed.Content>
    </Feed.Event>
  </Feed>
    </Grid.Column>
  <Grid.Column width={2} textAlign="left">
        <h1>Website Terkait</h1>
      <List>
      <List.Item
      icon='linkify'
      content={<a href='http://www.Google.com'>Google</a>}
    />
       <List.Item
      icon='linkify'
      content={<a href='http://www.facebook.com'>Facebook</a>}
    />
       <List.Item
      icon='linkify'
      content={<a href='http://www.semantic-ui.com'>Semantic UI</a>}
    />
       <List.Item
      icon='linkify'
      content={<a href='http://www.semantic-ui.com'>Niomic</a>}
    />
    <List.Item
      icon='linkify'
      content={<a href='http://www.semantic-ui.com'>React</a>}
    />
  </List>
</Grid.Column>
  </Grid.Row>
 

</Grid>
    </div>
  );
}

export default App;
