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

/** 个⼈信息 ⽤户详情信息 */
declare type ProfileDetail = {
  /** ⽤户ID */
  id: number
  /** 头像 */
  avatar: string
  /** 账户名 */
  account: string
  /** 昵称 */
  nickname?: string
  /** 性别 */
  gender?: number
  /** ⽣⽇ */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
  provinceCode?: string
  cityCode?: string
  countyCode: string
}
/** 性别 */
declare type Gender = 0 | 1

/** 个⼈信息 修改请求体参数 */
declare type ProfileParams = Pick<ProfileDetail, 'nickname' | 'gender' | 'birthday' | 'profession'> & {
  /** 省份编码 */
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}
