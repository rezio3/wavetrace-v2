export const getTrackList = async () => {
  const res = await fetch("http://localhost:5000/api/tracks");
  if (!res.ok) throw new Error("Error during download tracks.");
  return res.json();
};
