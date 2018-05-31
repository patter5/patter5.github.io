module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Jeff Blog", // Site title.
  siteTitleAlt: "Jeff Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://patter5.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: true, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A blog about career change and trials of a non-trad CS grad.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  // disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Jeff Patterson", // Username to display in the author segment.
  userTwitter: "ciridium", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Portland, Oregon", // User location to display in the author segment.
  userAvatar: "/logos/sp.jpg", // User avatar to display in the author segment.
  userDescription:
    "Recent CS grad, language agnostic, pair/mob programming enthusiast. Software is made of people!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/patter5",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/ciridium",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jeff-patterson-42222177/",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Email",
      url: "mailto:jeff@tilikum.net",
      iconClassName: "fa fa-envelope"
    },
  ],
  copyright: "Copyright © 2018. Jeff Patterson" // Copyright string for the footer of the website and RSS feed.
};
