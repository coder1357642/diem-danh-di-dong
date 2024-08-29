import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ThoiKhoaBieuScreen({ navigation }) {
  const hours = Array.from({ length: 13 }, (_, i) => `${7 + i}:00`);

  const handlePressBuoiHoc = () => {
    navigation.navigate('BuoiHoc'); // Điều hướng đến BuoiHocScreen
  };

  const handlePressBuoiHoc2 = () => {
    navigation.navigate('BuoiHoc2'); // Điều hướng đến BuoiHoc2Screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.khungKhoaBieu}>
        <View style={styles.thanhTrangTren}>
          <Text style={styles.textThanhTren}>Lịch học</Text>
        </View>
        <View style={styles.thoiKhoaBieuVaLich}>
          <View style={styles.thoiKhoaBieu}>
            <View style={styles.thanhTrangTren2}>
              <Text style={styles.textThanhTren2}>Lịch cá nhân</Text>
            </View>
            <View style={styles.khungLich}>
              <View style={styles.khungNgay}>
                <View style={styles.dongHo}>
                  <Text style={styles.textThu}>Time</Text>
                </View>
                <View style={styles.ngay}><Text style={styles.textThu}>Mon</Text></View>
                <View style={styles.ngay}><Text style={styles.textThu}>Tue</Text></View>
                <View style={styles.ngay}><Text style={styles.textThu}>Wed</Text></View>
                <View style={styles.ngay}><Text style={styles.textThu}>Thu</Text></View>
                <View style={styles.ngay}><Text style={styles.textThu}>Fri</Text></View>
                <View style={styles.ngay}><Text style={styles.textThu}>Sat</Text></View>
                <View style={styles.ngay}><Text style={styles.textThu}>Sun</Text></View>
              </View>
              <View style={styles.khungbuoiHoc}>
                <View style={styles.gioHoc}>
                  {Array.from({ length: 13 }).map((_, indexGio) => (
                    <View key={indexGio} style={styles.rowGio}>
                      <Text style={styles.textTime}>{hours[indexGio]}</Text>
                    </View>
                  ))}
                </View>
                <View style={styles.cacMonHoc}>
                  {Array.from({ length: 13 }).map((_, indexMon) => (
                    <View key={indexMon} style={styles.rowMon}></View>
                  ))}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.khunglichHoc}>
            <View style={styles.lichHoc}>
              <Button title="Xem Chi Tiết" onPress={handlePressBuoiHoc} color="#007BFF" />
              <Button title="Xem Chi Tiết 2" onPress={handlePressBuoiHoc2} color="#007BFF" />
            </View>
          </View>
        </View>
        <View style={styles.thanhTruot}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223771',
    alignItems: 'center',
    justifyContent: 'center',
  },
  khungKhoaBieu: {
    width: '95%',
    height: '90%',
    backgroundColor: '#bbc9f1',
    alignSelf: 'flex-end',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  thanhTruot: {
    width: 5,
    height: '100%',
    backgroundColor: '#223771',
    position: 'absolute',
    right: 0,
  },
  thanhTrangTren: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    justifyContent: 'center',
  },
  textThanhTren: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  thoiKhoaBieuVaLich: {
    flexDirection: 'column',
    flex: 1,
    marginTop: '3%',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  thoiKhoaBieu: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: '5%',
  },
  thanhTrangTren2: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#223771',
  },
  khunglichHoc: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lichHoc: {
    width: '40%',
    height: '100%',
    borderRadius: 5,
  },
  khungLich: {
    width: '100%',
    height: '93%',
  },
  khungNgay: {
    height: '10%',
    flexDirection: 'row',
  },
  dongHo: {
    width: '10.75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  ngay: {
    width: '13.25%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textThu: {
    fontSize: 10,
    color: '#000',
  },
  khungbuoiHoc: {
    width: '100%',
    height: '90%',
    flexDirection: 'row',
  },
  gioHoc: {
    flexDirection: 'column',
    width: '10.75%',
    height: '100%',
    borderRadius: 10,
  },
  rowGio: {
    flex: 1,
  },
  cacMonHoc: {
    flexDirection: 'column',
    width: '89.25%',
    height: '100%',
    borderRadius: 10,
  },
  rowMon: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  textTime: {
    fontSize: 14,
    color: '#000',
    position: 'absolute',
    top: 4,
  },
});
