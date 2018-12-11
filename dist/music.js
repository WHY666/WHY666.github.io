const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    mini: true,
    audio: [
    {
        name: "我们的歌",
        artist: '王力宏',
        url: '/dist/songs/我们的歌.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907184638429200.jpg',
      }, 
      {
        name: '单恋高校',
        artist: '陈冠希',
        url: '/dist/songs/单恋高校.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907173524224717.jpg',
      },           
      {
        name: "China-X",
        artist: '徐梦圆',
        url: '/dist/songs/China-X.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160812/20160812190229390849.jpg',
      },    
      {
        name: '9420',
        artist: '麦小兜',
        url: '/dist/songs/9420.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20171025/20171025101931506152.jpg',
      },
      {
        name: '最美的期待',
        artist: '周笔畅',
        url: '/dist/songs/最美的期待.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20180117/20180117181020178380.jpg',
      },
      {
        name: '北京东路的日子',
        artist: '刘千楚',
        url: '/dist/songs/北京东路的日子.mp3',
        cover: 'https://p1.music.126.net/nioPMqyc0opzEavs67vdYw==/19128203788658830.jpg',
      },     
      {
        name: '她说',
        artist: '林俊杰',
        url: '/dist/songs/她说.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20170424/20170424173313557089.jpg',
      },
      {
        name: '海阔天空',
        artist: 'BEYOND',
        url: '/dist/songs/海阔天空.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150715/20150715232800432202.jpg',
      }         
    ]
});