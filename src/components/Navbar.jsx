import dayjs from "dayjs";
import { useEffect, useState } from "preact/hooks";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";


const Navbar = () => {

    const { openWindow } = useWindowStore();

    const[time,setTime] = useState(Date.now());

    useEffect( () => {
        const interval = setInterval(()=>{
            setTime(Date.now());
        },1000);

        return ()=> clearInterval(interval);
    },[])
    
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo" />
            <p className="font-bold"> Mac</p>

            <ul>
                {navLinks.map(({id,name,type}) => (
                    <li key={id} onClick={() => openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>

            
        </div>

        <div>
            <ul>
                {navIcons.map(({id, img}) => (
                    <li key={id}>
                        <img src={img} className="icon-hover" alt={`icon-${id}`} />
                    </li>
                ))}
            </ul>

            <time>
                {dayjs(time).format("D MMM  h:mm A (ddd)")}
            </time>
        </div>
    </nav>
  );
};

export default Navbar;