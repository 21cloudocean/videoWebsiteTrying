window.onload = function () {
  // elements
  const video = document.querySelector('video')
  const videoPlayIcon = document.querySelector('.video-play-icon')
  const wholeBar = document.querySelector('.progress-bar-parent')
  const currentBar = document.querySelector('.progress-bar')
  const progressIcon = document.querySelector('.progress-icon')
  const videoPlayContainer = document.querySelector('.video-play-container')
  const videoTimeSpan = document.querySelector('.video-time-text')
  // 进度条所需时间+时间显示
  let timer = setInterval(function () {
    let timePlayed = video.currentTime
    const timeTotal = video.duration
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
  // 点击播放按钮后视频播放
  videoPlayIcon.addEventListener('click', function () {
    // videoPlayControl.classList.add('none')
    video.play()
  })
  // 点击视频后页面overlay消失
  video.addEventListener('click', function () {
    videoPlayContainer.classList.toggle('whole-screen')
  })
}
