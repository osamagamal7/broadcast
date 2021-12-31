import {scale, ScaledSheet} from 'react-native-size-matters';

import {theme} from '../../assets/theme/colors';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  detailContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: scale(90),
    paddingHorizontal: 10,
  },
  img: {
    borderRadius: scale(10),
    backgroundColor: theme.colorBlueLight,
    height: '80%',
    marginRight: scale(10),
    flex: 2.5,
  },
  inputContainer: {
    borderBottomWidth: 0,
    height: scale(50),
    marginTop: scale(5),
    paddingHorizontal: scale(5),
    width: '100%',
  },
  input: {
    backgroundColor: theme.colorGrey,
    borderRadius: scale(15),
    fontSize: scale(15),
    height: '80%',
    paddingHorizontal: scale(7),
  },
  list: {
    flexGrow: 1,
  },
  textDetails: {
    flex: 7.5,
  },
});
