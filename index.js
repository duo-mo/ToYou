/**
 * 打字效果 byaei
 */
function typewrite() {
  let str = "<我愿意为你，倾尽我全部<因为我喜欢你，因为......我想要和你一起很久很久<因为当代码不止是代码的时候，它就有了新的意义。<就是你<王喻<";//利用<作为换行符 -作为空格
  let strp = "";
  let i = 0;
  function print1() {
    if (str[i] == '<') {
      document.getElementById("box1").innerHTML = strp + "<br><br>" + '|';
      strp += "<br><br>";
    }
    else
      if (str[i] == '-') {
        document.getElementById("box1").innerHTML = strp + '&nbsp&nbsp&nbsp';
        strp += "&nbsp&nbsp&nbsp";
      }
      else {
        strp += str[i];
        document.getElementById("box1").innerHTML = strp + '|';
      }
    i++;
  }
  function print2() {
    setTimeout(() => { document.getElementById("box1").innerHTML = strp + '&nbsp'; }, 100);
    setTimeout(() => { document.getElementById("box1").innerHTML = strp + '|'; }, 630);
  }
  let printid = setInterval(() => {
    print1();
    if (i == str.length)
      clearInterval(printid);
  }, 90);
  setTimeout(() => {
    id = setInterval(print2, 1060);//注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
  }, (str.length - 1) * 90);
  //0.53秒闪一次
}




let clickb = false;//判断播放按钮是否已经按过了，如果已经按过了才可以执行键盘事件

function funclick() {
  let x = document.createElement("audio");
  x.setAttribute("src", "./video/55.mp3");
  x.setAttribute("autoplay", "autoplay");
  let yinyan = document.getElementById("yinyan");
  yinyan.setAttribute("style", "opacity:0");
  setTimeout(function () {
    document.getElementById("fronclick").style.zIndex = -300;
    document.getElementById("box").style.opacity = 1;
  }, 1500);//让播放按钮消失了
  //yinyan.style.opacity=0;
  clickb = true;
}




let k = {
  a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25,
  A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25
}
let a = [
  { name: "A", yin: 8, str: "<br><br><br><br><br>三青高岭峙东西<br><br>年年含笑舞青春 <br><br>了了知之亦何益" },
  { name: "B", yin: 2, str: `<br><br><br><br>一任侧耳与心倾 <br><br>路尽天涯始却回<br><br>走上红裀初趁拍 <br><br>来时一夜因风雨<br><br>` },
  { name: "C", yin: 3, str: "<br><br><br><br>有时风卷天雨晴<br><br>过尽南塘树更深<br><br>争如特地嫁薰风<br><br>论功何止及留侯" },
  { name: "D", yin: 4, str: "<br><br><br><br>有时风卷天雨晴<br><br>过尽南塘树更深<br><br>感君岩下闲招隐<br><br>动影袅窕冲融间" },
  { name: "E", yin: 5, str: "<br><br><br><br><br><br>去秋共数登高会<br><br>过夏首而西浮兮" },
  { name: "F", yin: 6, str: "<br><br><br><br>很石犹存事可寻<br><br>多情相约五湖游<br><br>地色初分月色红<br><br>方值汉朝更化新" },
  { name: "G", yin: 7, str: "<br><br><br><br>到恁时节风流好<br><br>处处风烟少旧知<br><br>都敛尽山林清致<br></br>是情事轻如云雨<br><br>回眸一笑百媚生<br><br>忆过泸戎摘荔枝" },
  { name: "H", yin: 5, str: "<br><br><br><br>希夷妙处集真仙<br></br>望星河低处长安<br><br>以色事人能几好<br><br>后贤那使久闲居" },
  { name: "I", yin: 3, str: "<br><br>回首龙门人得意<br><br>忆得春江千里涛<br><br>遍浇溉黄芽雪肌<br><br>布衣空染洛阳尘<br><br>全无暑气似秋间<br><br>球妆七宝玲珑焕" },
  { name: "J", yin: 10, str: "<br><br><br><br>未负溪云一片闲<br><br>来去惊人莺语滑<br><br>很石犹存事可寻<br><br>长忆小阑闲共绕" },
  { name: "K", yin: 8, str: "<br><br><br><br><br><br>你可明我心一片<br><br>我于儒行也修行" },
  { name: "L", yin: 25, str: "<br><br><br><br>一言出口堪生老<br><br>同寻僻境思携手<br><br>前程笑到山多处<br><br>往来凉月影毵毵" },
  { name: "M", yin: 3, str: "<br><br><br><br>编蒲缉羽不成扇<br><br>不负嘉州只负身<br><br>下笔咸成千古事<br><br>去后桃花春水深<br><br>了心须与我心同" },
  { name: "N", yin: 3, str: "<br><br><br><br><br>写三句情话<br><br>我爱你<br><br>剩下你来" },
  { name: "O", yin: 7, str: "<br><br><br><br>我们或者在月光下闲游，<br><br>或者在灯光下谈心，<br><br>手握着手，心对着心，<br><br>就像一对五十岁的情人。" },
  { name: "P", yin: 16, str: "<br><br><br><br>草在结它的种子，<br><br>风在摇它的叶子，<br><br>我们站着不说话，就十分美好。" },
  { name: "Q", yin: 17, str: "<br><br><br><br>你一眨眼，温驯的小鹿有跳动一下，<br><br>柔软的暖风有轻拂一下，遥远的星星有闪烁一下，<br><br>我也有心动，却不止一下。" },
  { name: "R", yin: 18, str: "<br><br><br><br>星河璀璨，阳光干净，<br><br>在人间所有美好的存在里，<br><br>不论是活着或者死去，我总是最爱你。" },
  { name: "S", yin: 19, str: "<br><br>我的心是亿万光年恒星爆炸后的残骸，荒烟蔓草，满目疮痍。<br><br>你来到这里，携着万千欢喜，覆在贫瘠之地上。枯木逄春，<br></>从此我的世界里只有为你而绽的名为爱的绝色。" },
  { name: "T", yin: 20, str: "<br><br>写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中，<br><br>像是一只害羞的小兽躲在情意绵绵的字里行间，被火漆封印起来，<br><br>等着解封的那一刻窜出来，跳进启信人眼底的柔波里。" },
  { name: "U", yin: 5, str: "<br><br>我把我整个的灵魂都给你，<br><br>连同它的怪癖，耍小脾气，忽明忽暗，<br><br>一千八百种坏毛病， 它真讨厌。只有一点好， 爱你" },
  { name: "V", yin: 22, str: "<br><br><br><br>我一生都是坚定不移的唯物主义者<br><br>唯有你<br><br>我希望有来生" },
  { name: "W", yin: 3, str: "<br><br><br><br>这个世纪疯狂,没人性,腐败。<br><br>您却一直清醒,温柔,<br><br>一尘不染。" },
  { name: "X", yin: 2, str: "<br><br><br><br>纵然万劫不复，<br><br>纵然相思入骨，我也待你眉眼如初，<br><br>岁月如故。" },
  { name: "Y", yin: 13, str: "<br><br><br><br>月遇从云，花遇和风，<br><br>今晚上的夜空很美，<br><br>我又想你。" },
  { name: "Z", yin: 26, str: "<br><br><br><br>跟你在一起的时光都很耀眼，<br><br>因为天气好，因为天气不好，因为天气刚刚好，<br><br>每一天，都很美好。" }
];
let b = ["linear-gradient(25deg, #c3786f, #a99188, #84a7a1, #3bbcbb)",
  "linear-gradient(25deg, #cb5860, #b3876f, #90ad7f, #4acf8f)",
  "linear-gradient(25deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)",
  "linear-gradient(25deg, #452089, #505ca1, #4b94b8, #24cdcf)",
  "linear-gradient(25deg, #04245a, #652959, #a62557, #e60b55)",
  "linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",
  "linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)",
  "linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)",
  "linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)",
  "linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)",
  "linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)",
  "linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)",
  "linear-gradient(25deg, #060d37, #174161, #1d7a8d, #12b8bc)",
  "linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
  "linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)",
  "linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)",
  "linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",
  "linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",
  "linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)",
  "linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",
  "linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)",
  "linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)",
  "linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
  "linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)",
  "linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)",
  "linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)"];
let s = 'a';
let records = 0;//记录我已经输入过了，防止出现多个打字function byaei


/*键盘事件*/
function fl(e) {
  if (clickb == true) {
    let key = e.key;
    if ((key <= 'z' && key >= 'a') || (key <= 'Z' && key >= 'A'))//避免大小写的错误
    {
      let p = a[k[key]];
      s = s + p.name;
      let x = document.createElement("audio");
      x.setAttribute("src", `./video/${p.yin}.mp3`);
      x.setAttribute("autoplay", "autoplay");
      let box = document.getElementById("box");
      let boxl = document.getElementById("boxl");
      let boxr = document.getElementById("boxr");
      let boxup = document.getElementById("boxup");
      let bac = document.getElementById("bac");
      bac.style.opacity = 0;
      box.style.transition = "0.5s";
      box.style.opacity = 0;
      boxup.style.opacity = 0;
      setTimeout(function () {
        boxl.innerHTML = `${p.name}`;
        boxr.innerHTML = `${p.str}`;
        console.log(b[k[key]]);
        bac.style.background = `${b[k[key]]}`;
        box.style.opacity = 1;
        boxup.style.opacity = 1;
        bac.style.opacity = 1;
      }, 500);
      if (s.indexOf("XIAOYUXIAOYUWXHN") != -1 && records == 0) {
        setTimeout(function () {
          records = 1;
          bac.style.opacity = 0;
          box.style.opacity = 0;
          boxup.style.opacity = 0;
          bac.style.opacity = 0;
          let box1 = document.getElementById("box1");
          box1.style.zIndex = 7;
          box1.style.opacity = 1;
          let music = document.createElement("audio");
          x.setAttribute("src", `./video/snjxh.mp3`);
          x.setAttribute("autoplay", "autoplay");
          x.setAttribute("loop", "loop");
        }, 750);
        setTimeout(typewrite, 3000);//进行打字
      }
    }
  }
}


window.onkeyup = fl;