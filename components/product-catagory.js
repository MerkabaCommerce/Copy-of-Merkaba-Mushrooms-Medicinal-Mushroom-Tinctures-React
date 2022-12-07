import React from 'react'

import DangerousHTML from 'dangerous-html/react'

const ProductCatagory = (props) => {
  return (
    <>
      <div className="product-catagory-container">
        <div className="product-catagory-container1">
          <section className="product-catagory-container2">
            <div>
              <DangerousHTML
                html={`<div id="my-categories-78742521"></div>
<div>
    <script data-cfasync="false" type="text/javascript"
        src="https://app.ecwid.com/script.js?78742521&data_platform=code&data_date=2022-11-21" charset="utf-8"></script>
    <script type="text/javascript">
        xCategoriesV2("id=my-categories-78742521"); 
    </script>
</div>`}
              ></DangerousHTML>
            </div>
          </section>
        </div>
      </div>
      <style jsx>
        {`
          .product-catagory-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .product-catagory-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .product-catagory-container2 {
            flex: 0 0 auto;
            width: 1200px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default ProductCatagory
