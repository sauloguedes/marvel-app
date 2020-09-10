export interface Events {
  id?: number,
  title?: string,
  description?: string,
  resourceURI?: string,
  urls?: [{
    type: string,
    url: string
  }],
  start?: string,
  end?: string,
  modified?: string,
  thumbnail?: {
    path?: string,
    extension?: string
  },
  comics?: any[],
  stories: any[],
  characters: any[],
  creators: {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items: [{
      resourceURI?: string,
      name: string,
      role: string
    }]
  },
  next?: {
    resourceURI?: string,
    name?: string
  },
  previous?: {
    resourceURI?: string,
    name?: string
  }
}
