import { StyleSheet } from 'react-native';
export const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  workspace: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  temperatureWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  buttonWrapper: {
    height: 200,
  },
  footerContainer: {
    justifyContent: 'flex-end',
  },
});
