import "react-native-polyfill-globals/auto";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "timers";
import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
if (typeof global.setImmediate === "undefined") {
  (global as any).setImmediate = (
    callback: (...args: any[]) => void,
    ...args: any[]
  ) => {
    return setTimeout(callback, 0, ...args);
  };
}
registerRootComponent(App);
