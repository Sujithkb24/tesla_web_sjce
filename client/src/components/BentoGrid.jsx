import React from "react";

const images = [
  "/Tesla_photos/Bento_Grid_3.webp",
  "/Tesla_photos/Bento_Grid_2.webp",
  "/Tesla_photos/Bento_Grid_4.webp",
  "/Tesla_photos/Bento_Grid_1.webp",
  "/Tesla_photos/Bento_Grid_6.webp",
  "/Tesla_photos/Bento_Grid_7.webp",
  "/Tesla_photos/Bento_Grid_5.webp",
  "/Tesla_photos/Tesla_group.webp",
  "/Tesla_photos/Bento_Grid_8.webp"
];

export default function BentoGrid() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-2"
      style={{ 
        backgroundColor: "var(--color-bg-black)", 
        height: "100dvh", 
        minHeight: "100dvh" 
      }}
    >
      <div 
        className="p-2 sm:p-4 rounded-xl w-full max-w-[1200px]"
        style={{ 
          backgroundColor: "var(--color-bg-slate-200)", 
          height: "90dvh" 
        }}
      >
        <div className="grid grid-cols-4 grid-rows-4 gap-2 sm:gap-4 w-full h-full">
          {/* Row 1 */}
          <div className="col-span-2 row-span-1 rounded-lg overflow-hidden">
            <img src={images[0]} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
            <img src={images[1]} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
            <img src={images[2]} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Row 2 */}
          <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
            <img src={images[3]} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
            <img src={images[4]} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Row 3 */}
          <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
            <img src={images[5]} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
            <img src={images[6]} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
            <img src={images[7]} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
            <img src={images[8]} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
