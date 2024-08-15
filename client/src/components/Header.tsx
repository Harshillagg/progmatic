/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

interface UserData {
  avatar_url: string;
  login: string;
  email: string;
  html_url: string;
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    if (codeParam && localStorage.getItem("accessToken") == null) {
      async function getAccessToken() {
        try {
          const response: AxiosResponse<any> = await axios.get(
            `${import.meta.env.VITE_HOST}/getAccessToken?code=${codeParam}`
          );
          console.log(response.data);
          if (response.data.access_token) {
            localStorage.setItem("accessToken", response.data.access_token);
            setIsLoggedIn(true);
            navigate("/");
            window.location.reload();
          }
        } catch (error) {
          console.error("Error fetching access token:", error);
        }
      }
      getAccessToken();
    }

    async function getUserData() {
      await axios
        .get(`${import.meta.env.VITE_HOST}/getUserData`, {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        })
        .then((data) => {
          setUserData(data.data);
          // console.log(data.data);
          setIsLoggedIn(true);
        });
    }
    if (localStorage.getItem("accessToken")) {
      getUserData();
    }
  }, [navigate]);

  const handleLoginWithGitHub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${
        import.meta.env.VITE_GITHUB_CLIENT_ID
      }`
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Navbar className="bg-black w-screen h-20 flex items-center justify-between fixed top-0 z-50">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          &lt; progmatic / &gt;
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {localStorage.getItem("accessToken") != null && isLoggedIn == true ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User" img={userData?.avatar_url} rounded />}
          >
            <Dropdown.Header>
              <a href={userData?.html_url} target="_blank">
                <span className="block text-md font-bold hover:underline">
                  {userData?.login}
                </span>
              </a>
              <span className="block truncate text-sm font-medium">
                {userData?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>UI Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown>
        ) : (
          <button
            className="text-white border-[1px] p-2 rounded-lg font-semibold border-white text-base bg-black hover:bg-white hover:text-black duration-200 ease-in-out"
            onClick={handleLoginWithGitHub}
          >
            <i className="fab fa-github mx-2 text-xl"></i>
            Login with GitHub
          </button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className="text-white text-base hover:underline"
          active={location.pathname === "/"}
          as={NavLink}
          to="/"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          className="text-white text-base hover:underline"
          active={location.pathname === "/code"}
          as={NavLink}
          to="/code"
        >
          Code Editor(beta)
        </Navbar.Link>
        <Navbar.Link
          className="text-white text-base hover:underline"
          active={location.pathname === "/contest"}
          as={NavLink}
          to="/contest"
        >
          Contests
        </Navbar.Link>
        <Navbar.Link
          className="text-white text-base hover:underline"
          active={location.pathname === "/discussions"}
          as={NavLink}
          to="/discussions"
        >
          Discussions
        </Navbar.Link>
        <Navbar.Link
          className="text-white text-base hover:underline"
          active={location.pathname === "/leaderboard"}
          as={NavLink}
          to="/leaderboard"
        >
          Leaderboard
        </Navbar.Link>
        <Navbar.Link
          className="text-white text-base hover:underline"
          active={location.pathname === "/learn"}
          as={NavLink}
          to="/learn"
        >
          Learn?
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
