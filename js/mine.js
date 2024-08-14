// =============== 自动生成card ===============
const createcenterContainer = document.querySelector(
  '.createcenter-content-center'
)
const recommendContainer = document.querySelector('.recommend-content-center')
const serviceContainer = document.querySelector('.service-content-center')
window.addEventListener('DOMContentLoaded', function () {
  // 创作中心
  let createcenterContent = displayGridItems(createcenter)
  createcenterContainer.innerHTML = createcenterContent
  // 推荐服务
  let recommendContent = displayGridItems(recommend)
  recommendContainer.innerHTML = recommendContent
})
// 更多服务
let serviceContent = displayNoGridItems(service)
serviceContainer.innerHTML = serviceContent
// =============== function===============
// 自动生成grid卡片
function displayGridItems(arrayName) {
  let newName = arrayName.map(function (item) {
    return `            <div class="mine-optional-card optional-card grid">
              <i class="fa-solid fa-${item.icon}"></i>
              <span class="mine-optional-type optional-type">${item.text}</span>
            </div>`
  })
  return (newName = newName.join(''))
}
// 自动生成非grid卡片
function displayNoGridItems(arrayName) {
  let newName = arrayName.map(function (item) {
    return `            <div class="mine-optional-card optional-card flex">
              <div class="optional-card-left">
                <i class="fa-solid fa-${item.icon}"></i>
                <span class="service-optional-type nogrid-optional-type">${item.text}</span>
              </div>
              <div class="optional-card-right"><i class="fa-solid fa-chevron-right"></i></div>
            </div>`
  })
  return (newName = newName.join(''))
}
