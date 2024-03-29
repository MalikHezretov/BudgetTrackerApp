import { StyleSheet } from 'react-native';
import { colors, fontWeights, fontSizes, dimensions } from '../../styles';

const styles = StyleSheet.create({
  tabsContainerStyle: {
    backgroundColor: colors.transparent,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  tabStyle: {
    paddingVertical: dimensions.verticalIndent / 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.blue,
  },
  activeTabStyle: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
  tabTextStyle: {
    color: colors.blue,
    fontSize: fontSizes.medium,
  },
  activeTabTextStyle: {
    color: colors.white,
  },
  tabBadgeContainerStyle: {
    borderRadius: 20,
    backgroundColor: colors.greyDarker,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
    marginBottom: 3,
  },
  activeTabBadgeContainerStyle: {
    backgroundColor: colors.blue,
  },
  tabBadgeStyle: {
    color: colors.greyDarker,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
  },
  activeTabBadgeStyle: {
    color: colors.blue,
  },
});

export default styles;
