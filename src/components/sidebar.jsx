import React from 'react';

const Sidebar = () => {
const users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 3', 'User 4', 'User 5', 'User 6', ];

  return (
    <div className={`fixed top-0 left-0 h-full max-w-[300px] sm:w-[300px] w-full transform translate-x-0 transition-transform duration-300 ease-in-out`} style={{ background: 'rgba(24, 23, 33, 0.6)' }}>
      <div className="p-6">
        <div className="flex justify-center items-center mb-8 ">
          <div className="text-white text-3xl font-bold mr-2">TeleAI</div>
        </div>
        <div className='h-5'
        ></div>
            <nav className="flex flex-col space-y-4 gap-4 min-h-0 w-full overflow-y-auto no-scrollbar">
            {users.map((user, index) => (
                <a href="/" key={index} className="flex items-center text-white text-lg">
                {user}
                </a>
            ))}
            {/* <a href="/" className="flex items-center text-white">
                User 1
            </a> */}
            </nav>
        <div className="absolute bottom-6 left-6 flex flex-col space-y-4 text-white">
    
          <a href="/overall-sentiments" className="flex items-center text-white">
            <svg className="h-5 w-5 mr-2 tet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Overall Sentiments
          </a>
          <a href="/settings" className="flex items-center text-white">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Settings
          </a>
          <a href="/logout" className="flex items-center text-white">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m13 4v1a3 3 0 01-3 3H7a3 3 0 01-3-3v-1" />
            </svg>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
