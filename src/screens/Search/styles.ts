import {scale, ScaledSheet} from 'react-native-size-matters';
import {theme} from '../../assets/theme/colors';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    flex: 1,
  },
  inputContainer: {
    alignItems: 'center',
    height: scale(50),
    justifyContent: 'center',
    marginTop: scale(5),
    width: '100%',
    // backgroundColor: 'red',
  },
  input: {
    backgroundColor: theme.colorGrey,
    borderRadius: scale(15),
    fontSize: scale(15),
    height: '80%',
    paddingHorizontal: scale(10),
    width: '95%',
  },
});
