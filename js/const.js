let isActive = false;
const timeoutPyro = 5000;
const defaultInfo = {
  title: "Thông báo nhân sự mới",
  content: "Xin chào tất cả thành viên LitCommerce,<br><br>Phòng Nhân sự xin trân trọng giới thiệu <b class='txt-blue'>Chị Nguyễn Thị Diệp</b>, chính thức gia nhập LitCommerce với vị trí <b class='txt-blue'>Human Resources</b> kể từ ngày hôm nay.<br><br>Chúng ta cùng chào đón chị Diệp đến với đại gia đình LitCommerce và chúc chị Diệp hoàn thành tốt các công việc sắp tới và gắn bó với công ty thật dài lâu.<br><br><b>PHÒNG NHÂN SỰ</b>",
  avatar: "./images/avt.jpg",
  name: "Nguyễn Thị Diệp",
  nickname: "(Evelyn)",
  dateOfBirth: "2000",
  position: "Human Resources",
  backgroundImage: "./images/welcome.jpg",
};
const defaultData = {...defaultInfo};

$('#content').summernote({
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
$('#content').summernote('code', defaultData.content);

const classNames = [
  {class: 'title', key: 'title', type: 'text'},
  {class: 'content', key: 'content', type: 'text'},
  {class: 'avatar__img', key: 'avatar', type: 'image'},
  {class: 'avatar__name', key: 'name', type: 'text'},
  {class: 'avatar__nickname', key: 'nickname', type: 'text'},
  {class: 'avatar__date-of-birth', key: 'dateOfBirth', type: 'text'},
  {class: 'avatar__position', key: 'position', type: 'text'},
];

const modalIdNames = [
  {id: 'title', key: 'title', type: 'text'},
  {id: 'content', key: 'content', type: 'area'},
  {id: 'avatar', key: 'avatar', type: 'image'},
  {id: 'name', key: 'name', type: 'text'},
  {id: 'nickname', key: 'nickname', type: 'text'},
  {id: 'date-of-birth', key: 'dateOfBirth', type: 'text'},
  {id: 'position', key: 'position', type: 'text'},
  {id: 'background-image', key: 'backgroundImage', type: 'image'},
];

const snakeToCamel = (str) => {
  return str.toLowerCase().replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', ''));
};