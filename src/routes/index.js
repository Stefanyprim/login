import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Tela1 from '../pages/tela1';
import Tela2 from '../pages/tela2';
import Tela4 from '../pages/tela4';
import Tela3 from '../pages/tela3';
import Tela5 from '../pages/tela5';
import Tela6 from '../pages/tela6';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Tela1" 
        component= { Tela1 } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Tela2" 
        component= { Tela2 } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Tela3" 
        component= { Tela3 } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Tela4" 
        component= { Tela4 } 
        options= { {headerShown: false} }
        />
         <Stack.Screen 
        name="Tela5" 
        component= { Tela5 } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Tela6" 
        component= { Tela6 } 
        options= { {headerShown: false} }
        />
    </Stack.Navigator>
  )
}