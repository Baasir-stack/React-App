import { Layout, Menu } from 'antd'
// import { UserOutlined } from '@ant-design/icons'
import { CustomerIcon, LogoContainer,Wrapper } from './style';


const { Sider } = Layout

// const items = [UserOutlined].map((_, index) => ({
//   key: String(index + 1),
//   icon: <CustomerIcon src='/assets/customers icon.png' alt='customer-icon'/>,
//   label: `CUSTOMERS`
// }))

const items = [
  {
    key: '1',
    icon: <CustomerIcon src='/assets/customers icon.png' alt='customer-icon'/>, // Use the custom icon
    label: 'CUSTOMERS',
  },
]



const AppSideBar = () => {
  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      style={{
        background: "#015249 0% 0% no-repeat padding-box",
        borderRadius:" 0px 20px 20px 0px",
        opacity: 1,
      }}
      onBreakpoint={(broken) => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <Wrapper>
      <LogoContainer />
      <Menu theme='dark' style={{background: "#043933 0% 0% no-repeat padding-box",
      boxShadow: "0px 5px 25px #00000040",
      borderRadius: "10px",
      opacity: 1,}}
       mode='inline' defaultSelectedKeys={['1']} items={items} />
      </Wrapper>
    </Sider>
  )
}

export default AppSideBar
