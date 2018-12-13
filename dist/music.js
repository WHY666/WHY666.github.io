const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    mini: true,
    audio: [
    {
        name: "小宇",
        artist: '张震岳',
        url: 'https://m10.music.126.net/20181213100606/a1bec31e4af93f4c7967bc520051479a/ymusic/e769/507d/71d5/8989c9e07a9e6e116fd67992709d71d2.mp3',
        cover: 'https://p1.music.126.net/N61oLy0iLfEkZTHD2j87iA==/18693896697392706.jpg',
    },  
    {
        name: "就让这首歌",
        artist: '张震岳',
        url: 'https://m10.music.126.net/20181213100906/28a0ab5b7abd455927eb186e62300e86/ymusic/8f8f/85f9/9d84/04a85f2149da1c35f3779eb1319eaf6e.mp3',
        cover: 'https://p1.music.126.net/N61oLy0iLfEkZTHD2j87iA==/18693896697392706.jpg',
    },      
    {
        name: "思念是一种病",
        artist: '张震岳',
        url: 'https://m10.music.126.net/20181213101447/fcb837c7f71d349883aeba11cfd6df6c/ymusic/5d3c/5b8c/274d/0df0511f8af71f9e68d1756e63aec28f.mp3',
        cover: 'https://p1.music.126.net/N61oLy0iLfEkZTHD2j87iA==/18693896697392706.jpg',
    },      
    {
        name: "遇见",
        artist: '孙燕姿',
        url: 'http://fs.w.kugou.com/201812130945/a55bc0f9ecc9f2a26fb3501044d64296/G005/M01/04/1D/RQ0DAFS4My-ASVN1ADN0lUcD7Zw018.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150714/20150714164620754955.jpg',
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
        name: "笔记",
        artist: '周笔畅',
        url: 'https://m10.music.126.net/20181213095142/83ccf19f10af8cf9cb594d05f9665be8/ymusic/65b6/0252/9c18/5e3d19341e9fe01f89bef2815d01d498.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20180117/20180117181020178380.jpg',
    },            

    {
        name: "melody",
        artist: '陶喆',
        url: 'http://fs.w.kugou.com/201812130838/eef5f5e1a4da4bd62d759697d2474a61/G002/M03/0F/11/ooYBAFS96ZeAUlNNAEG2uF_9GgA622.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20150718/20150718174252663587.jpg',
    },       
   {
        name: "真的爱你",
        artist: 'Beyond',
        url: '/dist/songs/真的爱你.mp3',
        cover: 'http://fs.w.kugou.com/201812130835/bbe83547374f190b67cf991a6d790ebb/G135/M03/10/0F/J4cBAFuGdRiAT-jCAEOVZVhv24s616.mp3',
    },       
   {
        name: "画沙",
        artist: '周杰伦',
        url: 'http://fs.w.kugou.com/201812130959/22087899491b561c740a26624a177bee/G086/M04/11/01/lg0DAFjKZIiABIqzAELnTzPJY5M057.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160623/20160623233610830051.jpg',
    },          
    {
        name: "我们的歌",
        artist: '王力宏',
        url: 'http://fs.w.kugou.com/201812131000/e741e57e52a1b585b6594026f4110712/G079/M00/0B/05/74YBAFgurASASmJ0ADyGc5wadj8548.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907184638429200.jpg',
    },       
    {
        name: "岁月神偷",
        artist: '金玟岐',
        url: 'http://fs.w.kugou.com/201812130859/553117eeb7bde17aa481f8b8824fcce9/G011/M08/01/08/q4YBAFULduiAb4AlAChLgMDVxOg551.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907235233141820.jpg',
    }, 
    {
        name: '单恋高校',
        artist: '陈冠希',
        url: 'http://fs.w.kugou.com/201812130936/010dc17f0a0bc954dd70aed915e67ee7/G010/M02/0E/15/Sg0DAFURoHOAQHzIAC7v11tXsLQ556.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907173524224717.jpg',
    },           
    {
        name: "China-X",
        artist: '徐梦圆',
        url: 'http://fs.w.kugou.com/201812130913/ace3b25e9de00aeeda6ace08633ad257/G056/M04/1D/10/2IYBAFakY0iAB4D0ADc4AfWXG_g876.mp3',
        cover: 'https://imgessl.kugou.com/stdmusic/20160812/20160812190229390849.jpg',
    },    
   {
        name: "平凡之路--木吉他版",
        artist: '朴树',
        url: 'https://m10.music.126.net/20181213102827/609b92636247ea88e9b444dee141414c/ymusic/4413/1878/ada3/d671b4e72d8a26199c9883463639ef13.mp3',
        cover: 'https://p2.music.126.net/etEzXkRd2FXo7IqrlOPC4Q==/16601526067929229.jpg?param=34y34',
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
        url: 'https://m10.music.126.net/20181213103250/17e856d29fe3e74c0be190e837f23b18/ymusic/9fb8/70be/ee7b/5bb795225868a7d7b7274cb9de7bdf5e.mp3',
        cover: 'https://p1.music.126.net/nioPMqyc0opzEavs67vdYw==/19128203788658830.jpg',
    },     
    {
        name: '她说',
        artist: '林俊杰',
        url: '/dist/songs/她说.mp3',
        cover: 'http://fs.w.kugou.com/201812130920/968d8e78bcb950190b4a5a3f005fdd00/G005/M02/05/11/pYYBAFT9sqOAavIhAE3gCox55oQ360.mp3',
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