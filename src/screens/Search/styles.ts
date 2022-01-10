import {scale, ScaledSheet} from 'react-native-size-matters';
import {fonts} from '../../assets';

import {theme} from '../../assets/theme/colors';

export const styles = ScaledSheet.create({
  artist: {
    fontFamily: fonts.RobotoFontLight,
    fontSize: scale(13),
  },
  broadcastName: {
    fontFamily: fonts.RobotoFontBold,
    fontSize: scale(15),
  },
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
  textDetails: {
    flex: 7.5,
  },
});
