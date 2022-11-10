let isActive = false;
const defaultData = {
  title: "Thông báo nhân sự mới",
  content: "Xin chào tất cả thành viên LitCommerce,<br><br>Phòng Nhân sự xin trân trọng giới thiệu <b class='txt-blue'>Anh Đào Thế Hải</b>, chính thức gia nhập LitCommerce với vị trí <b class='txt-blue'>Account Manager</b> kể từ ngày hôm nay.<br><br>Chúng ta cùng chào đón anh Hải đến với đại gia đình LitCommerce và chúc anh Hải hoàn thành tốt các công việc sắp tới và gắn bó với công ty thật dài lâu.<br><br><b>PHÒNG NHÂN SỰ</b>",
  avatar: "./images/avt.jpg",
  name: "Đào Thế Hải (Leo)",
  dateOfBirth: "1991",
  position: "Account Manager",
  backgroundImage: "./images/welcome.jpg",
};

$('#summernote').summernote({
  placeholder: 'Enter content ...',
  tabsize: 2,
  height: 300,
  toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'underline', 'clear']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture', 'video']],
    ['view', ['fullscreen', 'codeview', 'help']]
  ],
});
$('#summernote').summernote('code', defaultData.content);

const classNames = [
  {class: 'title', key: 'title', type: 'text'},
  {class: 'content', key: 'content', type: 'text'},
  {class: 'avatar__img', key: 'avatar', type: 'image'},
  {class: 'avatar__name', key: 'name', type: 'text'},
  {class: 'avatar__date-of-birth', key: 'dateOfBirth', type: 'text'},
  {class: 'avatar__position', key: 'position', type: 'text'},
];