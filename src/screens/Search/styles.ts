import {scale, ScaledSheet} from 'react-native-size-matters';

import {fonts} from '../../assets';

import {theme} from '../../assets/theme/colors';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    flex: 1,
  },
  episodes: {
    color: theme.colorBlueLight,
    fontFamily: fonts.RobotoFontRegular,
    fontSize: scale(14),
  },
  centered: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  iconSize: {
    fontSize: scale(20),
  },
  inputContainer: {
    borderBottomWidth: 0,
    borderRadius: scale(15),
    backgroundColor: theme.colorGrey,
    height: scale(40),
    marginTop: scale(5),
    paddingHorizontal: scale(7),
    width: '100%',
  },
  input: {
    fontSize: scale(15),
    height: '80%',

    paddingHorizontal: scale(7),
  },

  list: {
    flexGrow: 1,
  },
});
