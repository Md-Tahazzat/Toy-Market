import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-300 py-10 text-slate-700">
      <div className="footer max-w-[85rem] mx-auto p-5 md:p-0  text-base-content">
        <div>
          <img
            className="h-20"
            src="https://i.ibb.co/6v305Kk/toy-logo-1.png"
            alt="toy-logo-1"
            border="0"
          />
          <p className="font-semibold  text-xl">
            Toy Box Ltd.
            <br />
            Providing reliable Toys since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Usefull links</span>

          <NavLink to="/toys" className="link link-hover text-blue-600">
            All Toys
          </NavLink>
          <NavLink to="/myToys" className="link link-hover text-blue-600">
            My Toys
          </NavLink>
          <NavLink to="/addToy" className="link link-hover text-blue-600">
            Add A Toy
          </NavLink>
        </div>

        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover ">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
