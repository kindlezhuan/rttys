import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'iview/dist/locale/en-US'
import zhLocale from 'iview/dist/locale/zh-CN'

const RttyI18n = {
    'en-US': {
        'device-count': 'Online Device: {count}',
        'cmd-status-total': 'Total: {count}',
        'cmd-status-succeed': 'Succeed: {count}',
        'cmd-status-fail': 'Fail: {count}'
    },
    'zh-CN': {
        'Description': '描述',
        'Uptime': '在线时长',
        'Connect': '连接',
        'Please enter the filter key...': '请输入关键字进行过滤……',
        'No devices connected': '没有设备连接',
        'Upload file to device': '上传文件到设备',
        'Download file from device': '从设备下载文件',
        'Increase font size': '增大字体',
        'Decrease font size': '减小字体',
        'Please select the file to upload': '请选择您要上传的文件',
        'Uploading': '正在上传',
        'Click to upload': '上传',
        'Upload success': '上传成功',
        'Download Finish': '下载成功',
        'Upload canceled': '上传终止',
        'Download canceled': '下载终止',
        'Device offline': '设备离线',
        'modification': '修改时间',
        'upfile-info': '文件"{name}"将会保存到你的设备的"/tmp"目录',
        'Name': '名称',
        'Size': '大小',
        'Authorization Required': '需要授权',
        'Enter username...': '请输入用户名...',
        'Enter password...': '请输入密码...',
        'Login': '登录',
        'username is required': '用户名为必填项',
        'Login Fail! username or password wrong.': '登录失败，用户名或密码错误',
        'Connect failed': '连接失败',
        'device-count': '在线设备数：{count}',
        'Cannot be greater than 500MB': '不能大于500MB',
        'Sessions is full': '会话已满',
        'The file name too long': '文件名太长',
        'Only one file can be uploaded at the same time': '同一时刻只能上传一个文件',
        'Refresh List': '刷新列表',
        'executive command': '执行命令',
        'Username': '用户名',
        'Password': '密码',
        'Command': '命令',
        'Parameter': '参数',
        'Environment variable': '环境变量',
        'OK': '确定',
        'Cancel': '取消',
        'command is required': '命令为必填项',
        'Please select the devices you want to operate.': '请选择您要操作的设备',
        'status of executive command': '命令执行状态',
        'cmd-status-total': '总数: {count}',
        'cmd-status-succeed': '成功: {count}',
        'cmd-status-fail': '失败: {count}'
    }
}

Vue.use(VueI18n);

const messages = {
    'zh-CN': Object.assign(zhLocale, RttyI18n['zh-CN']),
    'en-US': Object.assign(enLocale, RttyI18n['en-US'])
};

let language = navigator.language;

if (!messages[language])
    language = 'en-US';

export default new VueI18n({
    locale: language,
    messages: messages
});