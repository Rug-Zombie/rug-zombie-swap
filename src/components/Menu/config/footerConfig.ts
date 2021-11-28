import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: "About",
    items: [
      {
        label: "Powered by AutoShark",
        href: "https://docs.autoshark.finance/resources/swap-as-a-service-integration"
      }
    ]
  }
]
