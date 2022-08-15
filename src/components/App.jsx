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

  FilterByName = values => {
    this.setState({
      filter: values.filter,
    });
  };

  onSubmitData = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));

    // this.setState(prevState => {
    //   return { [data]: prevState[data] };
    // });
    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, data],
    // }));
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
      </Box>
    );
  }
}

export default App;
