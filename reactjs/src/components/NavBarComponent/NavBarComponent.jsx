import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavBarComponent = () => {
  const onChange = () => { }

  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
          return (
            <WrapperTextValue key={option}>{option}</WrapperTextValue>
          )
        })
      case 'checkbox':
        return (
          <Checkbox.Group
            style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox key={option.value} value={option.value}>
                  {option.label}
                </Checkbox>
              )
            })}
          </Checkbox.Group>
        )
      case 'star':
        return options.map((option) => {
          return (
            <div key={option} style={{ display: 'flex' }}>
              <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
              <span>{`từ ${option} sao`}</span>
            </div>
          )
        })
      case 'price':
        return options.map((option) => {
          return (
            <WrapperTextPrice key={option}>{option}</WrapperTextPrice>
          )
        })
      default:
        return null
    }
  }

  return (
    <div>
      <WrapperLableText>Label</WrapperLableText>
      <WrapperContent>
        {renderContent('text', ['tu lanh', 'TV', 'MAYGIAT'])}
      </WrapperContent>
      <WrapperContent>
        {renderContent('checkbox', [
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' }
        ])}
      </WrapperContent>

    </div>
  )
}

export default NavBarComponent
