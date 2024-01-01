import React from 'react'
import { Col, Row } from 'antd'
import { LayoutWrapper, MainTitle, Wrapper } from './style'


const AppHeader: React.FC = () => {
  return (
    <Wrapper>
      <LayoutWrapper>
        <Row align={'middle'}>
          <Col span={22}>
            {' '}
            <MainTitle src="/assets/headerTitle/Sign in.png" alt="Main Title" />
          </Col>
        </Row>
      </LayoutWrapper>
    </Wrapper>
  )
}

export default AppHeader
