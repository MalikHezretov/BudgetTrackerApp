import React from 'react';
import T from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
import {
  Subtitle,
  Separator,
  SimpleDateFilter,
  Value,
} from '../../components';
import s from './styles';


const Trends = ({
    dateForFiltering,
    onSetDateForFiltering,
    stats,
    setListRef,
}) => (
  <View style={s.root}>
    <SimpleDateFilter
      dateForFiltering={dateForFiltering}
      setDateForFiltering={onSetDateForFiltering}
    />
    <Subtitle
      style={s.subtitle}
      withLittlePadding
      leftText="Trends"
      date={dateForFiltering}
    />
    <Separator />

    <View style={s.container}>
      <View style={s.chartContainer}>

        <ScrollView
          horizontal
          ref={setListRef}
          bounces={false}
          showsHorizontalScrollIndicator={stats.tickValues.length > 1}
        >

        </ScrollView>


        <View style={s.verticalAxisContainer}>
        </View>
      </View>

      <Separator />

      <View style={s.totalContainer}>
        <Text style={s.totalText}>Total: </Text>
        <View style={s.totalValueContainer}>
          <Value
            containerStyle={s.valueContainer}
            style={s.valueText}
            value={stats.totalIncome}
          />
          <Value
            containerStyle={s.valueContainer}
            style={s.valueText}
            value={stats.totalExpense}
          />
        </View>

      </View>

    </View>
  </View>
  );

Trends.propTypes = {
  dateForFiltering: T.object,
  onSetDateForFiltering: T.func,
  setListRef: T.func,
  stats: T.shape({
    Income: T.array,
    Expense: T.array,
    tickValues: T.array,
    maxValue: T.number,
    totalIncome: T.number,
    totalExpense: T.number,
  }),
};

export default Trends;
