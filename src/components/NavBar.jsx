import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`background: #111111;`
const Tabs = styled(NavLink)`font-size: 20px; margin-right: 25px; color: inherit; text-decoration: none;`


const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Quix Solution PVT LTD</Tabs>
        {/* <Tabs to="/list">Employee List</Tabs> */}
        {/* <Tabs to="/add">New Employee</Tabs> */}
      </Toolbar>
    </Header>
  )
}

export default NavBar;