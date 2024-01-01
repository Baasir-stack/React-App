import styled from 'styled-components'
import { AppButtonWrapper } from '../../../component/button/style'



export const AddButton = styled(AppButtonWrapper)`
  margin: 2rem 0;
  padding: 1.3rem 1.7rem;
  background: transparent url('/assets/Base.png') 0% 0% no-repeat padding-box;
border-radius: 10px;
opacity: 1;
`
export const AddCustomerBtn = styled(AppButtonWrapper)`
  width: 100%;
  display: flex;
  border-radius: 16px;
  justify-content: center;
background: transparent url('assets/Base.png') 0% 0% no-repeat padding-box;
background-size: cover;
opacity: 1;

`
export const CustomerAvatar = styled.img`
  border-radius: 7px;
  width: 70px;
  height: 70px;
`
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`
export const DeleteModalBodyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
`
export const DeleteIconWrapper = styled.img`
  width: 50px;
  height: 50px;
  color: red;
`
