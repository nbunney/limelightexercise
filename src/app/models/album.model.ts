export interface album {
  userId: number;
  id: number;
  title: string;
  photoCount?: number;
}

export interface photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
