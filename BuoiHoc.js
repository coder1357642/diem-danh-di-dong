import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import thư viện icon

const data = [
  { id: 1, code: 'BIT220002', lastName: 'Nguyễn Thành', firstName: 'An' },
  { id: 2, code: 'BIT220007', lastName: 'Nguyễn Trí Hải', firstName: 'An' },
  { id: 3, code: 'BIT220014', lastName: 'Đỗ Lê Việt', firstName: 'Anh' },
  { id: 4, code: 'BIT220019', lastName: 'Hoàng Hải Duy', firstName: 'Anh' },
  { id: 5, code: 'BIT220021', lastName: 'Hà Xuân', firstName: 'Bách' },
  { id: 6, code: 'BIT220189', lastName: 'Nguyễn Ngọc Anh', firstName: 'Dũng' },
  { id: 7, code: 'BIT220037', lastName: 'Vũ Quang', firstName: 'Dũng' },
  { id: 8, code: 'BIT220043', lastName: 'Nguyễn Văn', firstName: 'Dưỡng' },
  { id: 9, code: 'BIT220262', lastName: 'Nguyễn Tiến', firstName: 'Đạt' },
  { id: 10, code: 'BIT220198', lastName: 'Vũ Minh', firstName: 'Đăng' },
  { id: 11, code: 'BIT220029', lastName: 'Lê Thành', firstName: 'Đô̂' },
  { id: 12, code: 'BIT220034', lastName: 'Phạm Đình', firstName: 'Đức' },
  { id: 13, code: 'BIT220204', lastName: 'Trần Trung', firstName: 'Đức' },
  { id: 14, code: 'BIT220048', lastName: 'Nguyễn Thị', firstName: 'Hải' },
  { id: 15, code: 'BIT220051', lastName: 'Nguyễn Thị Mỹ', firstName: 'Hảo' },
  { id: 16, code: 'BIT220060', lastName: 'Lê Minh', firstName: 'Hiếu' },
  { id: 17, code: 'BIT220056', lastName: 'Nguyễn Minh', firstName: 'Hiếu' },
  { id: 18, code: 'BIT220080', lastName: 'Ngô Quang', firstName: 'Huy' },
  { id: 19, code: 'BIT220077', lastName: 'Nguyễn Quang', firstName: 'Huy' },
  { id: 20, code: 'BIT220071', lastName: 'Đoàn Nguyễn Thành', firstName: 'Hưng' },
  { id: 21, code: 'BIT220086', lastName: 'Trần Tuấn', firstName: 'Khoa' },
  { id: 22, code: 'BIT220095', lastName: 'Nguyễn Diệu', firstName: 'Linh' },
  { id: 23, code: 'BIT220100', lastName: 'Nguyễn Minh', firstName: 'Long' },
  { id: 24, code: 'BIT220106', lastName: 'Lê Anh', firstName: 'Minh' },
  { id: 25, code: 'BIT220111', lastName: 'Nguyễn Trà', firstName: 'My' },
  { id: 26, code: 'BIT220123', lastName: 'Trần Phúc', firstName: 'Nguyên' },
  { id: 27, code: 'BIT220126', lastName: 'Lưu Minh', firstName: 'Nhật' },
  { id: 28, code: 'BIT220130', lastName: 'Trần Văn', firstName: 'Phúc' },
  { id: 29, code: 'BIT220264', lastName: 'Phùng Thế', firstName: 'Tài' },
  { id: 30, code: 'BIT220137', lastName: 'Trần Việt', firstName: 'Tài' },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cellSmall}>{item.id}</Text>
      <Text style={styles.cell}>{item.code}</Text>
      <Text style={styles.cell}>{item.lastName}</Text>
      <Text style={styles.cell}>{item.firstName}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Học phần:</Text>
        <TouchableOpacity style={styles.closeButton}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeader}>13:00 - 15:30 (Tiết 7 - 9)</Text>
          <Text style={styles.classInfo}>Lớp</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Icon name="attach-file" size={20} color="#fff" />
        <Text style={styles.saveButtonText}>Lưu</Text>
      </TouchableOpacity>
      <View style={styles.keywordsContainer}>
        <TextInput
          style={styles.keywordsInput}
          placeholder="Nhập từ khóa điểm danh"
          placeholderTextColor="#555" // Màu chữ placeholder
        />
        <Text style={styles.keywordsLabel}>Từ khóa điểm danh</Text>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>STT</Text>
          <Text style={styles.headerCell}>Mã số</Text>
          <Text style={styles.headerCell}>Họ đệm</Text>
          <Text style={styles.headerCell}>Tên</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
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
  headerContainer: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row', // Sắp xếp các phần tử theo hàng ngang
    alignItems: 'flex-start', // Căn chỉnh theo trục dọc
    justifyContent: 'space-between', // Căn chỉnh khoảng cách giữa các phần tử
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeaderContainer: {
    flexDirection: 'column', // Sắp xếp các phần tử theo hàng dọc
    alignItems: 'flex-start', // Căn chỉnh các phần tử con về phía bên trái
    position: 'absolute',
    right: 40, // Khoảng cách từ góc phải để thẳng hàng với "Học phần"
    top: 30, // Đặt xuống dưới dòng chữ "Học phần:"
  },
  subHeader: {
    fontSize: 16,
    color: '#555', // Màu đen nhạt hơn
  },
  classInfo: {
    fontSize: 16,
    color: '#555', // Màu đen nhạt hơn
    marginTop: 5, // Khoảng cách giữa dòng "13:00 - 15:30" và "Lớp"
  },
  closeButton: {
    position: 'absolute',
    right: 0, // Đặt vào góc bên phải
    top: 0, // Căn chỉnh với phần đầu
    padding: 10, // Khoảng cách cho nút bấm
  },
  saveButton: {
    marginTop: 20, // Khoảng cách từ phần trên
    backgroundColor: '#007BFF', // Màu nền của nút
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row', // Sắp xếp icon và text theo hàng ngang
    alignItems: 'center', // Căn chỉnh theo trục dọc
  },
  saveButtonText: {
    color: '#fff', // Màu chữ của nút
    fontSize: 16,
    marginLeft: 10, // Khoảng cách giữa icon và chữ
  },
  keywordsContainer: {
    flexDirection: 'row', // Sắp xếp ô nhập liệu và label theo hàng ngang
    alignItems: 'center', // Căn chỉnh theo trục dọc
    marginTop: 20, // Khoảng cách từ nút "Lưu"
    width: '100%', // Chiếm toàn bộ chiều rộng
  },
  keywordsInput: {
    flex: 1, // Chiếm hết không gian có sẵn
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  keywordsLabel: {
    fontSize: 16,
    fontWeight: 'bold', // In đậm chữ
    color: '#000', // Màu chữ giống như màu của "Học phần"
    marginLeft: 10, // Khoảng cách giữa ô nhập liệu và label
  },
  tableContainer: {
    marginTop: 20, // Khoảng cách từ ô nhập liệu
    width: '100%',
  },
  tableHeader: {
    flexDirection: 'row', // Sắp xếp các tiêu đề theo hàng ngang
    backgroundColor: '#e0e0e0', // Màu nền của tiêu đề
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 5, // Khoảng cách giữa tiêu đề và các hàng
  },
  headerCell: {
    flex: 1, // Chiếm không gian đều nhau
    textAlign: 'center',
    color: '#000', // Màu chữ của tiêu đề
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row', // Sắp xếp các ô theo hàng ngang
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    alignItems: 'center',
  },
  cell: {
    flex: 1, // Chiếm không gian đều nhau
    textAlign: 'center',
    fontSize: 16,
  },
  cellSmall: {
    flex: 0.5, // Chiếm không gian nhỏ hơn cho cột STT
    textAlign: 'center',
    fontSize: 16,
  },
});