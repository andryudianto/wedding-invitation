"use client";
import { useState } from "react";

export default function RSVPForm() {
  const [form, setForm] = useState({ nama: "", hadir: "" });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Terima kasih, ${form.nama} telah RSVP: ${form.hadir}`);
  };

  return (
    <section className="py-8 bg-white px-4">
      <h2 className="text-2xl font-bold text-center mb-4">Konfirmasi Kehadiran</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
        <select
          value={form.hadir}
          onChange={(e) => setForm({ ...form, hadir: e.target.value })}
          required
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Pilih Kehadiran</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Kirim
        </button>
      </form>
    </section>
  );
}