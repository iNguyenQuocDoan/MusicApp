/* eslint-disable @typescript-eslint/no-explicit-any */
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";

export default function ButtonHeart2(props: any) {
  const { id } = props;
  const [isActive, setIsActive] = useState(false);

  // Kiểm tra trạng thái wishlist khi component mount
  useEffect(() => {
    const userId = authFirebase?.currentUser?.uid;
    if (id && userId) {
      const songRef = ref(dbFirebase, `/songs/${id}`);
      const unsubscribe = onValue(songRef, (snapshot) => {
        const song = snapshot.val();
        if (song && song.wishlist && song.wishlist[userId]) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });

      return () => unsubscribe();
    }
  }, [id]);

  const handleAddWishlist = () => {
    const userId = authFirebase?.currentUser?.uid;
    console.log("userId:", userId);
    console.log("songId:", id);

    if (id && userId) {
      const songRef = ref(dbFirebase, `/songs/${id}`);
      console.log("songRef path:", `/songs/${id}`);

      runTransaction(songRef, (song) => {
        console.log("Current song data:", song);

        if (song) {
          if (song.wishlist && song.wishlist[userId]) {
            console.log("Removing from wishlist");
            song.wishlist[userId] = null;
          } else {
            console.log("Adding to wishlist");
            if (!song.wishlist) {
              song.wishlist = {};
            }
            song.wishlist[userId] = true;
          }
          console.log("Updated song data:", song);
          return song;
        } else {
          console.log("Song not found!");
          return null;
        }
      })
        .then((result) => {
          console.log("Transaction completed:", result);
        })
        .catch((error) => {
          console.error("Transaction failed:", error);
        });
    } else {
      console.log("Missing userId or songId");
    }
  };
  return (
    <button
      onClick={handleAddWishlist}
      className={`w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] transition-all duration-200 ${
        isActive
          ? "bg-red-500 text-white border-red-500"
          : "bg-transparent text-white hover:bg-red-500/20"
      }`}
    >
      <MdFavorite />
    </button>
  );
}
