const songs = [

{
title:"The Fate of Ophelia",
artist:"Taylor Swift",
cover:"",
link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
},

{
title:"Moth To A Flame",
artist:"The Weeknd",
cover:"https://i.ibb.co/qYdTYHy8/op2ybwfjhnv71.jpg",
audio:"https://cdn.imageurlgenerator.com/uploads/a98403c2-cc4d-44b0-9abe-7fe61773b1f5.mp3"
},

{
title:"24/7",
artist:"Arta",
cover:"",
link:""
},

{
title:"Church",
artist:"Chase Atlantic",
cover:"",
link:""
},

{
title:"Heaven and Back",
artist:"Chase Atlantic",
cover:"",
link:""
},

{
title:"The Walls",
artist:"Chase Atlantic",
cover:"",
link:""
},

{
title:"Slow Down",
artist:"Chase Atlantic",
cover:"",
link:""
},

{
title:"Friends",
artist:"Chase Atlantic",
cover:"",
link:""
},

{
title:"Into It",
artist:"Chase Atlantic",
cover:"",
link:""
},

{
title:"Swim",
artist:"Chase Atlantic",
cover:"",
link:""
},

{
title:"Hunted",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Cold Blooded",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Bad For You",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Enemies",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Forbidden Fruit",
artist:"Tommie",
cover:"",
link:""
},
  {
title:"Sailor Song",
artist:"Gigi Perez",
cover:"",
link:""
},

{
title:"Funhouse",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Let The World Burn",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Meddle About",
artist:"Chase Atlantic",
cover:"",
link:""
},

{
title:"The Hills",
artist:"The Weeknd",
cover:"",
link:""
},

{
title:"Compass",
artist:"The Neighbourhood",
cover:"",
link:""
},

{
title:"If I Had You",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Always Been You",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Make The Angels Cry",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Bring Me Back To Life",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Heart Beat",
artist:"Isabel LaRosa",
cover:"",
link:""
},

{
title:"Home",
artist:"Isabel LaRosa",
cover:"",
link:""
},

{
title:"More Than Friends",
artist:"Isabel LaRosa",
cover:"",
link:""
},

{
title:"Butterflies",
artist:"Isabel LaRosa",
cover:"",
link:""
},

{
title:"Mine",
artist:"Ari Abdul",
cover:"",
link:""
},
  {
title:"Death Won't Do Us Part",
artist:"Chris Grey & Ari Abdul",
cover:"",
link:""
},

{
title:"Hurts So Good",
artist:"Astrid S",
cover:"",
link:""
},

{
title:"K",
artist:"Cigarettes After Sex",
cover:"",
link:""
},

{
title:"Wrong",
artist:"Chris Grey",
cover:"",
link:""
},

{
title:"Friend Zone",
artist:"Arman Miladi",
cover:"",
link:""
},

{
title:"Older",
artist:"Isabel LaRosa",
cover:"",
link:""
},

{
title:"Cry",
artist:"Cigarettes After Sex",
cover:"",
link:""
},

{
title:"Pistol",
artist:"Cigarettes After Sex",
cover:"",
link:""
},

{
title:"Heavenly",
artist:"Cigarettes After Sex",
cover:"",
link:""
},

{
title:"Sunsetz",
artist:"Cigarettes After Sex",
cover:"",
link:""
},

{
title:"Ocean Eyes",
artist:"Billie Eilish",
cover:"",
link:""
},

{
title:"Jadeye Yektarafe",
artist:"Morteza Pashaei",
cover:"",
link:""
},

{
title:"Yeki Hast",
artist:"Morteza Pashaei",
cover:"",
link:""
},

{
title:"Negarane Mani",
artist:"Morteza Pashaei",
cover:"",
link:""
},

{
title:"Asheghaye Be Esm",
artist:"Morteza Pashaei",
cover:"",
link:""
},
  {
title:"Asheghaye Be Esm 2",
artist:"Morteza Pashaei",
cover:"",
link:""
},

{
title:"Doin' Time",
artist:"Lana Del Rey",
cover:"",
link:""
},

{
title:"I Was Never There",
artist:"The Weeknd",
cover:"",
link:""
},

{
title:"Born To Die",
artist:"Lana Del Rey",
cover:"",
link:""
},

{
title:"Diet Mountain Dew",
artist:"Lana Del Rey",
cover:"",
link:""
},

{
title:"Say Yes To Heaven",
artist:"Lana Del Rey",
cover:"",
link:""
},

{
title:"Sange Saboor",
artist:"Mohsen Chavoshi",
cover:"",
link:""
},

{
title:"Summertime Sadness",
artist:"Lana Del Rey",
cover:"",
link:""
},

{
title:"Asre Paeizi",
artist:"Morteza Pashaei",
cover:"",
link:""
},

{
title:"Dandelions",
artist:"Ruth B.",
cover:"",
link:""
}

];
const songsContainer = document.getElementById("songsContainer");
const searchInput = document.getElementById("searchInput");

const audioPlayer = document.getElementById("audioPlayer");
const miniPlayer = document.getElementById("miniPlayer");

const playerCover = document.getElementById("cover");
const playerTitle = document.getElementById("songTitle");
const playerArtist = document.getElementById("artistName");

let currentSong = null;
let currentButton = null;

// ===========================
// ساخت کارت آهنگ
// ===========================

function createSongCard(song){

return `

<div class="song-card">

<div class="song-left">

<img
class="song-cover"
src="${song.cover || "https://placehold.co/300x300/111/ffffff?text=♪"}"
alt="${song.title}">

<div class="song-info">

<h3>${song.title}</h3>

<p>${song.artist}</p>

</div>

</div>

<div class="song-right">

<button
class="play-btn"
onclick="playSong('${song.audio}','${song.cover}','${song.title}','${song.artist}',this)">

▶ Play

</button>

<a
href="${song.audio}"
target="_blank"
class="download-btn">

Download

</a>

</div>

</div>

`;

}

// ===========================
// نمایش آهنگ‌ها
// ===========================

function renderSongs(list){

songsContainer.innerHTML="";

list.forEach(song=>{

songsContainer.innerHTML += createSongCard(song);

});

}

renderSongs(songs);

// ===========================
// سرچ
// ===========================

searchInput.addEventListener("input",()=>{

const value = searchInput.value.toLowerCase();

const filtered = songs.filter(song=>

song.title.toLowerCase().includes(value) ||

song.artist.toLowerCase().includes(value)

);

renderSongs(filtered);

});
// ===========================
// پخش آهنگ
// ===========================

function playSong(audio, cover, title, artist, button){

    if(!audio){
        alert("This song has no audio yet.");
        return;
    }

    // اگر همان آهنگ در حال پخش بود
    if(currentSong === audio){

        if(audioPlayer.paused){

            audioPlayer.play();
            button.innerHTML = "⏸ Pause";

        }else{

            audioPlayer.pause();
            button.innerHTML = "▶ Play";

        }

        return;

    }

    // دکمه قبلی برگردد به Play
    if(currentButton){

        currentButton.innerHTML = "▶ Play";

    }

    currentSong = audio;
    currentButton = button;

    button.innerHTML = "⏸ Pause";

    audioPlayer.src = audio;

    playerCover.src =
    cover || "https://placehold.co/300x300/111/ffffff?text=♪";

    playerTitle.textContent = title;
    playerArtist.textContent = artist;

    miniPlayer.classList.remove("hidden");

    audioPlayer.play();

}

// وقتی آهنگ تمام شد
audioPlayer.addEventListener("ended",()=>{

    if(currentButton){

        currentButton.innerHTML="▶ Play";

    }

    currentSong = null;

});
// ===========================
// اگر آهنگ از خود پلیر Pause شد
// ===========================

audioPlayer.addEventListener("pause",()=>{

    if(currentButton){

        currentButton.innerHTML = "▶ Play";

    }

});

// ===========================
// اگر آهنگ از خود پلیر Play شد
// ===========================

audioPlayer.addEventListener("play",()=>{

    if(currentButton){

        currentButton.innerHTML = "⏸ Pause";

    }

});
