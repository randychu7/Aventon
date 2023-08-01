import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className='dark:bg-[#030808] bg-[#fbfefe] border-b border-gray-700'
    >
      <List>
        <div className='p-8 flex flex-col dark:text-white text-[20px] gap-y-6'>
            <a className='hover:text-gray-500 hover:cursor-pointer '>Home</a>
            <a className='hover:text-gray-500 hover:cursor-pointer '>About</a>
            <a className='hover:text-gray-500 hover:cursor-pointer '>Contact</a>
            <a className='hover:text-gray-500 hover:cursor-pointer '>Testimonials</a>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* Replace the "top" word with the MenuIcon */}
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon /> {/* Here's the change */}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
