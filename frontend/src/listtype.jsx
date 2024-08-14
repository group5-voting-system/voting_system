// import React from 'react';
// import background from './assets/background-listtype.jpg';
// import background2 from './assets/jordan.jpg';
// const ElectionCircleSelection = () => {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-4" style={{ backgroundImage: `url(${background2})`}} {{ backgroundSize: cover}}  >
//       <div 
//         className="flex flex-col justify-center items-center w-full h-[25rem] max-w-4xl bg-cover bg-center"
//       >
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
//           الرجاء اختيار الدائرة المناسبة
//         </h1>
//         <div className="flex flex-col md:flex-row gap-6 justify-center">
//           {['القوائم الحزبية', 'القوائم المحلية'].map((circle, index) => (
//             <button
//               key={index}
//               className="bg-white text-gray-900 rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white transform hover:scale-105 shadow-lg"
//             >
//               <span className="text-xl md:text-2xl font-semibold mb-2">{circle}</span>
//               <span className="text-sm opacity-75">صوّت الآن</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ElectionCircleSelection;



import React from 'react';
import background2 from './assets/jorflag.jpg'; // تأكد من صحة المسار للصورة

const ElectionCircleSelection = () => {
  return (
    <div 
      className="min-h-screen bg-white flex items-center justify-center p-4" 
      style={{ 
        backgroundImage: `url(${background2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex flex-col w-[40rem] h-[25rem] max-w-4xl bg-white bg-opacity-60 rounded-lg p-6">
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-8">
          الرجاء اختيار الدائرة المناسبة
        </h1>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {['القوائم الحزبية', 'القوائم المحلية'].map((circle, index) => (
            <button
              key={index}
              className="bg-white text-gray-900 w-[18rem] h-[15rem]  rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white transform hover:scale-105 shadow-lg"
            >
              <span className="text-xl md:text-2xl font-semibold mb-2">{circle}</span>
              <span className="text-sm opacity-75">صوّت الآن</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectionCircleSelection;
