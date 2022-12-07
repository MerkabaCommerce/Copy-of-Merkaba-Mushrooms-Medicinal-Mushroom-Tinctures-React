import React from 'react'

import DangerousHTML from 'dangerous-html/react'

import './product-catagory.css'

const ProductCatagory = (props) => {
  return (
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
  )
}

export default ProductCatagory
