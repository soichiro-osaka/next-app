import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Nav from './Nav';
import AboutMe from './AboutMe'
import Works from './Works'

export default function Home() {
  return (
    <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Cherry+Swash:700" rel="stylesheet"/>
    </Head>
    <Header/>
    <Nav/>
    <AboutMe/>
    <Works/>
    <style jsx>{`
      a > h2 {
        color: lightgreen;
      }
    `}
    </style>
    </>
  )
}
