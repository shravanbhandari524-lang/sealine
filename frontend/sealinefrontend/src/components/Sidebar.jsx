import { MenuItem, MenuContainer } from "./ui/fluid-menu"
import { Menu as MenuIcon, X, Home, ShieldCheck, Box, UserPlus, UserMinus, LogOut } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import styles from "./style/Sidebar.module.css"

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={styles.fluidSidebarContainer}>
      <MenuContainer>
        <MenuItem 
          icon={
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                <MenuIcon size={24} strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                <X size={24} strokeWidth={1.5} />
              </div>
            </div>
          } 
        />
        <MenuItem 
          icon={<Home size={24} strokeWidth={1.5} />} 
          isActive={location.pathname === "/"}
          onClick={() => navigate("/")} 
        />
        <MenuItem 
          icon={<ShieldCheck size={24} strokeWidth={1.5} />} 
          isActive={location.pathname.startsWith("/Adminpage")}
          onClick={() => navigate("/Adminpage")} 
        />
        <MenuItem 
          icon={<LogOut size={24} strokeWidth={1.5} />} 
          onClick={() => navigate("/login")} 
        />
      </MenuContainer>
    </div>
  )
}
