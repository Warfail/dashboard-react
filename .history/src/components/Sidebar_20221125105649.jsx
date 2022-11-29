import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {SiShopware } from 'react-icons/si';
import {MdOutline} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { links } from '../data/dummy';

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen
    md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10">
      {activeMenu && (<>
      <div className="flex justify-between
      items-center">
        <Link to ="/" onClick={() => {}}
        className="items-center gap-3 ml-3 mt-4 flex tex-xl font-extrabold
        tracking-tight dark:text-white text-slate-900">
          <SiShopware /> <span>Shoppy</span>

        </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button" onClick={() => {}} className="text-xl rounded-full p-">

            </button>
          </TooltipComponent>
      </div>
      </>)}

    </div>
  )
}

export default Sidebar