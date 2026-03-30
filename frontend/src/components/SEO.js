import { Helmet } from "react-helmet-async";

export const SEO = ({
  title = "Kaaftek - Premium Digital Solutions & Services",
  description = "Transform your business with expert web development, digital marketing, SEO, and branding services. 500+ successful projects delivered.",
  keywords = "digital agency, web development, digital marketing, SEO, social media marketing, branding, Google Ads, content marketing, email marketing",
  ogImage = "https://images.unsplash.com/photo-1746796451196-5225bdcf3955?w=1200&h=630&fit=crop",
  url = "https://agency-hub-167.preview.emergentagent.com",
  type = "website",
  author = "Kaaftek",
  canonical
}) => {
  const siteUrl = url;
  const canonicalUrl = canonical || url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Kaaftek" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEO;