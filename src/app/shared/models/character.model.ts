export interface Character {
  id?: number,
  name?: string,
  description?: string,
  modified?: string,
  resourceURI?: string,
  urls?: [{
    type: string,
    url: string
  }],
  thumbnail?: {
    path?: string,
    extension?: string
  },
  comics?: any[],
  stories?: any[],
  events?: any[],
  series?: any[]
}
