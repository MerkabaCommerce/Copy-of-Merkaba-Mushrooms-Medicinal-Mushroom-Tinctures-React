import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'

const Shop = (props) => {
  return (
    <>
      <div className="shop-container">
        <Head>
          <title>Shop Mushroom Tinctures - Merkaba Mushrooms</title>
          <meta
            property="og:title"
            content="Shop Mushroom Tinctures - Merkaba Mushrooms"
          />
        </Head>
        <Header></Header>
        <main className="shop-main">
          <div className="shop-container1">
            <div id="my-store-82953762" className="shop-ecwid">
              <DangerousHTML
                id="my-store-82953762"
                html={`<script
  data-cfasync="false"
  type="text/javascript"
  src="https://app.ecwid.com/script.js?82953762&data_platform=code&data_date=2022-12-07"
  charset="utf-8"
></script>
<script type="text/javascript">
  xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-82953762");
</script>`}
              ></DangerousHTML>
            </div>
          </div>
        </main>
        <FooterGray></FooterGray>
      </div>
      <style jsx>
        {`
          .shop-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .shop-main {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1100px;
            margin-top: var(--dl-space-space-sixunits);
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .shop-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 450px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .shop-ecwid {
            max-width: auto;
          }
          @media (max-width: 991px) {
            .shop-main {
              max-width: 900px;
            }
            .shop-ecwid {
              max-width: 991px;
            }
          }
          @media (max-width: 767px) {
            .shop-main {
              max-width: 700px;
            }
            .shop-ecwid {
              max-width: 776px;
            }
          }
          @media (max-width: 479px) {
            .shop-main {
              max-width: 450px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Shop
