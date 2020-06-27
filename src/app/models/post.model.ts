export interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
  showComments?:boolean;
  comments?: comment[];
  commentCount?: number;
}

export interface comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
