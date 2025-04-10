import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <div className="bg-red-600 w-full h-20"></div>
      <div className="bg-black w-full h-12 mt-auto "> </div>
      <Outlet />
    </div>
  );
}

export default MainLayout;
