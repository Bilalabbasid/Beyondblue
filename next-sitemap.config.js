/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://beyondblue.com.pk",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [],
  additionalPaths: async (config) => {
    return [
      { loc: "/", changefreq: "daily", priority: 1.0 },
      { loc: "/about", changefreq: "monthly", priority: 0.8 },
      { loc: "/services", changefreq: "weekly", priority: 0.9 },
      { loc: "/countries", changefreq: "weekly", priority: 0.9 },
      { loc: "/ielts", changefreq: "weekly", priority: 0.8 },
      { loc: "/contact", changefreq: "monthly", priority: 0.8 },
      { loc: "/blog", changefreq: "daily", priority: 0.8 },
    ];
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [],
  },
};
