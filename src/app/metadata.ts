import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "TaveStack — The Business Operating System Powered by AI",
    template: "%s · TaveStack",
  },
  description:
    "TaveStack is the world's first AI-native Business OS. Deploy ERP, productivity, finance, HR, and CRM modules. TAVE, your AI Agent, uses them all — so you can run your entire organization from one place.",
  metadataBase: new URL("https://tavestack.com"),
  openGraph: {
    title: "TaveStack — The Business Operating System Powered by AI",
    description:
      "One platform. Every business function. An AI Agent that runs it all.",
    type: "website",
    siteName: "TaveStack",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaveStack — The Business Operating System Powered by AI",
    description:
      "Deploy ERP, finance, HR, CRM and more. TAVE executes across every module.",
  },
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon.ico',
    apple: '/icons/TaveStack-Icon-Mark-_White-no-BG_.svg',
  }
};
