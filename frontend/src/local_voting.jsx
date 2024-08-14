// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import candidate from './assets/candidate.jpg'

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});

//   // Mock data for candidates
//   const candidates = Array(10).fill().map((_, i) => ({
//     id: i + 1,
//     name: ' اية الله فريحات',
//     image: candidate  }));

//   const handleListCheck = () => {
//     setSelectedList(!selectedList);
//   };

//   const handleSelectAll = () => {
//     const allSelected = Object.values(selectedCandidates).every(Boolean);
//     const newSelectedCandidates = {};
//     candidates.forEach(candidate => {
//       newSelectedCandidates[candidate.id] = !allSelected;
//     });
//     setSelectedCandidates(newSelectedCandidates);
//   };

//   const handleCandidateCheck = (id) => {
//     setSelectedCandidates(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-center">
//         <input
//             type="checkbox"
//             className="form-checkbox h-5 w-5 py-[1rem] text-green-600"
//             checked={selectedList}
//             onChange={handleListCheck}
//           />
//           <h2 className="text-xl font-semibold ml-[1rem]">قائمة نمو</h2>
//         </div>
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//         <button className="bg-black hover:bg-gray-700 ml-[2rem] text-white w-[2rem] h-[2rem] rounded-full p-1 transition-colors duration-200">
//           <ChevronLeft size={24} />
//         </button>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
//           {candidates.map(candidate => (
//             <div key={candidate.id} className="flex flex-col items-center">
//               <div className="relative">
//                 <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//               </div>
//               <div className="mt-2 flex items-center">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox h-4 w-4 text-blue-600 ml-2"
//                   checked={selectedCandidates[candidate.id] || false}
//                   onChange={() => handleCandidateCheck(candidate.id)}
//                 />
//                 <p className="text-sm font-medium">{candidate.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="bg-black hover:bg-gray-700 mr-[2rem] text-white w-[2rem] h-[2rem] rounded-full p-1 transition-colors duration-200">
//           <ChevronRight size={24} />
//         </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-[1rem]"
//           >
//             اختيار الكل
//           </button>
//           <button
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-[1rem]"
//           >
//          صوّت الآن
//           </button>
//         </div>
//       </div>
      
      
        
      
      
//     </div>
//   );
// };

// export default VotingCandidatesGrid;







// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import candidateImage from './assets/candidate.jpg'; // تأكد من صحة المسار للصورة

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});

//   // Mock data for candidates
//   const candidates = Array(10).fill().map((_, i) => ({
//     id: i + 1,
//     name: 'آية الله فريحات',
//     image: candidateImage // تصحيح استخدام الصورة
//   }));

//   const handleListCheck = () => {
//     setSelectedList(prev => !prev);
//   };

//   const handleSelectAll = () => {
//     const allSelected = Object.values(selectedCandidates).every(Boolean);
//     const newSelectedCandidates = {};
//     candidates.forEach(candidate => {
//       newSelectedCandidates[candidate.id] = !allSelected;
//     });
//     setSelectedCandidates(newSelectedCandidates);
//   };

//   const handleCandidateCheck = (id) => {
//     setSelectedCandidates(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
//       <h1 className="text-2xl md:text-3xl font-bold mb-6">صوت الآن</h1>
      
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-red-700 text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <h2 className="text-xl font-semibold">قائمة النمو</h2>
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//           </label>
//         </div>
        
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
//           {candidates.map(candidate => (
//             <div key={candidate.id} className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow-md">
//               <div className="relative mb-2">
//                 <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full object-cover" />
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="hidden"
//                   checked={selectedCandidates[candidate.id] || false}
//                   onChange={() => handleCandidateCheck(candidate.id)}
//                 />
//                 <div
//                   className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                   onClick={() => handleCandidateCheck(candidate.id)}
//                 >
//                   {selectedCandidates[candidate.id] && (
//                     <svg
//                       className="w-4 h-4 text-white absolute"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   )}
//                 </div>
//                 <p className="text-sm font-medium ml-2">{candidate.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             اختيار الكل
//           </button>
//         </div>
//       </div>
      
//       <div className="flex justify-between w-full max-w-4xl mt-6">
//         <button className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 transition-colors duration-200">
//           <ChevronLeft size={24} />
//         </button>
//         <button className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 transition-colors duration-200">
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;







import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import candidate from './assets/candidate.jpg';

const VotingCandidatesGrid = () => {
  const [selectedList, setSelectedList] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState({});

  // Mock data for candidates
  const candidates = Array(10).fill().map((_, i) => ({
    id: i + 1,
    name: 'آية الله فريحات',
    image: candidate
  }));

  const handleListCheck = () => {
    setSelectedList(prev => !prev);
  };

  const handleSelectAll = () => {
    const allSelected = Object.values(selectedCandidates).every(Boolean);
    const newSelectedCandidates = {};
    candidates.forEach(candidate => {
      newSelectedCandidates[candidate.id] = !allSelected;
    });
    setSelectedCandidates(newSelectedCandidates);
  };

  const handleCandidateCheck = (id) => {
    setSelectedCandidates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen text-white p-4 flex flex-col items-center">
      <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={selectedList}
              onChange={handleListCheck}
            />
            <div
              className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
            >
              {selectedList && (
                <svg
                  className="w-4 h-4 text-white absolute"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="text-xl font-semibold ml-2">قائمة نمو</span>
          </label>
        </div>
        
        <div className="flex justify-between items-center w-full max-w-4xl mt-6">
          <button className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200">
            <ChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
            {candidates.map(candidate => (
              <div key={candidate.id} className="flex flex-col items-center">
                <div className="relative">
                  <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
                </div>
                <div className="mt-2 flex items-center">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedCandidates[candidate.id] || false}
                    onChange={() => handleCandidateCheck(candidate.id)}
                  />
                  <div
                    className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
                    onClick={() => handleCandidateCheck(candidate.id)}
                  >
                    {selectedCandidates[candidate.id] && (
                      <svg
                        className="w-4 h-4 text-white absolute"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm font-medium ml-2">{candidate.name}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200">
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleSelectAll}
            className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
          >
            اختيار الكل
          </button>
          <button
            className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            صوّت الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotingCandidatesGrid;
