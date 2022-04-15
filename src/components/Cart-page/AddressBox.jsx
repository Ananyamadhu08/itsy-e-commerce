import React from "react";

function AddressBox() {
  return (
    <div
      className="p-6 flex justify-between align-items-center w-full shadow-2xl bg-slate-900 mb-10 "
      style={{ border: "1px dotter black", bottom: "1.2rem" }}
    >
      <div className="flex flex-col justify-center text-black p-3 width-80-percent">
        <h6 className="text-lg text-rose-200 font-semibold mb-3">
          Deliver To :<span className="font-normal"> Admin User 506066 </span>
        </h6>
        <p className="text-md text-rose-200">
          sddsjnc jsdsn sdsdkns ds sddsjnc jsdsn sdsdkns ds sddsjnc jsdsn
          sdsdkns ds sddsjnc jsdsn sdsdkns ds sddsjnc jsdsn sdsdkns ds sddsjnc
        </p>
      </div>

      <button
        className="bg-rose-300 btn-sm text-slate-900 "
        style={{ left: "2rem", bottom: "2rem" }}
      >
        Clear
      </button>
    </div>
  );
}

export default AddressBox;
