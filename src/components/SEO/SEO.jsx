import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

// SEO Configuration based on recommended method B:
// primary keyword, secondary keyword (or branding phrase/status quo)
const defaultSEO = {
  siteName: "Yuhan Liu Portfolio",
  siteUrl: "https://yliu-99.github.io/portfolio-first-version",
  twitterHandle: "@yuhan_liu_",
  defaultTitle: "Yuhan Liu Portfolio | Vancouver Multidisciplinary Designer",
  defaultDescription: "Vancouver-based graphic designer and multimedia artist Yuhan Liu showcases creative projects in branding, web design, and visual storytelling. BCIT New Media graduate specializing in innovative design solutions.",
  defaultKeywords: "graphic design vancouver, yuhan liu, bcit new media, portfolio, multimedia artist, vancouver designer, branding design, web design, visual storytelling, creative portfolio, new media design, digital design vancouver"
};

function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  jsonLd,
  noIndex = false,
  children
}) {
  // Construct full title using recommended format
  const fullTitle = title ? `${title} | ${defaultSEO.siteName}` : defaultSEO.defaultTitle;
  
  // Combine default and custom keywords
  const allKeywords = keywords 
    ? `${defaultSEO.defaultKeywords}, ${keywords}`
    : defaultSEO.defaultKeywords;
  
  // Use custom description or default
  const metaDescription = description || defaultSEO.defaultDescription;
  
  // Construct canonical URL
  const canonical = canonicalUrl || defaultSEO.siteUrl;
  
  // Default OG image
  const ogImageUrl = ogImage || `${defaultSEO.siteUrl}/src/assets/logo/yuhan-liu-profile-pic-red-blue.png`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:creator" content={defaultSEO.twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Yuhan Liu" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FF0000" />
      
      {/* Language and Location */}
      <meta name="language" content="EN" />
      <meta name="geo.region" content="CA-BC" />
      <meta name="geo.placename" content="Vancouver" />
      <meta name="geo.position" content="49.2827;-123.1207" />
      <meta name="ICBM" content="49.2827, -123.1207" />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
      
      {/* Additional custom head elements */}
      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  jsonLd: PropTypes.object,
  noIndex: PropTypes.bool,
  children: PropTypes.node
};

export default SEO;
export { defaultSEO };
