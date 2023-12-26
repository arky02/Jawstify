export interface LoginProps {
  email: string;
  password: string;
}

export interface LoginItem {
  accessToken: string;
  user: {
    createdAt: string;
    email: string;
    id: number;
    nickname: string;
    profileImageUrl: string | null | null;
    updatedAt: string;
  };
}

export interface ChangePasswordProps {
  password: string;
  newPassword: string;
}

export interface CreateCardProps {
  assigneeUserId?: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate?: string;
  tags?: string[];
  imageUrl?: string | null | ArrayBuffer;
}

export interface CreateCardItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string | null;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export interface CheckCardListProps {
  size?: number;
  cursorId?: number;
  columnId: number;
}

export interface CheckCardListItem {
  cursorId: number | null;
  totalCount: number;
  cards: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    dueDate: string;
    assignee: {
      profileImageUrl: string | null;
      nickname: string;
      id: number;
    };
    imageUrl: string;
    teamId: string;
    columnId: number;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface CorrectCardProps {
  cardId: string;
  assigneeUserId?: number;
  title: string;
  description: string;
  dueDate?: string;
  tags?: string[];
  imageUrl?: string;
}

export interface CorrectCardItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string | null;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetCardDetailsProps {
  cardId: string;
}

export interface GetCardDetailsItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string | null;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export interface DeleteCardProps {
  cardId: string;
}

export interface CreateColumnProps {
  title: string;
  dashboardId: number;
}

export interface CreateColumnItem {
  id: number;
  title: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetColumnListProps {
  dashboardId: string;
}

export interface GetColumnListItem {
  result: 'SUCCESS';
  data: {
    id: number;
    title: string;
    teamId: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface CorrectColumnProps {
  columnId: string;
  title: string;
}

export interface DeleteColumnProps {
  columnId: string;
}

export interface UploadCardImageProps {
  columnId: string;
  image: string;
}

export interface UploadCardImageItem {
  image: string;
}

export interface CreateCommentProps {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}

export interface CreateCommentItem {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string | null;
    nickname: string;
    id: number;
  };
}

export interface GetCommentListProps {
  size?: number;
  cursorId?: number;
  cardId: number;
}

export interface GetCommentListItem {
  cursorId: number | null;
  comments: {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    cardId: number;
    author: {
      profileImageUrl: string | null;
      nickname: string;
      id: number;
    };
  }[];
}

export interface CorrectCommentProps {
  commentId: string;
  content: string;
}

export interface CorrectCommentItem {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string | null;
    nickname: string;
    id: number;
  };
}

export interface DeleteCommentProps {
  commentId: string;
}

export interface CreateDashboardProps {
  title: string;
  color: string;
}

export interface CreateDashboardItem {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

export interface GetDashboardListProps {
  navigationMethod: 'infiniteScroll' | 'pagination';
  cursorId?: number;
  page?: number;
  size?: number;
}

export interface GetDashboardListItem {
  cursorId: number | null;
  totalCount: number;
  dashboards: {
    id: number;
    title: string;
    color: string;
    createdAt: string;
    updatedAt: string;
    createdByMe: boolean;
    userId: number;
  }[];
}

export interface GetDashboardDetailedProps {
  dashboardId: string;
}

export interface GetDashboardDetailedItem {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

export interface CorrectDashboardProps {
  title: string;
  color: string;
  dashboardId: string;
}

export interface CorrectDashboardItem {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

export interface DeleteDashboardProps {
  dashboardId: string;
}

export interface InviteDashboardProps {
  dashboardId: string;
  email: string;
}

export interface InviteDashboardItem {
  id: number;
  inviterUserId: number;
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: 0;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoadInviteDashboardProps {
  dashboardId: string;
  page?: number;
  size?: number;
}

export interface LoadInviteDashboardItem {
  totalCount: number;
  invitations: {
    id: number;
    inviterUserId: number;
    teamId: string;
    dashboard: {
      title: string;
      id: number;
    };
    invitee: {
      nickname: string;
      email: string;
      id: number;
    };
    inviteAccepted: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface AbortInviteDashboardProps {
  dashboardId: string;
  invitationId: string;
}

export interface GetInvitationListProps {
  size?: number;
  cursorId?: number;
  title?: string;
}

export interface GetInvitationListItem {
  cursorId: number | null;
  invitations: {
    id: number;
    inviterUserId: number;
    teamId: string;
    dashboard: {
      title: string;
      id: number;
    };
    invitee: {
      nickname: string;
      email: string;
      id: number;
    };
    inviteAccepted: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface ResponseInvitationProps {
  invitationId: string;
  inviteAccepted?: boolean;
}

export interface ResponseInvitationItem {
  id: number;
  inviterUserId: number;
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetMembersInDashboardProps {
  page?: number;
  size?: number;
  dashboardId: number;
}

export interface GetMembersInDashboardItem {
  members: [
    {
      id: number;
      userId: number;
      email: string;
      nickname: string;
      profileImageUrl: string | null;
      createdAt: string;
      updatedAt: string;
      isOwner: boolean;
    },
  ];
  totalCount: number;
}

export interface DeleteMemberInDashboardProps {
  memberId: string;
}

export interface SignupProps {
  email: string;
  nickname: string;
  password: string;
}
export interface SignupItem {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface GetMyInfoItem {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CorrectMyInfoProps {
  nickname: string;
  profileImageUrl: string | null;
}

export interface CorrectMyInfoItem {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ProfileImgUploadProps {
  image: string;
}

export interface ProfileImgUploadItem {
  profileImageUrl: string | null;
}