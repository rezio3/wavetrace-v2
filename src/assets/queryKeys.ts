import type { Filters } from "../components/musicPage/musicPageCommon";

export const queryKeys = {
  musicPage: {
    musicList: (page: number, filters: Filters) => [
      "music",
      "list",
      page,
      filters,
    ],
    musicItem: (id: string) => ["music", "item", id],
  },
};
