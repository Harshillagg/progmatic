import { Footer } from "flowbite-react";
// import { NavLink } from "react-router-dom";

export default function Footers() {
  return (
    <Footer container className=" rounded-none bg-[#181818]">
      <div className="w-full text-center">
        {/* <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="/logo.jpg"
            alt="Logo"
            name=""
          />
          <Footer.LinkGroup className="text-base text-white font-semibold gap-4">
            <NavLink to="/code">
              <Footer.Link>wanna start coding?</Footer.Link>
            </NavLink>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider /> */}
        <Footer.Copyright className="text-xl text-white font-semibold" href="https://github.com/IshaanMinocha/progmatic" by="bytesoc" year={2024} />
      </div>
    </Footer>
  );
}
