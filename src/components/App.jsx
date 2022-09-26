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
    if (
      this.state.contacts.filter(contact => contact.name === data.name).length >
      0
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onClickDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filteredNames = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    console.log(filteredNames);

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

        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts contacts={contacts} onClickDelete={this.onClickDelete} />
      </Box>
    );
  }
}

export default App;
