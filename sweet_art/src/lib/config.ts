import { getSiteConfig } from "./get-config-value"
import { SiteConfig } from "./site-config"
export const webTitle:SiteConfig['webTitle'] = getSiteConfig('webTitle','No Title')
export const webDescription:SiteConfig['webDescription'] = getSiteConfig('webDescription','No Web Description')
export const tabMenus:SiteConfig['tabMenus'] = getSiteConfig('tabMenus',[])