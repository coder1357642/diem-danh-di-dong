// màn quản lý điểm danh 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const data = [
  'BIT220002', 'BIT220007', 'BIT220014', 'BIT220019', 'BIT220021', 
  'BIT220189', 'BIT220037', 'BIT220043', 'BIT220262', 'BIT220198', 
  'BIT220029', 'BIT220034', 'BIT220204', 'BIT220048', 'BIT220051', 
  'BIT220060', 'BIT220056', 'BIT220080', 'BIT220077', 'BIT220071', 
  'BIT220086', 'BIT220095', 'BIT220100', 'BIT220106', 'BIT220111', 
  'BIT220123', 'BIT220126', 'BIT220130', 'BIT220264', 'BIT220137'
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Dòng tiêu đề học phần */}
      <Text style={styles.title}>Học Phần: Lập trình C#</Text>
      {/* Dòng thời gian và phòng học */}
      <Text style={styles.subtitle}>Thời gian: 07:00 - 09:40 (Phòng học: VPC2-404)</Text>
      
      {/* Bảng điểm danh tự động */}
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>ĐIỂM DANH TỰ ĐỘNG</Text>
        {/* Ô nhập văn bản và nút lưu */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập từ khóa"
            placeholderTextColor="#888" // Màu chữ của placeholder
          />
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Lưu từ khóa</Text>
          </TouchableOpacity>
        </View>
        {/* Nút lưu điểm danh tự động */}
        <TouchableOpacity style={styles.autoSaveButton}>
          <Text style={styles.buttonText}>Lưu điểm danh tự động</Text>
        </TouchableOpacity>
      </View>

      {/* Bảng điểm danh thủ công */}
      <View style={styles.manualTableContainer}>
        <Text style={styles.manualTableTitle}>ĐIỂM DANH THỦ CÔNG</Text>
        {/* Dòng thông tin sĩ số với các ô nhập liệu */}
        <View style={styles.manualTableInfoContainer}>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Sĩ số:</Text>
            <TextInput
              style={styles.tableCellInput}
              defaultValue="30"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Có mặt:</Text>
            <TextInput
              style={styles.tableCellInput}
              defaultValue="30"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Vắng:</Text>
            <TextInput
              style={styles.tableCellInput}
              defaultValue="0"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Vắng phép:</Text>
            <TextInput
              style={styles.tableCellInput}
              defaultValue="0"
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* Nút lưu điểm danh thủ công */}
        <TouchableOpacity style={styles.manualSaveButton}>
          <Text style={styles.manualSaveButtonText}>LƯU ĐIỂM DANH THỦ CÔNG</Text>
        </TouchableOpacity>
      </View>

      {/* Bảng thông tin chi tiết */}
      <ScrollView style={styles.detailsTableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Tổng buổi vắng</Text>
          <Text style={styles.tableHeaderText}>Mã số</Text>
          <Text style={styles.tableHeaderText}>Địa chỉ IP</Text>
          <Text style={styles.tableHeaderText}>Vắng</Text>
          <Text style={styles.tableHeaderText}>Vắng phép</Text>
          <Text style={styles.tableHeaderText}>Có mặt</Text>
        </View>
        {data.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <TextInput
              style={styles.tableCellInput}
              placeholder="0"
              keyboardType="numeric"
            />
            <Text style={styles.tableCell}>{item}</Text>
            <TextInput
              style={styles.tableCellInput}
              placeholder="0"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.tableCellInput}
              placeholder="0"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.tableCellInput}
              placeholder="0"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.tableCellInput}
              placeholder="0"
              keyboardType="numeric"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10, // Khoảng cách dưới dòng tiêu đề
  },
  subtitle: {
    fontSize: 16,
    color: '#888', // Màu xám nhạt
    marginBottom: 20, // Khoảng cách dưới dòng phụ
  },
  tableContainer: {
    width: '100%',
    backgroundColor: '#0033A0', // Màu nền xanh nước biển đậm
    padding: 15,
    borderRadius: 5,
    marginTop: 20, // Khoảng cách từ dòng phụ đến bảng
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Màu chữ trắng
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff', // Màu nền của ô nhập văn bản
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  saveButton: {
    marginLeft: 10,
    padding: 15,
    backgroundColor: '#007BFF', // Màu nền của nút lưu
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  autoSaveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4CAF50', // Màu xanh lá non
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff', // Màu chữ của nút
    fontWeight: 'bold',
  },
  manualTableContainer: {
    width: '100%',
    backgroundColor: '#FF8C00', // Màu cam đậm
    padding: 15,
    borderRadius: 5,
    marginTop: 20, // Khoảng cách từ bảng điểm danh tự động đến bảng này
  },
  manualTableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Màu chữ trắng
  },
  manualTableInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Khoảng cách từ tiêu đề đến thông tin sĩ số
  },
  infoColumn: {
    flex: 1,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  tableCellInput: {
    flex: 1,
    padding: 1,
    backgroundColor: '#f5f5f5', // Màu nền của ô nhập liệu
    borderRadius: 30,
    borderColor: '#ddd',
    borderWidth: 10,
    textAlign: 'center',
  },
  manualSaveButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff', // Màu nền trắng
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FF8C00', // Màu viền cam đậm
    borderWidth: 1,
  },
  manualSaveButtonText: {
    color: '#FF8C00', // Màu chữ cam đậm
    fontWeight: 'bold',
  },
  detailsTableContainer: {
    width: '100%',
    marginTop: 20, // Khoảng cách từ bảng điểm danh thủ công đến bảng chi tiết
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#0033A0', // Màu nền xanh nước biển đậm
    padding: 10,
    borderRadius: 5,
  },
  tableHeaderText: {
    flex: 1,
    color: '#fff', // Màu chữ trắng
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
  },
});





