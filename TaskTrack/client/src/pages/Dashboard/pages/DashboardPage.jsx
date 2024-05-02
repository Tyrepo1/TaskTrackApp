import PeopleIcon from '@mui/icons-material/People';
import TaskIcon from '@mui/icons-material/Task';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeScreen, selectScreenValue } from '../../../core/state/screenChanger/screenSlice';
import TaskDashboard from '../../TaskDashboard/pages/TaskDashboard';
import UsersPage from '../../Users/pages/Users';
import DrawerMenu from '../components/DrawerMenu';
import TopNav from '../components/TopNav';
const menuItems = [
  { key: 'dashboard', icon: <TaskIcon />, text: 'Task Dashboard', content: <TaskDashboard /> },
  { key: 'users', icon: <PeopleIcon />, text: 'Users', content: <UsersPage /> },
];

function DashboardPage() {
  const selectedItem = useSelector(selectScreenValue)
  const dispatch = useDispatch();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChangeItem = (item) => {
    dispatch(changeScreen({ name: item.key }));
    toggleDrawer();
  };

  const renderContent = () => {
    const selectedContent = menuItems.find((item) => item.key === selectedItem)?.content;
    return selectedContent || <div>Page not found</div>;
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <DrawerMenu menuItems={menuItems} drawerOpen={drawerOpen} handleChangeItem={handleChangeItem} toggleDrawer={toggleDrawer} />
      <TopNav toggleDrawer={toggleDrawer} />
      <div className=' px-10 py-20'>
        {renderContent()}
      </div>
    </div>
  );
}

export default DashboardPage;
