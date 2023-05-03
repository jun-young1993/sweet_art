import rawSiteConfig from "../../site.config"
import {SiteConfig} from "./site-config"

if (!rawSiteConfig) {
	throw new Error(`Config error: invalid site.config.ts`)
}
const siteConfig: SiteConfig = {
	...rawSiteConfig
}
// const siteConfig:SiteConfig 
export function getSiteConfig(key : keyof SiteConfig, defaultValue?: any) {
	const value = siteConfig[key]

	if (value && value !== undefined) {
	  return value
	}
      
	if (defaultValue !== undefined) {
	  return defaultValue
	}

}