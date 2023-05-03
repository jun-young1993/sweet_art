import { TabMenu } from "./types"

export interface SiteConfig {
	webTitle : string
	webDescription : string
	tabMenus : TabMenu[]
}
export const siteConfig = (config: SiteConfig) => {
	return config
}