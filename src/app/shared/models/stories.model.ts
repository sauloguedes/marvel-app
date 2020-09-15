export interface Story {
  id?: number,
  title?: string,
  description?: string,
  resourceURI?: string,
  urls?: [{
    type: string,
    url: string
  }],
  type?: string,
  modified?: string,
  thumbnail?: {
    path?: string,
    extension?: string
  },
  comics?: any[],
  events: any[],
  characters: any[],
  creators: any[],
}
