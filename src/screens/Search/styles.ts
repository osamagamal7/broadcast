import {scale, ScaledSheet} from 'react-native-size-matters';
import {theme} from '../../assets/theme/colors';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    flex: 1,
  },
  detailContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: scale(90),
    paddingHorizontal: 10,
    // backgroundColor: 'red',
  },
  img: {
    borderRadius: scale(10),
    backgroundColor: theme.colorBlueLight,
    height: scale(70),
    marginRight: scale(10),
    width: scale(70),
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
