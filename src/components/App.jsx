import { Component } from 'react';
import { Box } from 'components/Box';
import Phonebook from 'components/Phonebook/Phonebook';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitData = data => {
    this.setState(prevState => {
      return { [data]: prevState[data] };
    });
  };

  render() {
    return (
      <Box
        p={100}
        px
        mr="auto"
        ml="auto"
        width="500px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        as="main"
      >
        <h1>Phonebook</h1>
        <Phonebook onSubmit={this.onSubmitData} onChange={this.handleChange} />
        <h2>Contacts</h2>

        <Filter FilterByName={this.FilterByName} />
        <Contacts contacts={this.state.contacts} />
        {/* <p>Phonebook is empty</p> */}
      </Box>
    );
  }
}

export default App;
