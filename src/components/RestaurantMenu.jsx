import { useEffect, useState } from "react";

const ResturantMenu = ()=>{
  const[restmenu,setrestMenu] = useState(null);

  useEffect(()=>{
    fetchMenu();
  },[])

  const fetchMenu = async ()=>{
  const data = await fetch("https://randomuser.me/api/");
  const json = await data.json();
  setrestMenu(json.results[0]);
  }

  return (
    <>
  <div className="menu">
    <p>{restmenu?.gender.charAt(0).toUpperCase() + restmenu?.gender?.slice(1)}</p>
    <p>{restmenu?.name?.first}</p>
    <p>{restmenu?.name?.last}</p>
   <h1>Namse of the Resturant</h1>
   <h2>Menu</h2>
   <ul>
    <li>Biryani</li>
    <li>Burgers</li>
    <li>Diet Coke</li>
    <li>Kabab</li>
   </ul>
  </div>
  <div>
    <div>
      <p>This is another tag </p>
    </div>
  </div>
  </>
  );
};

export default ResturantMenu;