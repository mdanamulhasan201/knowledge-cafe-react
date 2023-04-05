import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar  bg-base-100 shadow-xl  grid md:flex lg:flex">
  <div className="flex-1 mb-4">
    <a className="cursor-pointer font-bold text-3xl" href='#'>Knowledge Cafe</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered border-2 border-primary" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full border-2 border-primary">
          <img src="https://media.licdn.com/dms/image/C5603AQGRwyA3yhAi7w/profile-displayphoto-shrink_800_800/0/1645245396140?e=2147483647&v=beta&t=q_JSVzEfzB5RMxQT14ixV9rFW6qZTQt4MvG4Ef2hHac" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;