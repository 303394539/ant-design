import React from 'react';
import { StarOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';

const props: UploadProps = {
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
  showUploadList: {
    showDownloadIcon: true,
    downloadIcon: 'Download',
    showRemoveIcon: true,
    removeIcon: <StarOutlined onClick={(e) => console.log(e, 'custom removeIcon event')} />,
  },
};

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);

export default App;
