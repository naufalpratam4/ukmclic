import React from "react";

function VisiMisi() {
  return (
    <div className="md:mx-32 py-4 px-4 bg-gray-50 rounded-2xl">
      <div className="font-bold text-4xl text-center mb-4">VISI DAN MISI</div>
      <div className="text-center  text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, unde.
      </div>
      <div className="-100 mt-4">
        <div>
          <ul className="flex border-b-2 border-gray-500 border-solid mb-3 ">
            <div className="pe-2">
              <span className="text-4xl text-orange-500">01</span>
            </div>
            <div>
              <li>
                <span className="text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  culpa id reprehenderit voluptas molestias! Atque alias facere
                  earum, sequi sit nisi harum, dolore ea quibusdam ipsum
                  distinctio asperiores repellendus nulla!
                </span>
              </li>
            </div>
          </ul>
          <ul className="flex border-b-2 border-gray-500 border-solid ">
            <div className="pe-2">
              <span className="text-4xl text-orange-500">02</span>
            </div>
            <div>
              <li>
                <span className="text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  culpa id reprehenderit voluptas molestias! Atque alias facere
                  earum, sequi sit nisi harum, dolore ea quibusdam ipsum
                  distinctio asperiores repellendus nulla!
                </span>
              </li>
            </div>
          </ul>
          <ul className="flex border-b-2 border-gray-500 border-solid ">
            <div className="pe-2">
              <span className="text-4xl text-orange-500">03</span>
            </div>
            <div>
              <li>
                <span className="text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  culpa id reprehenderit voluptas molestias! Atque alias facere
                  earum, sequi sit nisi harum, dolore ea quibusdam ipsum
                  distinctio asperiores repellendus nulla!
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="py-4 px-4 bg-orange-500 text-white w-full rounded-2xl mt-3 hover:bg-orange-700 ease-in-out duration-150"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default VisiMisi;
