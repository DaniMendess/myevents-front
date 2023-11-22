/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Container, Text, ContainerItem, TicketImg, Input, P } from './style';
import { Header, ListCategory } from '../../components';

export function Home() {
  return (
    <Container>
      <Header spacer />
      <ListCategory />
    </Container>
  );
}
