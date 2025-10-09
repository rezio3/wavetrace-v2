export const getTrackList = async (page = 1, limit = 10) => {
  const res = await fetch(
    `http://localhost:5000/api/tracks?page=${page}&limit=${limit}`
  );
  if (!res.ok) throw new Error("Error during download tracks.");
  return res.json();
};
