import { HiUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

const defaultMenuItems = [
    { label : "個人資料"},
    { label : "登入"},
    { label : "註冊"}
];

export default function UserMenu({ items = defaultMenuItems }){
    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-circle btn-sm bg-primary text-primary-content border-0 hover:bg-primary/70"
            >
                <HiUser className="w-5 h-5" aria-hidden="true" />
            </div>
            <ul 
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box right-0 min-w-max"
            >
                {items.map(({label, onClick, href}) => (
                    <li key={label}>
                        <Link
                            to={href ?? "#"}
                            onClick={onClick}
                            className="hover:bg-base-400 dark:hover:bg-base-300"
                        >{label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}