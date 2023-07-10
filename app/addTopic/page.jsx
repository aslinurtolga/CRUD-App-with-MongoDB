"use client";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
}
