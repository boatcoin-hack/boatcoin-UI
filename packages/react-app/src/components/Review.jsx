import React from 'react';
import { Popover, Button } from 'antd';

const text = <span>Leave Us A Review...</span>;
const content = (
    <div id="results"  style={{ width: 200}}>
    <br />
    <br />
      <form>
        <label>
          Title:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
          Photo:
            <input type="file" name="name" />
          </label>
          <br />
          <label>
          Review:
          <textarea type="textarea" name="name" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
);

const buttonWidth = 64;

export default function Review() {
    return (
        <div style={{ width: buttonWidth}}>
            <Popover placement="rightTop" title={text} content={content} trigger="click">
                <Button>Add Review</Button>
            </Popover>
        </div>
    );
}