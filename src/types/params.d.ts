declare type LoginResult = {
  id: number
  avatar: string
  account: string
  nickname?: string
  mobile: string
  token: string
}

declare type LoginParams = {
  code: string
}
