// import React from 'react';

// const Sidebar = ({ isOpen, onClose }) => {
//   return (
//     <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
//       <div className="p-6">
//         <div className="flex justify-between items-center mb-8">
//           <div className="text-blue-500 text-2xl font-bold">K-Ü</div>
//           <button onClick={onClose} className="text-gray-500">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <nav className="flex flex-col space-y-4">
//           <a href="/" className="flex items-center text-gray-700">
//             <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9 4v8m-4-4h8" />
//             </svg>
//             Home
//           </a>
//         </nav>
//         <div className="absolute bottom-6 left-6 flex items-center text-gray-700">
//           <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m13 4v1a3 3 0 01-3 3H7a3 3 0 01-3-3v-1" />
//           </svg>
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-200 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`} style={{ background: 'linear-gradient(180deg, #000428 0%, #004e92 100%)' }}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="text-white text-2xl font-bold mr-2">Nama</div>
          <button onClick={onClose} className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-8">
          <div className="text-gray-400">User 1</div>
        </div>
        <nav className="flex flex-col space-y-4">
          <a href="/" className="flex items-center text-white">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9 4v8m-4-4h8" />
            </svg>
            Home
          </a>
        </nav>
        <div className="absolute bottom-6 left-6 flex flex-col space-y-4 text-white">
          <a href="/overall-sentiments" className="flex items-center">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Overall Sentiments
          </a>
          <a href="/settings" className="flex items-center">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Settings
          </a>
          <a href="/logout" className="flex items-center">
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
