import NavbarClient from "./NavbarClient";
import { getUserSession } from "@/utils/session";

const Navbar = async () => {
  const user = await getUserSession();
  return (
    <div className="fixed top-0 w-full z-100 bg-transparent">
      <NavbarClient user={user}></NavbarClient>
    </div>
  );
};

export default Navbar;
