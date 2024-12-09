import Script from 'next/script'

const gaId = process.env.NEXT_PUBLIC_GA_ID || ''

export const GoogleAnalytics = () => gaId ? (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?
      id=${gaId}`}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}');
        `,
      }}
    ></Script>
  </>
) : null
