export interface Video {
  kind: string;
  etag: string;
  items?: (ItemsEntity)[] | null;
  pageInfo: PageInfo;
}
export interface ItemsEntity {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}
export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags?: (string)[] | null;
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
}
export interface Thumbnails {
  default: DefaultOrMediumOrHighOrStandardOrMaxres;
  medium: DefaultOrMediumOrHighOrStandardOrMaxres;
  high: DefaultOrMediumOrHighOrStandardOrMaxres;
  standard: DefaultOrMediumOrHighOrStandardOrMaxres;
  maxres: DefaultOrMediumOrHighOrStandardOrMaxres;
}
export interface DefaultOrMediumOrHighOrStandardOrMaxres {
  url: string;
  width: number;
  height: number;
}
export interface Localized {
  title: string;
  description: string;
}
export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: ContentRating;
  projection: string;
}
export interface ContentRating {
}
export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}
export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
