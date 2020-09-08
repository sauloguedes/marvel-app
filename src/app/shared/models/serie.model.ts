export interface Serie {
  id?: number,
  title?: string,
  description?: string,
  resourceURI?: string,
  urls?: [{
    type: string,
    url: string
  }],
  startYear?: number,
  endYear?: number,
  rating?: string,
  modified?: string,
  thumbnail?: {
    path?: string,
    extension?: string
  },
  comics?: any[],
  stories: any[],
  events: any[],
  characters: any[],
  creators: any[],
  next?: {
    resourceURI?: string,
    name?: string
  },
  previous?: {
    resourceURI?: string,
    name?: string
  }
}
