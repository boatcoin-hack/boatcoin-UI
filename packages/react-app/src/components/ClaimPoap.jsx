import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export default function ClaimPoap() {
      
      function showPromiseConfirm() {
        confirm({
          title: 'Do you want to end your event and claim your POAP?',
          icon: <ExclamationCircleOutlined />,
          content: 'When clicked the OK button, you will mint your POAP',
          onOk() {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        });
      }
        return (
            <>
                <Button onClick={showPromiseConfirm}>Claim POAP</Button>
            </>
        )
}
