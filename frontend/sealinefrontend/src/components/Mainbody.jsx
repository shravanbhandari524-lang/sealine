import styles from "./style/Mainbody.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { PlusCircle, Box, UserMinus, UserPlus } from "lucide-react";

export default function Mainbody() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleclick = (path) => {
    navigate("/Adminpage/" + path);
  };

  const navItems = [
    { id: "adddem", label: "Add Dem", icon: PlusCircle },
    { id: "addsup", label: "Add Supply Client", icon: Box },
    { id: "delcl", label: "Delete Client", icon: UserMinus },
    { id: "addcl", label: "Add Client", icon: UserPlus },
  ];

  return (
    <div className={styles.container}>
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = location.pathname.includes(id);
        return (
          <button
            key={id}
            onClick={() => handleclick(id)}
            className={`${styles.actionBtn} ${isActive ? styles.active : ""}`}
            title={label}
          >
            <Icon size={18} strokeWidth={2} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
