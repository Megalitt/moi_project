import { User } from "entities/User";


export enum ArticleType {
  CODE = "CODE",
  IMAGE = "IMAGE",
  TEXT = "TEXT"
};

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
};

export interface ArticleBlockBase {
  id: string;
  type: ArticleType;

};

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleType.CODE;
  code: string;
};

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleType.IMAGE;
  src: string;
  title: string;
};

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleType.TEXT;
  paragraphs: string[];
  title?: string;
};

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
  ALL = 'ALL',
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS"
};

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
};

export interface Article {
  id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
};