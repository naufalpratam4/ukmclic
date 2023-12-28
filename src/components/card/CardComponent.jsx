import React from "react";

function CardComponent(props) {
  return (
    <>
      <div className="border-4 border-gray-500 rounded-xl mb-3">
        <div className="">
          <img
            src="https://picsum.photos/500/300"
            alt=""
            className="rounded-tl-lg rounded-tr-lg"
          />
          <h2 className="pt-4 font-semibold text-2xl text-center">
            {props.divisi}
          </h2>
          <div className="text-center pb-4">
            <button
              type="button"
              className="py-4 px-9 bg-orange-500 rounded-lg w-1/2 mt-4 text-white hover:bg-orange-700 ease-in-out duration-150"
            >
              Lihat Profil
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
