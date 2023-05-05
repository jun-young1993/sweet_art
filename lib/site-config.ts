import * as types from './types'

export interface SiteConfig {
  webTitle : string
  webDescription : string
  tabMenus : types.TabMenu[]


  rootNotionPageId: string
  rootNotionSpaceId?: string

  name: string
  domain: string
  author: string
  description?: string
  language?: string

  twitter?: string
  github?: string
  linkedin?: string
  newsletter?: string
  youtube?: string
  zhihu?: string
  mastodon?: string;

  defaultPageIcon?: string | null
  defaultPageCover?: string | null
  defaultPageCoverPosition?: number | null

  isPreviewImageSupportEnabled?: boolean
  isTweetEmbedSupportEnabled?: boolean
  isRedisEnabled?: boolean
  isSearchEnabled?: boolean

  includeNotionIdInUrls?: boolean
  pageUrlOverrides?: types.PageUrlOverridesMap
  pageUrlAdditions?: types.PageUrlOverridesMap

  navigationStyle?: types.NavigationStyle
  navigationLinks?: Array<NavigationLink>
}

export interface NavigationLink {
  title: string
  pageId?: string
  url?: string
}

export const siteConfig = (config:
                               {
                                 webDescription: string; github: string; defaultPageIcon: null; navigationStyle: string; author: string; pageUrlOverrides: null; webTitle: string; description: string; linkedin: string; defaultPageCoverPosition: number; defaultPageCover: null; isPreviewImageSupportEnabled: boolean; twitter: string; tabMenus: ({ herf: string; name: string; type: string } | { herf: string; name: string; type: string })[]; isRedisEnabled: boolean; domain: string; name: string; rootNotionSpaceId: null; rootNotionPageId: string }): SiteConfig => {
  return config
}
