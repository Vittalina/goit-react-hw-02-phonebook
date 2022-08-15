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
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: data.name,
          number: data.number,
        },
      ],
    });
    // this.setState(prevState => {
    //   return { [contacts]: prevState[contacts] };
    // });
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
        <Phonebook onSubmit={this.onSubmitData} />
        <h2>Contacts</h2>

        <Filter FilterByName={this.FilterByName} />
        <Contacts contacts={this.state.contacts} />
        {/* <p>Phonebook is empty</p> */}
      </Box>
    );
  }
}

export default App;
