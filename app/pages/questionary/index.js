import { Button, Form, Input, Select } from 'antd'
import 'antd/dist/antd.css'
import { useState } from 'react'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
  style: { width: '80%' }
}
const tailLayout = {
  wrapperCol: { offset: 11, span: 4 }
}

const Questionary = () => {
  const [loading, setLoading] = useState(false)

  const addQuestionary = async questionary => {
    try {
      await fetch(`/api/questionary`, {
        credentials: 'include',
        method: 'post',
        body: JSON.stringify(questionary)
      })
    } catch (e) {
      console.log(e)
    }
  }

  const handleSubmit = async formInfo => {
    setLoading(!loading)
    await addQuestionary(formInfo)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div style={{ margin: '20px' }}>
        恭喜你通过了笔试, 面试将在本周工作日的中午进行, 形式有线上和线下两种, 时间大约10-30min, 请填写你的信息,
        我们将会在汇总消息后通知面试安排
      </div>
      <Form
        {...layout}
        onFinish={async formData => handleSubmit(formData)}
      >
        <Form.Item
          label='姓名'
          name='name'
          rules={[
            {
              required: true,
              message: '请输入你的名字'
            }
          ]}
        >
          <Input disable={loading} />
        </Form.Item>
        <Form.Item
          label='学号'
          name='student_id'
          rules={[
            {
              required: true,
              message: '请输入你的学号'
            },
            {
              pattern: /2020[0-9]{9}/,
              message: '请输入正确的学号'
            }
          ]}
        >
          <Input disable={loading} />
        </Form.Item>
        <Form.Item
          label='邮箱'
          name='email'
          rules={[
            {
              required: true,
              message: '请输入你的邮箱'
            },
            {
              pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
              message: '请输入正确的邮箱格式'
            }
          ]}
        >
          <Input disable={loading} />
        </Form.Item>
        <Form.Item
          label='时间'
          name='time'
          rules={[
            {
              required: true,
              message: '请选择你的面试时间'
            }
          ]}
        >
          <Select disable={loading}>
            <Select.Option value={1}>周一</Select.Option>
            <Select.Option value={2}>周二</Select.Option>
            <Select.Option value={3}>周三</Select.Option>
            <Select.Option value={4}>周四</Select.Option>
            <Select.Option value={5}>周五</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label='形式'
          name='form'
          rules={[
            {
              required: true,
              message: '请选择面试形式'
            }
          ]}
        >
          <Select disable={loading}>
            <Select.Option value='offline'>线下</Select.Option>
            <Select.Option value='online'>线上</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit' loading={loading}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Questionary
