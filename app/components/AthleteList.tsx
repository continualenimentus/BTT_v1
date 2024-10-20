import { Table,
  TableHeader,
  TableFooter,
  TableBody,
  TableHead,
  TableData,
  TableRow,
  TableCaption,} from '@/components/ui/table';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const AthleteList = ({ athletes }: { athletes: any[] }) => {
  return (
    // <FlatList
    //   data={athletes}
    //   style={styles.athleteList}
    //   renderItem={({ item }) => <AthleteListItem athlete={item} />}
    //   keyExtractor={(item) => item.id}
    //   ListHeaderComponent={<AthleteListHeader />}
    // />
    
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Sex</TableHead>
          <TableHead>Date of Birth</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {athletes.map((athlete) => (
          <TableRow key={athlete.id} >
            <TableData>{athlete.name}</TableData>
            <TableData>{athlete.sex}</TableData>
            <TableData>{athlete.dob}</TableData>
            </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableHead>Total</TableHead>
          <TableHead></TableHead>
          <TableHead>{athletes.length} athletes</TableHead>
        </TableRow>
      </TableFooter>
    </Table>
      
  );
};

const AthleteListItem = ({ athlete }: { athlete: any }) => {
  return (
    <View style={styles.athleteListItem}>
        <Text style={styles.column1}>{athlete.name}</Text>
        <Text style={styles.column2}>{athlete.sex}</Text>
        <Text style={styles.column1}>{athlete.dob}</Text>
    </View>
  );
};

const AthleteListHeader = () => {
  return (
    <View style={styles.athleteHeader}>
        <Text style={styles.column1}>Name</Text>
        <Text style={styles.column2}>Sex</Text>
        <Text style={styles.column1}>Date of birth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  athleteHeader: {
    fontSize: 20,
    fontWeight: "bold",
    width: 250,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  athleteListItem: {
    fontSize: 15,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  athleteList:{
    flex: 1,
    width: 250,
    marginTop: 25,
  },
  column1: {
    width: 110,
    marginLeft: 5,
  },
  column2: {
    width: 50,
  }
});

export default AthleteList;