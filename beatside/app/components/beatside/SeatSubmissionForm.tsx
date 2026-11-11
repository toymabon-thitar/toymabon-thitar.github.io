
// "use client";

// import { FormEvent, useState } from "react";
// import { submitSeat } from "@/lib/beatside-api";
// import { uploadSeatImage } from "@/lib/cloudinary";

// const ZONES = [
//   "VIP",
//   "A1",
//   "A2",
//   "A3",
//   "B1",
//   "B2",
//   "B3",
//   "C1",
//   "C2",
//   "C3",
// ];

// export default function SeatSubmissionForm() {
//   const [name, setName] = useState("");
//   const [twitter, setTwitter] = useState("");
//   const [zone, setZone] = useState("");
//   const [seat, setSeat] = useState("");
//   const [image, setImage] = useState<File | null>(null);

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setMessage("");

//     if (!image) {
//       setMessage("Please upload your profile image.");
//       return;
//     }

//     if (!zone) {
//       setMessage("Please select your zone.");
//       return;
//     }

//     try {
//       setLoading(true);

//       // Upload image to Cloudinary first
//       const imageUrl = await uploadSeatImage(image);

//       // Submit seat information to Google Sheets via Apps Script
//       await submitSeat({
//         name: name.trim(),
//         twitter: twitter.trim().replace(/^@/, ""),
//         zone,
//         seat: seat.trim(),
//         imageUrl,
//       });

//       setMessage(
//         "Your seat information has been submitted! Waiting for approval."
//       );

//       setName("");
//       setTwitter("");
//       setZone("");
//       setSeat("");
//       setImage(null);

//       const fileInput = document.getElementById(
//         "seat-image"
//       ) as HTMLInputElement | null;

//       if (fileInput) fileInput.value = "";
//     } catch (error) {
//       console.error("Seat submission failed:", error);
//       setMessage("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Display name
//         </label>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           maxLength={40}
//           placeholder="Your name"
//           className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-red-700"
//         />
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Twitter / X username
//         </label>
//         <input
//           value={twitter}
//           onChange={(e) => setTwitter(e.target.value)}
//           required
//           maxLength={30}
//           placeholder="@username"
//           className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-red-700"
//         />
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Zone
//         </label>
//         <select
//           value={zone}
//           onChange={(e) => setZone(e.target.value)}
//           required
//           className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-red-700"
//         >
//           <option value="">Select your zone</option>
//           {ZONES.map((item) => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Seat number
//         </label>
//         <input
//           value={seat}
//           onChange={(e) => setSeat(e.target.value)}
//           required
//           maxLength={20}
//           placeholder="e.g. Row A, Seat 12"
//           className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-red-700"
//         />
//       </div>

//       <div>
//         <label className="mb-2 block text-sm font-medium">
//           Profile image
//         </label>
//         <input
//           id="seat-image"
//           type="file"
//           accept="image/jpeg,image/png,image/webp"
//           required
//           onChange={(e) => setImage(e.target.files?.[0] ?? null)}
//           className="w-full rounded-xl border border-stone-300 bg-white p-3 text-sm"
//         />
//         <p className="mt-2 text-xs text-stone-500">
//           JPG, PNG or WEBP. One image per person.
//         </p>
//       </div>

//       {message && (
//         <p role="status" className="rounded-lg bg-stone-100 p-3 text-sm">
//           {message}
//         </p>
//       )}

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full rounded-xl bg-[#C92732] px-6 py-3 font-semibold text-white transition hover:bg-[#a91f29] disabled:cursor-not-allowed disabled:opacity-60"
//       >
//         {loading ? "Submitting..." : "Submit My Seat"}
//       </button>

//       <p className="text-center text-xs text-stone-500">
//         Your information will appear in the community after approval.
//       </p>
//     </form>
//   );
// }
