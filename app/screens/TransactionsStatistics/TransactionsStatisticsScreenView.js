import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import { PieLegend } from './components';
import {
  Subtitle,
  Separator,
  DateFilter,
  TransactionItem,
  FlatList,
  SegmentedControl,
  HeaderTitle,
  SimpleDateFilter
} from '../../components';
import s from './styles';
import { categoriesTypes as types } from '../../constants/categories';
import colors from '../../styles/colors';


const tabs = [types.income, types.expense];


const TransactionsStatistics = ({
    navigation,
    totalValue,
    date,
    dateForFiltering,
    setDateForFiltering,
    selectedTabIndex,
    setSelectedTabIndex,
    dataForChart,
    dataForList,
    onSetDateForFiltering,
}) => (
  <View style={s.root}>
    {/* <SimpleDateFilter
      dateForFiltering={dateForFiltering}
      setDateForFiltering={onSetDateForFiltering}
    /> */}
    <DateFilter
      dateForFiltering={dateForFiltering}
      setDateForFiltering={setDateForFiltering}
    />
    <View style={s.container}>
      <SegmentedControl
        values={tabs}
        selectedIndex={selectedTabIndex}
        onTabPress={setSelectedTabIndex}
      />
    </View>
    <Separator withShadow />
    <FlatList
      data={dataForList}
      renderItem={({ item }) => (
        <TransactionItem
          entity={item}
          isSimpleItem
        />
        )}
      isSimpleEmptyText
      listEmptyText="No transactions so far"
      ListHeaderComponent={
        <View>
          <View style={s.chartContainer}>
            <View style={s.pieContainer}>
              <View style={s.pieTextContainer}>
                <Text
                  style={[
                    s.pieTotalValue, { color: selectedTabIndex === 0 ? colors.blue : colors.red }]}
                >
                    {Math.round(totalValue)}රුු
                </Text>
                <Text style={s.pieDate}>{date}</Text>
              </View>
            </View>
            <PieLegend data={dataForChart} />
          </View>
          <Subtitle
            style={s.subtitle}
            withLittlePadding
            leftText="Statistic of Income/Expense"
          />
          <Separator />
        </View>
        }
    />
  </View>
  );

TransactionsStatistics.navigationOptions = ({
  headerTitle: <HeaderTitle title="Statistics" />,
});


TransactionsStatistics.propTypes = {
  navigation: T.object,
  totalValue: T.number,
  date: T.string,
  dateForFiltering: T.object,
  setDateForFiltering: T.func,
  onSetDateForFiltering: T.func,
  selectedTabIndex: T.number,
  setSelectedTabIndex: T.func,
  dataForChart: T.array,
  dataForList: T.array,
};

export default TransactionsStatistics;
