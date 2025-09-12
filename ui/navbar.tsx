export default function Navbar() {
  return (
    <>
      <div className="navbar bg-transparent text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2"
            >
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Resources</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="m-3 text-xl font-bold">Logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-dm">
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-3">
          {/* <a className="btn rounded-lg btn-xs sm:btn-sm md:btn-md btn-info">
            Book a Call
          </a> */}
        </div>
      </div>
    </>
  );
}
