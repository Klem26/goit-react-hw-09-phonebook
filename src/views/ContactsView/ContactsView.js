import React from 'react';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';

const ContactsVies = () => {
  return (
    <Container>
      <Filter />
      <ContactForm title="Add contact" />
      <div>
        <ContactList title="All contacts" />
      </div>
    </Container>
  );
};

export default ContactsVies;
