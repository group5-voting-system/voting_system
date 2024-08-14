// import flag from "./assets/jrdan_flag.png"
// function Cities() {
//   return (
//     <>
//     <div className="flex flex-col">
//       <img src={flag}/>
//       <p className="text-center">الزرقاء</p>
//       <div>الدائرة الاولى</div>
//     </div>
//     </>
//   )
// }

// export default App


// import React from 'react';
// import flag from "./assets/jrdan_flag.png"


// const data = [
//   { city: "الزرقاء", circle_num: "الأولى" },
//   { city: "عمان", circle_num: "الأولى" },
//   { city: "عمان", circle_num: "الثانية" },
//    { city: "عمان", circle_num: "الثالثة" },
//   { city: "إربد", circle_num: "الأولى" },
//   { city: "إربد", circle_num: "الثانية" },
//   { city: "الكرك", circle_num: "الأولى" },
//   { city: "الطفيلة", circle_num: "الأولى" },
//   { city: "معان", circle_num: "الأولى" },
//   { city: "المفرق", circle_num: "الأولى" },
//   { city: "السلط", circle_num: "الأولى" },
//   { city: "جرش", circle_num: "الأولى" },
//   { city: "العقبة", circle_num: "الأولى" }
// ];


// const GridItem = () => (
//   <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    
//     <div className="w-24 h-24 mb-4">
//     <img src={flag}/>
//     </div>
//     <p className="text-lg font-semibold mb-2">الزرقاء</p>
//     <div className="bg-gray-100 rounded-full px-3 py-1">
//       <span className="text-sm">الدوائر 1</span>
//     </div>
//   </div>
// );

// const ArabicGrid = () => {
//   return (
//     <div className="bg-gray-900 min-h-screen p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {[...Array(12)].map((_, index) => (
//             <GridItem key={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArabicGrid;





import React from 'react';
import flag from "./assets/jrdan_flag.png"; 

const GridItem = ({ city, circle_num }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    <div className="w-24 h-24 mb-4">
      <img src={flag} alt="علم الأردن" className="w-full h-full object-cover" />
    </div>
    <p className="text-lg font-semibold mb-2">{city}</p>
    <div className="bg-gray-100 rounded-full px-3 py-1">
      <span className="text-sm">الدائرة {circle_num}</span>
    </div>
  </div>
);

const ArabicGrid = () => {
  const data = [
    { city: "الزرقاء", circle_num: "الأولى" },
    { city: "عمان", circle_num: "الأولى" },
    { city: "عمان", circle_num: "الثانية" },
    { city: "عمان", circle_num: "الثالثة" },
    { city: "إربد", circle_num: "الأولى" },
    { city: "إربد", circle_num: "الثانية" },
    { city: "الكرك", circle_num: "الأولى" },
    { city: "الطفيلة", circle_num: "الأولى" },
    { city: "معان", circle_num: "الأولى" },
    { city: "المفرق", circle_num: "الأولى" },
    { city: "السلط", circle_num: "الأولى" },
    { city: "جرش", circle_num: "الأولى" },
    { city: "العقبة", circle_num: "الأولى" }
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
          {data.map((item, index) => (
            <GridItem key={index} city={item.city} circle_num={item.circle_num} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArabicGrid;
