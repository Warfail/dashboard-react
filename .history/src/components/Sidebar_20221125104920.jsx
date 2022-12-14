import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {SiShopware } from 'react-icons/si';
import {MdOutline} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { links } from '../data/dummy';

const Sidebar = () => {
  return (
    <div className="ml-3 h-screen
    md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10">
      {activeMenu && (<>
      <div className="flex justify-between
      items-center">
        <Link to ="/" onClick
      </div>
      </>)}

    </div>
  )
}

export default Sidebar