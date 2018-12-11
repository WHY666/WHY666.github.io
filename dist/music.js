const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    mini: true,
    audio: [
      {
        name: "China-X",
        artist: '徐梦圆',
        url: 'http://fs.w.kugou.com/201812111107/3dfe2209e68bc3d3bd343350f110d2ed/G056/M04/1D/10/2IYBAFakY0iAB4D0ADc4AfWXG_g876.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160812/20160812190229390849.jpg',
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
      }
    ]
});