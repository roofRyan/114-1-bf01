import { Link } from "react-router-dom";

export default function NavLinks({
    items, 
    isActive, 
    onItemClick, 
    listClassName, 
    listProps,
}) {
    return(
        <ul className={listClassName} {...listProps}>
            {items.map((item) =>(
              <li key={item.path}>
                <Link to={item.path} className={`flex items-center gap-2 ${isActive && isActive(item.path) ? "active bg-primary text-primary-content": "hover:bg-base-200" }`}
                onClick={() => onItemClick?.(item)}
                >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                </Link>
              </li>    
            ))}
        </ul>
    );
}