
// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { getApprovedSeats } from "@/lib/beatside-api";
// import type { SeatRecord } from "@/lib/beatside-types";

// export default function ApprovedSeatGrid() {
//   const [seats, setSeats] = useState<SeatRecord[]>([]);
//   const [search, setSearch] = useState("");
//   const [selectedZone, setSelectedZone] = useState("ALL");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     let active = true;

//     async function loadSeats() {
//       try {
//         setLoading(true);
//         const data = await getApprovedSeats();

//         if (active) {
//           setSeats(data);
//           setError("");
//         }
//       } catch (err) {
//         console.error("Failed to load seats:", err);

//         if (active) {
//           setError("Unable to load community data. Please try again.");
//         }
//       } finally {
//         if (active) setLoading(false);
//       }
//     }

//     loadSeats();

//     // Refresh approved data periodically
//     const interval = window.setInterval(loadSeats, 60_000);

//     return () => {
//       active = false;
//       window.clearInterval(interval);
//     };
//   }, []);

//   const zones = useMemo(() => {
//     return ["ALL", ...Array.from(new Set(seats.map((item) => item.zone)))];
//   }, [seats]);

//   const filteredSeats = useMemo(() => {
//     return seats
//       .filter((item) => {
//         const matchesZone =
//           selectedZone === "ALL" || item.zone === selectedZone;

//         const keyword = search.toLowerCase().replace(/^@/, "");

//         const matchesSearch =
//           item.name.toLowerCase().includes(keyword) ||
//           item.twitter.toLowerCase().includes(keyword) ||
//           item.seat.toLowerCase().includes(keyword);

//         return matchesZone && matchesSearch;
//       })
//       .sort((a, b) => {
//         const zoneCompare = a.zone.localeCompare(b.zone);
//         if (zoneCompare !== 0) return zoneCompare;

//         return a.seat.localeCompare(b.seat, undefined, {
//           numeric: true,
//         });
//       });
//   }, [seats, search, selectedZone]);

//   if (loading) {
//     return (
//       <div className="py-20 text-center text-stone-500">
//         Loading ARMY community...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div role="alert" className="py-20 text-center text-red-700">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <section className="space-y-6">
//       <div className="flex flex-wrap items-center justify-between gap-3">
//         <p className="text-sm text-stone-500">
//           {filteredSeats.length} ARMY members
//         </p>

//         <Link
//           href="/Arirang/submit"
//           className="rounded-xl bg-[#C92732] px-5 py-3 text-sm font-semibold text-white hover:bg-[#a91f29]"
//         >
//           + Fill Your Seat
//         </Link>
//       </div>

//       <input
//         type="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search name, Twitter or seat..."
//         className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-red-700"
//       />

//       <div className="flex flex-wrap gap-2">
//         {zones.map((zone) => (
//           <button
//             key={zone}
//             type="button"
//             onClick={() => setSelectedZone(zone)}
//             className={`rounded-full px-4 py-2 text-sm transition ${
//               selectedZone === zone
//                 ? "bg-[#C92732] text-white"
//                 : "bg-stone-100 text-stone-700 hover:bg-stone-200"
//             }`}
//           >
//             {zone}
//           </button>
//         ))}
//       </div>

//       {filteredSeats.length === 0 ? (
//         <div className="rounded-2xl bg-stone-100 py-16 text-center text-stone-500">
//           No ARMY members found.
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//           {filteredSeats.map((item) => (
//             <article
//               key={item.id}
//               className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
//             >
//               <div className="relative aspect-square bg-stone-100">
//                 <Image
//                   src={item.imageUrl}
//                   alt={`${item.name}'s profile`}
//                   fill
//                   unoptimized
//                   sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                   className="object-cover"
//                 />
//               </div>

//               <div className="space-y-2 p-3">
//                 <h3 className="truncate font-semibold text-[#191919]">
//                   {item.name}
//                 </h3>

//                 <a
//                   href={`https://x.com/${item.twitter.replace(/^@/, "")}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block truncate text-sm text-[#C92732] hover:underline"
//                 >
//                   @{item.twitter.replace(/^@/, "")}
//                 </a>

//                 <div className="flex items-center justify-between gap-2 text-xs text-stone-500">
//                   <span>{item.zone}</span>
//                   <span className="truncate">Seat {item.seat}</span>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
