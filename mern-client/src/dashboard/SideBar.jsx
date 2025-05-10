
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems ,SidebarLogo} from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg"
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";


const SideBar = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  
  return (
    <Sidebar aria-label="Sidebar with content separator example">
        <SidebarLogo href="/" img={user?.photoURL} imgAlt="Flowbite logo" className="w-16 h-16">
        {
          user?.displayName || "Demo user"
        }
      </SidebarLogo>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </SidebarItem>
          <SidebarItem href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </SidebarItem>
          
         
          <SidebarItem href="/login" icon={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem href="/logout" icon={HiTable}> 
           Log Out
          </SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup>
          
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  )
}
 
export default SideBar