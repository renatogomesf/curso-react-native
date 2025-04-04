import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function Tabs() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
