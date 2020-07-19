import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import getSiteMetadata from '@lib/get-site-metadata.js';

const SEO = ({ title, description, keywords, author }) => {
  const data = getSiteMetadata();

  const metaDescription = description || data.site.siteMetadata.description;
  const metaTitle = title || data.site.siteMetadata.title;
  const metaAuthor = author || data.site.siteMetadata.author;
  const metaKeywords = keywords || data.site.siteMetadata.keywords;

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
