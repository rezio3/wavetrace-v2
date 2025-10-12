import { baseUrl } from "../../assets/baseUrl";

export const getTrackList = async (
  page = 1,
  limit = 10,
  filters = { searchFilter: "", typeFilter: "" }
): Promise<MusicListResponse> => {
  const query = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  const { searchFilter, typeFilter } = filters;

  if (searchFilter?.trim()) query.append("search", searchFilter);
  if (typeFilter?.trim()) query.append("filter", typeFilter);
  const res = await fetch(`${baseUrl}api/tracks?${query.toString()}`);
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

export type Filters = {
  searchFilter: string;
  typeFilter: string;
};
