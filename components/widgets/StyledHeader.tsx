import {Platform, StyleSheet} from 'react-native';

const StyledHeader = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 16 : 68,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
});

export default StyledHeader;
