import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Account from "../../../assets/icons/account.svg";
import Chart from "../../../assets/icons/chart.svg";
import Chat from "../../../assets/icons/chat.svg";
import Dashboard from "../../../assets/icons/dashboard.svg";
import Group from "../../../assets/icons/group.svg";
import Settings from "../../../assets/icons/settings.svg";

const NavLinks = () => {

    const history = useHistory();
    console.log(history.location.pathname)
    return (
        <>
            <Nav.Link as={Link} className={`mt-2 ${history.location.pathname === '/dashboard' ? 'active' : ''}`} to='/dashboard'>
                <img src={Dashboard} alt='icon' className='mr-2' width={20} />
                Dashboard
            </Nav.Link>
            <Nav.Link as={Link} className='mt-2' to='/daily-observations' disabled>
                <img src={Group} alt='icon' className='mr-2' width={20} />
                Daily Observations
            </Nav.Link>
            <Nav.Link as={Link} className={`mt-2 ${history.location.pathname === '/resident-analysis' ? 'active' : ''}`} to='/resident-analysis'>
                <img src={Chart} alt='icon' className='mr-2' width={20} />
                Resident Analytics
            </Nav.Link>
            <Nav.Link as={Link} className='mt-2' to='/chat' disabled>
                <img src={Chat} alt='icon' className='mr-2' width={20} />
                Chat
            </Nav.Link>
            <Nav.Link as={Link} className='mt-2' to='/user-profile' disabled>
                <img src={Account} alt='icon' className='mr-2' width={20} />
                User Profile
            </Nav.Link>
            <Nav.Link as={Link} className='mt-2' to='/settings' disabled>
                <img src={Settings} alt='icon' className='mr-2' width={20} />
                Settings
            </Nav.Link>
        </>
    )
}

export default NavLinks
