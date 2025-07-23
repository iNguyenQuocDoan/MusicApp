import { ref, onValue } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";

interface SingerData {
    [key: string]: {
        title: string;
        description?: string;
        image?: string;
    };
}

// Utility function để lấy tên ca sĩ từ singerId
export const getSingerNames = (singerId: string | string[], singerData: SingerData): string => {
    if (!singerData) return "Chưa có thông tin";

    if (Array.isArray(singerId)) {
        // Nếu có nhiều ca sĩ
        const names = singerId
            .map((id) => singerData[id]?.title || "")
            .filter((name) => name !== "");
        return names.length > 0 ? names.join(", ") : "Chưa có thông tin";
    } else if (singerId) {
        // Nếu chỉ có một ca sĩ
        return singerData[singerId]?.title || "Chưa có thông tin";
    }

    return "Chưa có thông tin";
};

// Hook để lấy dữ liệu songs với tên ca sĩ đầy đủ
export const useSongsWithSingers = () => {
    return new Promise((resolve) => {
        const songsRef = ref(dbFirebase, "songs");
        const singersRef = ref(dbFirebase, "singers");

        onValue(singersRef, (singerSnapshot) => {
            const singerData = singerSnapshot.val();

            onValue(songsRef, (songSnapshot) => {
                const songData = songSnapshot.val();

                if (songData && singerData) {
                    const songsArray = Object.keys(songData).map((key) => ({
                        id: key,
                        image: songData[key].image,
                        title: songData[key].title,
                        singer: getSingerNames(songData[key].singerId, singerData),
                        listen: songData[key].listen,
                        singerId: songData[key].singerId,
                        categoryId: songData[key].categoryId,
                        audio: songData[key].audio,
                        lyric: songData[key].lyric || songData[key].Lyric, // Handle both "lyric" and "Lyric"
                        time: "4:32",
                    }));

                    resolve(songsArray);
                }
            });
        });
    });
};
