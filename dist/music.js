const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    mini: true,
    audio: [
    {
        name: "melody",
        artist: '陶喆',
        url: 'http://fs.w.kugou.com/201812130838/eef5f5e1a4da4bd62d759697d2474a61/G002/M03/0F/11/ooYBAFS96ZeAUlNNAEG2uF_9GgA622.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150718/20150718174252663587.jpg',
    },           
    {
        name: "小宇",
        artist: '张震岳',
        url: '/dist/songs/小宇.mp3',
        cover: 'https://p1.music.126.net/N61oLy0iLfEkZTHD2j87iA==/18693896697392706.jpg',
    },  
    {
        name: "我们的歌",
        artist: '王力宏',
        url: 'http://fs.w.kugou.com/201812131000/e741e57e52a1b585b6594026f4110712/G079/M00/0B/05/74YBAFgurASASmJ0ADyGc5wadj8548.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907184638429200.jpg',
    },           
    {
        name: "思念是一种病",
        artist: '张震岳',
        url: '/dist/songs/思念是一种病.mp3',
        cover: 'https://p1.music.126.net/N61oLy0iLfEkZTHD2j87iA==/18693896697392706.jpg',
    },      
    {
        name: "遇见",
        artist: '孙燕姿',
        url: 'http://fs.w.kugou.com/201812130945/a55bc0f9ecc9f2a26fb3501044d64296/G005/M01/04/1D/RQ0DAFS4My-ASVN1ADN0lUcD7Zw018.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150714/20150714164620754955.jpg',
    }, 
    {
        name: "就让这首歌",
        artist: '张震岳',
        url: '/dist/songs/就让这首歌.mp3',
        cover: 'https://p1.music.126.net/N61oLy0iLfEkZTHD2j87iA==/18693896697392706.jpg',
    },           
    {
        name: "大城小爱",
        artist: '王力宏',
        url: 'http://fs.w.kugou.com/201812130955/996c3f62efdfba2e9696e8e27ac59bea/G011/M00/08/11/Sw0DAFT6ifWAY-lfADeACu086D8133.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150228/20150228143443426128.jpg',
    },    
    {
        name: "夏天的风",
        artist: '温岚',
        url: 'http://fs.w.kugou.com/201812130915/94ef6dedbd952d6f9494a64499d7b2e3/G087/M06/19/0D/N5QEAFjORPiAC9UyADrHBtj9LxE878.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907221352180114.jpg',
    },  
    {
        name: "笔记本",
        artist: '陈慧琳',
        url: 'http://fs.w.kugou.com/201812130924/7a279f5eebd5151f987d3a3d550b9e7f/G007/M01/1F/05/Rw0DAFTALLeAEGSVAD3Beejm1QE355.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907201549230205.jpg',
    },      
    {
        name: '单恋高校',
        artist: '陈冠希',
        url: 'http://fs.w.kugou.com/201812130936/010dc17f0a0bc954dd70aed915e67ee7/G010/M02/0E/15/Sg0DAFURoHOAQHzIAC7v11tXsLQ556.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907173524224717.jpg',
    },             
    {
        name: "笔记",
        artist: '周笔畅',
        url: '/dist/songs/笔记.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20180117/20180117181020178380.jpg',
    },              
   {
        name: "画沙",
        artist: '周杰伦',
        url: 'http://fs.w.kugou.com/201812130959/22087899491b561c740a26624a177bee/G086/M04/11/01/lg0DAFjKZIiABIqzAELnTzPJY5M057.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160623/20160623233610830051.jpg',
    },            
    {
        name: "岁月神偷",
        artist: '金玟岐',
        url: 'http://fs.w.kugou.com/201812130859/553117eeb7bde17aa481f8b8824fcce9/G011/M08/01/08/q4YBAFULduiAb4AlAChLgMDVxOg551.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907235233141820.jpg',
    }, 
   {
        name: "真的爱你",
        artist: 'Beyond',
        url: 'http://fs.w.kugou.com/201812130835/bbe83547374f190b67cf991a6d790ebb/G135/M03/10/0F/J4cBAFuGdRiAT-jCAEOVZVhv24s616.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150715/20150715232800432202.jpg',
    },               
   {
        name: "平凡之路",
        artist: '朴树',
        url: '/dist/songs/平凡之路.mp3',
        cover: 'https://p2.music.126.net/etEzXkRd2FXo7IqrlOPC4Q==/16601526067929229.jpg',
    },  
    {
        name: "China-X",
        artist: '徐梦圆',
        url: 'http://fs.w.kugou.com/201812130913/ace3b25e9de00aeeda6ace08633ad257/G056/M04/1D/10/2IYBAFakY0iAB4D0ADc4AfWXG_g876.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160812/20160812190229390849.jpg',
    },           
    {
        name: '最美的期待',
        artist: '周笔畅',
        url: 'http://fs.w.kugou.com/201812130909/544a004e1e1b6ab5a9a545b6aabd24bb/G130/M00/1C/1B/IocBAFpfIXSAHoDTADN_rQdIIFc531.mp3',
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
        url: 'http://fs.w.kugou.com/201812130920/968d8e78bcb950190b4a5a3f005fdd00/G005/M02/05/11/pYYBAFT9sqOAavIhAE3gCox55oQ360.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20170424/20170424173313557089.jpg',
    },
   {
        name: "一生有你",
        artist: '水木年华',
        url: 'http://fs.w.kugou.com/201812130951/14628ecec4a44543f6eb7c6c299f1233/G007/M03/01/1D/Rw0DAFT7Y1-AYz70AD8DOX4f614439.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150716/20150716023319909457.jpg',
    },           
    {
        name: '海阔天空',
        artist: 'BEYOND',
        url: 'http://fs.w.kugou.com/201812130949/d4331e6863b3d1255fee88ffa9860d4d/G137/M06/08/17/yQ0DAFuGdOCABiECAE4jb57rgmY473.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150715/20150715232800432202.jpg',
    }         
    ]
});