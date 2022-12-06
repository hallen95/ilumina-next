import Head from 'next/head'
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import { Footer, Header } from '../components/index'
import NewsCard from "../components/NewsCard/NewsCard";
import newsContent from '../seeds/lang'

export default function Home() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { title, content } = newsContent[locale];

  return (
    <div className={styles.head}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className={styles.container}>
        <Head>
          <title>TV</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.breadcrumb}>
            <div
              style={{
                padding: "4px",
                marginRight: "4px",
              }}
            >
              <span>Current Language: </span>
              <span
                style={{
                  borderRadius: "3px",
                  backgroundColor: "blue",
                  color: "white",
                  padding: "2px",
                }}
              >
                {locale}
              </span>
            </div>
            <Link
              activeClassname={locale === "es-ES"}
              href={asPath}
              locale="es-ES"
            >
              es-ES
            </Link>

            <Link
              activeClassname={locale === "en-US"}
              href={asPath}
              locale="en-US"
            >
              en-US
            </Link>
          </div>

          <div className={styles.newscontainer}>
            <div className={styles.yournewscasts}>
              <h3>{title}</h3>
            </div>

            <div>
              {content.map((newsItem, i) => (
                <NewsCard key={i} news={newsItem} />
              ))}
            </div>
          </div>
        </main>
      </div>
      );
      <Footer />
    </div>
  )
}
