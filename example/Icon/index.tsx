import React from 'react'
import styled from 'styled-components'
import Icon from 'Icon'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .cui-icon {
    margin: 0.5rem;
  }
`

const customIcon = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566228306013&di=a9c4e1b7425d17f996e54e1fb5739b86&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fd4d38e5f446e76d836b61528f05fb366939311d1.jpg'

const onClick = () => {
  console.log(`我是可点击图标！`)
}

const IconDemo = React.memo(props => {
  return (
    <React.Fragment>
      <Container>
        <Icon size='small' name='account-login' />
        <Icon size='medium' name='account-login' />
        <Icon size='large' name='account-login' />
      </Container>

      <Container>
        <Icon size='small' name='account-login' color='red' />
        <Icon size='medium' name='account-login' color='green' />
        <Icon size='large' name='account-login' color='yellow' />
      </Container>

      <Container>
        <Icon reactRatio={1.5} size='small' url={customIcon} onClick={onClick} />
        <Icon reactRatio={1.5} size='medium' url={customIcon} onClick={onClick} />
        <Icon reactRatio={1.5} size='large' url={customIcon} onClick={onClick} />
      </Container>
    </React.Fragment>
  )
})

export default IconDemo
