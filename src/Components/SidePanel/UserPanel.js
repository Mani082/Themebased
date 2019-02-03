import React from 'react';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';

class UserPanel extends React.Component{
dropdownOptions = () =>[
  {
    key: "User",
    text: <span>Signed in as <strong>user</strong></span>,
    disabled: true
  },
  {
    key: "avatar",
    text: <span>Change avatar</span>
  },
  {
    key: "signOut",
    text: <span>SignOut</span>
  }
];

  render(){
    return(
      <Grid style={{background: '#16222a'}}>
      <Grid.Column>
      <Grid.Row style={{padding: "1.2em", margin: 0}}>
      {/* App header*/}
      <Header inverted floated="left" as="h2">
      <Icon cordered inverted color="green" name="comments" />
      <Header.Content><font color="grey">Buffer!</font></Header.Content>
      </Header>
      </Grid.Row>
      {/* User dropdown*/}
      <Header style={{ padding: '0.25em' }} as="h4" inverted>
      <Dropdown trigger={
        <span>User</span>
      } options={this.dropdownOptions()} />
      </Header>
      </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
