import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './shop.css'

const Shop = (props) => {
  return (
    <div className="shop-container">
      <Helmet>
        <title>Shop Mushroom Tinctures - Merkaba Mushrooms</title>
        <meta
          property="og:title"
          content="Shop Mushroom Tinctures - Merkaba Mushrooms"
        />
      </Helmet>
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
  )
}

export default Shop
