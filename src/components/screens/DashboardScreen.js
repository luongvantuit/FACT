import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import ListCards from '../widgets/ListCards';
export default function DashboardScreen({ navigation }) {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <ListCards />
    </Container>
  );
}

const Container = styled.ScrollView`
`
