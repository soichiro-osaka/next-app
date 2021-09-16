import Header from './Header'
import Main from './Main'
import Head from 'next/head'

export default function Weather() {
    
    return(
        <>
            <Head>
                <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet"/>
            </Head>
            <Header></Header> 
            <Main></Main>
        </>
    )
}