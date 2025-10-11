import { baseUrl } from "../../assets/baseUrl";

export const getTrackList = async (
  page = 1,
  limit = 10
): Promise<MusicListResponse> => {
  const res = await fetch(`${baseUrl}api/tracks?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Error during download tracks.");
  return res.json();
};

export type MusicListResponse = {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  tracks: MusicItem[];
};

export type MusicItem = {
  _id: any;
  title: string;
  artist: string;
  description: string;
  price: number;
  audioUrl: string;
  type: string[];
  tags: string;
};
