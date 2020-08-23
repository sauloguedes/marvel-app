export interface Comic {
  id?: number,
  digitalId?: number,
  title?: string,
  issueNumber?: number,
  variantDescription?: string,
  description?: string,
  modified?: Date,
  isbn?: string,
  upc?: string,
  diamondCode?: string,
  ean?: string,
  issn?: string,
  format?: string,
  pageCount?: number,
  textObjects: any[],
  resourceURI?: any[],
  urls?: any[],
  series?: any[],
  variants?: any[],
  collections?: any[],
  collectedIssues?: any[],
  dates?: any[],
  prices?: any[],
  thumbnail?: {
    path?: string,
    extension?: string
  },
  images?: [{
    path?: string,
    extension?: string
  }],
  creators?: any[],
  characters?: any[],
  stories?: any[],
  events?: any[]
}
