"use client";
import axios from "axios";
import { useState } from "react";
const webUrl = process.env.NEXT_PUBLIC_URL;

export default function Page() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    console.log("download");
    setLoading(true);
    axios
      .post(`${webUrl}/api/repo`)
      .then((response) => {
        const downloadUrl = response.data.downloadUrl;
        const status = response.data.status;
        /* window.open(downloadUrl, "_blank"); */
        window.location.href = downloadUrl;
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="min-h-screen flex flex-col gap-y-5 items-center justify-center">
      <p className="font-bold text-xl">Macro-bot Repo</p>
      <button
        className="bg-slate-900 text-white px-8 py-2 rounded-md hover:bg-slate-600"
        onClick={handleDownload}
        disabled={loading}
      >
        {loading ? "Downloading..." : "Get the Latest Repo"}
      </button>
    </section>
  );
}
