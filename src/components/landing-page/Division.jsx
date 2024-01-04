import React from "react";
import CardComponent from "../card/CardComponent";

function Division() {
  const divisi = [
    "BPH",
    "Pendidikan",
    "Humas",
    "Pameran",
    "PSDM",
    "Media Kreatif",
    "Produksi Hunting",
    "Inventaris",
  ];
  const deskripsi = [
    "Ini adalah divisi BPH",
    "Ini adalah divisi Pendidikan",
    "Ini adalah divisi Humas",
    "Ini adalah divisi Pameran",
    "Ini adalah divisi PSDM",
    "Ini adalah divisi Media Kreatif",
    "Ini adalah divisi Produksi Hunting",
    "Ini adalah divisi Inventaris",
  ];
  return (
    <div className="py-4 mt-32 md:mx-32">
      <div className="text-4xl font-bold text-center pb-9">Divisi</div>
      <div className="grid md:grid-cols-2 justify-items-center">
        {divisi.map((divisiName, index) => (
          <CardComponent
            key={index}
            divisi={divisiName}
            deskripsi={deskripsi[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Division;
