const purchaseIconContainer = document.querySelector('.purchase-icons')
window.addEventListener('DOMContentLoaded', function () {
  // 创作中心
  let purchaseIconContent = displayPurchaseIcons(purchaseIcon)
  purchaseIconContainer.innerHTML = purchaseIconContent
})

// =============== function===============
// 自动生成grid卡片
function displayPurchaseIcons(arrayName) {
  let newName = arrayName.map(function (item) {
    return `      <div class="purchase-icon-card">
        <i class="fa-solid fa-${item.icon}"></i>
        <span class="purchase-icon-type">${item.text}</span>
      </div>`
  })
  return (newName = newName.join(''))
}
