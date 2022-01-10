import {scale, ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

import {fonts} from '../../assets';
import {theme} from '../../assets/theme/colors';

const windowHeight = Dimensions.get('window').height;

export const styles = ScaledSheet.create({
  artistName: {
    fontFamily: fonts.RobotoFontLight,
    fontSize: scale(15),
  },

  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  detailsRowTile: {
    padding: scale(20),
  },
  day: {
    color: theme.colorDarkGrey,
    fontFamily: fonts.RobotoFontLight,
    fontSize: scale(14),
  },

  episodes: {
    marginTop: scale(10),
    fontSize: scale(20),
    fontFamily: fonts.RobotoFontBold,
  },
  img: {
    borderRadius: scale(10),
    height: windowHeight / 8,
  },
  listContainer: {
    flexGrow: 1,
  },
  listHeaderComponent: {
    padding: scale(10),
    paddingTop: scale(15),
    paddingBottom: 0,
  },
  podcastName: {
    fontSize: scale(20),
    fontFamily: fonts.RobotoFontBold,
  },
  playContainer: {
    marginVertical: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  playText: {
    fontSize: scale(20),
    fontFamily: fonts.RobotoFontBold,
  },
  podcasTileTitle: {
    fontFamily: fonts.RobotoFontBold,
    fontSize: scale(15),
    paddingTop: scale(5),
  },
  podcasTileDescription: {
    color: theme.colorDarkGrey,
    fontFamily: fonts.RobotoFontRegular,
    fontSize: scale(13),
    paddingTop: scale(5),
  },
  podcasTileDuration: {
    fontFamily: fonts.RobotoFontLight,
    fontSize: scale(13),

    paddingTop: scale(5),
  },
  subscribed: {
    fontSize: scale(15),
    fontFamily: fonts.RobotoFontRegular,
    color: theme.colorBlueLight,
  },
  title: {
    fontSize: scale(15),
    fontFamily: fonts.RobotoFontLight,
  },
});
