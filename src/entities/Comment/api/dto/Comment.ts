
export interface Comment{
  kind: string
  etag: string
  nextPageToken: string
  pageInfo: PageInfo
  items: Item[]
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface Item {
  kind: string
  etag: string
  id: string
  snippet: Snippet
}

export interface Snippet {
  channelId: string
  videoId: string
  topLevelComment: TopLevelComment
  canReply: boolean
  totalReplyCount: number
  isPublic: boolean
}

export interface TopLevelComment {
  kind: string
  etag: string
  id: string
  snippet: CommentData
}

export interface CommentData {
  channelId: string
  videoId: string
  textDisplay: string
  textOriginal: string
  authorDisplayName: string
  authorProfileImageUrl: string
  authorChannelUrl: string
  authorChannelId: AuthorChannelId
  canRate: boolean
  viewerRating: string
  likeCount: number
  publishedAt: string
  updatedAt: string
}

export interface AuthorChannelId {
  value: string
}