export interface Creator {
  id?: number,
  firstName?: string,
  middleName?: string,
  lastName?: string,
  suffix?: string,
  fullName?: string,
  urls?: [{
    type: string,
    url: string
  }],
  modified?: string,
  thumbnail?: {
    path?: string,
    extension?: string
  },
  comics?: any[],
  events?: any[],
  stories?: any[],
  series?: any[]
}
