import NextHead from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

/**
 * Constants & Helpers
 */
export const WEBSITE_HOST_URL = 'https://chainlink-fullstack.demo.hack.bg/'

/**
 * Prop Types
 */
export interface MetaProps {
  description?: string
  image?: string
  title: string
  type?: string
}

/**
 * Component
 */
export const Head = ({
  customMeta,
}: {
  customMeta?: MetaProps
}): JSX.Element => {
  const router = useRouter()
  const meta: MetaProps = {
    title: 'Chainlink Demo App',
    description: 'Full stack starter project showcasing Chainlink products on Ethereum',
    image: `${WEBSITE_HOST_URL}/images/chainlink-logo.png`,
    type: 'website',
    ...customMeta,
  }

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Chainlink Demo App" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chainlink" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </NextHead>
  )
}
