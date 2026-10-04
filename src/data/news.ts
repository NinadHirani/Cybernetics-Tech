/**
 * News & offers shown on the home page and on /news.
 * Add a new entry at the top to publish it in both places.
 */
export type NewsItem = {
  id: number;
  image: string;
  title: string;
  date: { day: string; month: string };
};

export const newsData: NewsItem[] = [
  {
    id: 1,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Delight-ERP-GPBS-Expo-2024-1920x1920-22.jpg",
    title: "Delight ERP at GPBS Expo 2024",
    date: { day: "07", month: "Jan" }
  },
  {
    id: 2,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Expo_card-1-23.jpg",
    title: "Explore Our Exhibition Highlights",
    date: { day: "15", month: "Feb" }
  },
  {
    id: 3,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/RK-Website-Development-offer-1920x1920-24.png",
    title: "Exclusive Website Development Offers",
    date: { day: "22", month: "Mar" }
  },
  {
    id: 4,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/rkinfotech-7th-anniversary-25.png",
    title: "Celebrating Our 7th Anniversary",
    date: { day: "10", month: "Jun" }
  }
];
