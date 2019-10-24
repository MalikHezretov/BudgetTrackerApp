import React from 'react';
import T from 'prop-types';

import { View, FlatList, TouchableOpacity,Text } from 'react-native';
import screens from '../../constants/screens';
import {
  Subtitle,
  AccountItem,
  Icon,
} from '../../components';
import s from './styles';
import colors from '../../styles/colors';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const Accounts = ({
  accounts, onPress, onAddAccount, totalBalance,
}) => {
  const _keyExtractor = item => item.id;

  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <AccountItem
      name={item.name}
      balance={item.balance}
      color={item.color}
      onPress={item.isAddButton ? onAddAccount : () => onPress(item)}
      isAddButton={item.isAddButton}
    />
  );

  return (
    <View style={s.root}>
      <Subtitle
        style={s.subtitle}
        leftText="Accounts"
        totalBalance={totalBalance}
      />
      <FlatList
        data={accounts}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        numColumns={3}
        style={s.paddingHorizontal}
        bounces={false}
      />
    </View>
  );
};

Accounts.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity
      onPress={onNavigate(navigation, screens.TransferEditor, { title: 'Add transfer' })}
    >
      <Text style={{color: colors.blue, marginRight: 16, fontWeight: 'bold'}}>Transfer</Text>
    </TouchableOpacity>
  ),
});

Accounts.propTypes = {
  accounts: T.array,
  onPress: T.func,
  onAddAccount: T.func,
  totalBalance: T.number,
};

export default Accounts;
