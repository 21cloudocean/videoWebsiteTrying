window.onload = function () {
  // elements
  const video = document.querySelector('video')
  const playPauseContainer = document.querySelector('.overlay-bottom-left')
  const videoPlayIcon = document.querySelector('.video-play-icon')
  const videoPauseIcon = document.querySelector('.video-pause-icon')
  const wholeBar = document.querySelector('.progress-bar-parent')
  const currentBar = document.querySelector('.progress-bar')
  const progressIcon = document.querySelector('.progress-icon')
  const videoPlayContainer = document.querySelector('.video-play-container')
  const videoTimeSpan = document.querySelector('.video-time-text')
  // 页面上的三连类按钮 elements
  const videoProfileIconsContainer = document.querySelector(
    '.video-profile-icons'
  )
  // 简介和评论区切换 elements
  const videoIntroBtn = document.querySelector('.nav-intro-btn')
  const videoCommentBtn = document.querySelector('.nav-comment-btn')
  const videoDetailContainer = document.querySelector('.video-detail-container')
  const videoCommentContainer = document.querySelector(
    '.video-comment-block-container'
  )
  // 页面上三连类按钮显示
  let videoProfileIconContent = displayVideoProfileIcons(videoProfileIcon)
  videoProfileIconsContainer.innerHTML = videoProfileIconContent
  // 简介和评论区切换
  videoIntroBtn.addEventListener('click', function (e) {
    // 切换btn样式
    if (!e.currentTarget.classList.contains('selected')) {
      e.currentTarget.classList.add('selected')
    }
    videoCommentBtn.classList.remove('selected')
    // 切换内容
    videoDetailContainer.classList.remove('none')
    if (videoCommentContainer.classList.contains('none')) {
      return
    }
    videoCommentContainer.classList.add('none')
  })
  videoCommentBtn.addEventListener('click', function (e) {
    // 切换btn样式
    if (!e.currentTarget.classList.contains('selected')) {
      e.currentTarget.classList.add('selected')
    }
    videoIntroBtn.classList.remove('selected')
    // 切换内容
    videoCommentContainer.classList.remove('none')
    if (videoDetailContainer.classList.contains('none')) {
      return
    }
    videoDetailContainer.classList.add('none')
  })
  // 进度条所需时间+时间显示
  let timer = setInterval(function () {
    let timePlayed = video.currentTime
    const timeTotal = video.duration
    // 播放按钮根据播放状态调整
    if (video.paused) {
      if (!playPauseContainer.classList.contains('paused')) {
        playPauseContainer.classList.add('paused')
      }
    } else {
      if (playPauseContainer.classList.contains('paused')) {
        playPauseContainer.classList.remove('paused')
      }
    }
    // 播放按钮播完后改变
    // if (timePlayed === timeTotal) {
    //   if (!playPauseContainer.classList.contains('paused')) {
    //     playPauseContainer.classList.add('paused')
    //   }
    // }
    // 当前时间
    let nowMinute =
      parseInt(timePlayed / 60) > 10
        ? `${parseInt(timePlayed / 60)}:`
        : `0${parseInt(timePlayed / 60)}:`
    let nowSecond =
      parseInt(timePlayed) > 10
        ? `${parseInt(timePlayed)}/`
        : `0${parseInt(timePlayed)}/`
    // 总时间
    let totalMinute =
      parseInt(timeTotal / 60) > 10
        ? `${parseInt(timeTotal / 60)}:`
        : `0${parseInt(timeTotal / 60)}:`
    let totalSecond =
      parseInt(timeTotal) > 10
        ? `${parseInt(timeTotal)}`
        : `0${parseInt(timeTotal)}`
    // 把时间放到HTML上
    videoTimeSpan.innerHTML = `${nowMinute}${nowSecond}${totalMinute}${totalSecond}`
    // console.log(nowSecond, totalSecond)
    // 进度条
    let progress = (timePlayed / timeTotal) * 100 + '%'
    currentBar.style.width = progress
    progressIcon.style.left = progress
  }, 100)
  // 进度条拖动进度
  wholeBar.addEventListener('click', function (e) {
    currentBar.style.width = e.offsetX + 'px'
    progressIcon.style.left = e.offsetX + 'px'
    video.currentTime = (e.offsetX / wholeBar.clientWidth) * video.duration
    video.play()
  })
  //
  playPauseContainer.addEventListener('click', function () {
    this.classList.toggle('paused')
  })

  // 点击播放按钮后视频播放
  videoPlayIcon.addEventListener('click', function () {
    // videoPlayControl.classList.add('none')
    video.play()
  })
  // 点击播放按钮后视频播放
  videoPauseIcon.addEventListener('click', function () {
    // videoPlayControl.classList.add('none')
    video.pause()
  })
  // 点击视频后页面overlay消失
  video.addEventListener('click', function () {
    videoPlayContainer.classList.toggle('whole-screen')
  })
}

// =============== function===============
// 自动生成grid卡片
function displayVideoProfileIcons(arrayName) {
  let newName = arrayName.map(function (item) {
    return `      <div class="video-profile-icon-card">
        <i class="fa-solid fa-${item.icon}"></i>
        <span class="video-profile-icon-type">${item.text}</span>
      </div>`
  })
  return (newName = newName.join(''))
}
