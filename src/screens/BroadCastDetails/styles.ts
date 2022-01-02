import {scale, ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: scale(20),
  },
});
