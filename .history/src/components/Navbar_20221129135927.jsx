import React, {useEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import  avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, userProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';



const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title}
  position="BottomCenter">
    <button></button>
  </TooltipComponent>
)


const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavB
    </div>
  )
}

export default Navbar
//  1:23:18