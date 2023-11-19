//<Адрес страницы, номер страницы>

export type ScrollSchema = Record<string, number>

export interface UISchema {
  scroll: ScrollSchema;
}