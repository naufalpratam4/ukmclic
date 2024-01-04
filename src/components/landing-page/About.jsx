import React from "react";

function About() {
  return (
    <div className="p-4 md:p-32 min-h-full " id="about">
      <div className="text-center font-bold text-4xl ">About</div>
      <div className="text-justify text-2xl">
        Organisasi ini didirikan pada tanggal 18 Juni 2007 di Fakultas Sains dan
        Teknologi Universitas Teknologi Yogyakarta. Organisasi ini bertujuan
        untuk mengembangkan kualitas sumber daya manusia yang intelektual,
        bertanggung jawab, aktif, dan mampu berkarya.
      </div>
      <div>
        <div className="text-2xl mt-2 font-semibold">
          Organisasi ini memiliki tugas sebagai berikut:
        </div>
        <div className="ps-4 text-xl">
          <ul className="list-decimal">
            <li>Mengembangkan sumber daya manusia yang kreatif.</li>
            <li>Membentuk mahasiswa yang profesional di bidangnya.</li>
            <li>
              Meningkatkan usaha-usaha pembinaan dan kreatifitas serta
              pengembangan kapasitas intelektual secara keilmuan.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
