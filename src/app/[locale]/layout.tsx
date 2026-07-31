import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ThemeProvider from "../providers/ThemeProvider";
import { Toaster } from "sonner";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  metadataBase: new URL("https://planola.app"),

  title: {
    default: "Planola — Планируйте день, достигайте целей",
    template: "%s | Planola",
  },

  description:
    "Planola — современная система планирования жизни. Управляйте задачами, привычками, финансами и целями в одном месте.",

  keywords: [
    "Planola",
    "планировщик",
    "ежедневник",
    "планирование",
    "задачи",
    "цели",
    "финансы",
    "продуктивность",
    "to-do",
    "task manager",
    "planner",
  ],

  authors: [
    {
      name: "Planola",
    },
  ],

  creator: "Planola",
  publisher: "Planola",

  applicationName: "Planola",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://planola.app",
  },

  openGraph: {
    type: "website",
    url: "https://planola.app",
    title: "Planola — Планируйте день, достигайте целей",
    description:
      "Планируйте день, отслеживайте привычки, управляйте финансами и достигайте целей с помощью Planola.",
    siteName: "Planola",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Planola",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Planola — Планируйте день, достигайте целей",
    description:
      "Ваш личный помощник для управления жизнью, задачами и финансами.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "productivity",
};

const geist = Geist({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} min-h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <ThemeProvider>{children}</ThemeProvider>
          {/* {children} */}
          <Toaster
            position="top-right"
            closeButton
            expand
            theme="dark"
            toastOptions={{
              classNames: {
                toast: "!bg-zinc-950 !text-white !border !border-yellow-500",
                title: "!text-white",
                description: "!text-zinc-300",
                success: "!bg-zinc-950 !border-l-4 !border-l-yellow-400",
                error: "!bg-zinc-950 !border-l-4 !border-l-red-500",
                warning: "!bg-zinc-950 !border-l-4 !border-l-yellow-500",
                info: "!bg-zinc-950 !border-l-4 !border-l-blue-500",
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
