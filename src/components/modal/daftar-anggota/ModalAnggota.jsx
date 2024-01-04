"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FormDaftarAnggota from "../../form/FormDaftarAnggota";

function ModalAnggota() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="py-2 px-7 text-sm font-semibold rounded-lg ease-in-out duration-150 bg-orange-500 hover:bg-orange-700 text-white"
      >
        Tambah Anggota
      </button>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Tambah Anggota</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <FormDaftarAnggota />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalAnggota;
