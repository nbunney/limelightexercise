export interface album {
  userId: number;
  id: number;
  title: string;
}

export interface photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
