import { Component } from 'react';
import { Box } from 'components/Box';
import Phonebook from 'components/Phonebook/Phonebook';
// import Contacts from 'components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Box p={100} px as="main">
        <Phonebook />
        {/* <Contacts /> */}
      </Box>
    );
  }
}

export default App;
