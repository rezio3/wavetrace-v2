export const queryKeys = {
  musicPage: {
    musicList: (page: number) => ["music", "list", page],
    musicItem: (id: string) => ["music", "item", id],
  },
};
