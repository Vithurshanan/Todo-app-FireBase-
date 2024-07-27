import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Colors';

const TodoList = ({ list }) => {
    const completedCount = list.todos.filter(todo => todo.completed).length;
    const RemainingCount = list.todos.length - completedCount;

  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>

      <View>
        <View style={{alignItems:"center"}}>
            <Text style={styles.count}>{RemainingCount}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.subtitle}>completed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 18,
    alignItems: 'center',
    width: 280,
  },
  listTitle: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 22,
  },
  count:{
    fontSize:48,
    fontWeight:"200",
    color:"yellow"
  },
  subtitle:{
    fontSize:16,
    fontWeight:"700",
    color:"black"
  },
});

export default TodoList;
