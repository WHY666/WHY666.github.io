const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    mini: true,
    audio: [
    {
        name: "我们的歌",
        artist: '王力宏',
        url: 'http://fs.w.kugou.com/201812111337/dbce559a2f229792ae83f368f4766d7e/G079/M00/0B/05/74YBAFgurASASmJ0ADyGc5wadj8548.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907184638429200.jpg',
      },    
      {
        name: "China-X",
        artist: '徐梦圆',
        url: 'http://fs.w.kugou.com/201812111107/3dfe2209e68bc3d3bd343350f110d2ed/G056/M04/1D/10/2IYBAFakY0iAB4D0ADc4AfWXG_g876.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160812/20160812190229390849.jpg',
      },
      {
        name: '单恋高校',
        artist: '陈冠希',
        url: '/dist/songs/单恋高校.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907173524224717.jpg',
      },      
      {
        name: '9420',
        artist: '麦小兜',
        url: 'http://fs.w.kugou.com/201812111158/ab549a3ab5f0f300f635fd54d104fc0d/G110/M01/00/03/TpQEAFnvwjKAJo5UADf3TWhbS0I338.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20171025/20171025101931506152.jpg',
      },
      {
        name: '最美的期待',
        artist: '周笔畅',
        url: 'http://fs.w.kugou.com/201812111150/3b31790d949ad96aa8cfe9c76a73af39/G130/M00/1C/1B/IocBAFpfIXSAHoDTADN_rQdIIFc531.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20180117/20180117181020178380.jpg',
      },
      {
        name: '北京东路的日子',
        artist: '刘千楚',
        url: 'https://m10.music.126.net/20181211141552/3e56ec62f9954ca0abc2df1910e44b8b/ymusic/9fb8/70be/ee7b/5bb795225868a7d7b7274cb9de7bdf5e.mp3',
        cover: 'https://p1.music.126.net/nioPMqyc0opzEavs67vdYw==/19128203788658830.jpg',
      },     
      {
        name: '她说',
        artist: '林俊杰',
        url: 'http://fs.w.kugou.com/201812111311/befbe7086e2193986fb2782af2f444d6/G013/M02/1C/04/rYYBAFUK4k-AfHs8AE5NGHELcMw138.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20170424/20170424173313557089.jpg',
      },
      {
        name: '海阔天空',
        artist: 'BEYOND',
        url: 'http://fs.w.kugou.com/201812111355/8858f8b33736611a916e119cda4a2106/G137/M06/08/17/yQ0DAFuGdOCABiECAE4jb57rgmY473.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150715/20150715232800432202.jpg',
      }         
    ]
});