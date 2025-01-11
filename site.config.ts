import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e2f9063fb7c14c44a14547e05e061fc1',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Shashank Raut Desai',
  domain: 'shashankrdesai.com',
  author: 'Shashank Raut Desai',

  // open graph metadata (optional)
  description: 'Personal blog of Shashank Raut Desai, an ex-BCG consultant and leader in the e-pharmacy industry, building and leading the OTC vertical at Truemeds.',

  // social usernames (optional)
  twitter: 'shaxxanx',
  github: 'shashankrdesai',
  linkedin: 'shashank-raut-desai-a92800148',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default',
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'Projects',
       pageId: '42b197a00d7e45de8cdc9cc85e860a6d'
     },
     {
       title: 'Art',
       pageId: '519b28ed84b0441389e565af55916452'
     },
     {
       title: 'Blog',
       pageId: '10a42cf6dd404da18ce2285fe6ff44e2'
     }
   ]
})
