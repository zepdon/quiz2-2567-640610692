// You can define interfaces for all React components here.
// Do not forget to export properly.

interface commentprops {
userImagePath:string;
username:string;
commentText:string;
likeNum:number;
replies:ReplyProps[];
}
export type { commentprops}

interface ReplyProps {
userImagePath:string;
username:string;
replyText:string;
likeNum:number;
}
export type { ReplyProps };
