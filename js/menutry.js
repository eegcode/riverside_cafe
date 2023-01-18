

const loadPagination = (finalDataArray) => {
   $(function() {
      (function() {
      var container = $('#menuPaginationOptionsContainer');
      if (!container.length) return;
      
      var sources = finalDataArray
      var options = {
      dataSource: sources,
      pageSize: 20,
      showGoInput: true,
      showGoButton: true,
      showSizeChanger: true,
      formatGoInput: 'Go to <%= input %> page',
      formatNavigator: '<%= rangeStart %>-<%= rangeEnd %> of <%= totalNumber %> items',
      callback: function (response, pagination) {
      // window.console && console.log(response, pagination);
      var dataHtml = '';
        $.each(response, function (index, item) {
      // window.console && console.log("my", index,item);


        const {id, img, name, dsc, price, rate, country} = item;
        dataHtml += `<article class="item">
            <!-- <div class="add-to-cart" data-itemTitle="">
              <span class="incart">2</span>
              <span class="add">
                <i class="fas fa-cart-plus"></i>
              </span>
            </div> -->
            <div class="img-container">
              <img width="300" height="300" src="${img}" alt="${name} photo"/>
            </div>
            <div class="info">
              <header>
                <span class="title">${name}</span>
                
              </header>
              <div class="description">
                ${dsc}
              </div>
              <div class="bottom">
                  <p class="price">$${price}</p>
                  <div class="cart">
                    <span class="add-to-cart"><i class="fas fa-cart-plus"></i></span>
                    <div class="controller">
                      <p class="plus">+</p>
                      <p class="item-count" >0</p>
                      <p class="minus">-</p>
                    </div>
                  </div>
                </div>
            </div>
          </article>`;
        });
      $("#menuItemContainer").html(dataHtml);
      }
      };

      container.addHook('beforeInit', function () {
      // window.console && console.log('beforeInit...');
      });
      container.pagination(options);
      container.addHook('beforePageOnClick', function () {
      // window.console && console.log('beforePageOnClick...');
      });
      
      })();
      })
}








