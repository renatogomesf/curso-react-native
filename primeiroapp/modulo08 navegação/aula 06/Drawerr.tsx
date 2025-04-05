import './gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function Drawerr() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
