User-agent: *
Allow: /

# Block access to sensitive files
Disallow: /libs/
Disallow: /css/
Disallow: /js/
Disallow: /*.php$
Disallow: /404.php

# Allow access to main pages
Allow: /privacy
Allow: /terms
Allow: /order

Sitemap: <?php echo $url; ?>/sitemap.xml