import React from 'react';
import { Popover, Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

const text = <span>Leave Us A Review...</span>;
const content = (
    <div id="results"  style={{ width: 200}}>
      <Form>
        <Form.Item
          label="Title"
          name="title"
        >
            <Input/>
          </Form.Item>
          <Form.Item
          label="Media"
          name="media"
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="review" label="Review">
          <Input.TextArea />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
         </Button> 
      </Form>
    </div>
);

const buttonWidth = 64;

export default function Review() {
    return (
        <>
            <Popover placement="rightTop" title={text} content={content} trigger="click">
                <Button>Add Review</Button>
            </Popover>
        </>
    );
}