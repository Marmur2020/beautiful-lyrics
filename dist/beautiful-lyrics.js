var beautifulDlyrics=(()=>{var a,n=Spicetify.Player,l=new Map,e=()=>{var e=null==(e=null==(e=n.data)?void 0:e.track)?void 0:e.metadata,e=e?{Large:e.image_xlarge_url,Big:e.image_large_url,Defualt:e.image_url,Small:e.image_small_url}:void 0;if((null==e?void 0:e.Defualt)!==(null==a?void 0:a.Defualt)){a=e;for(var[r,t]of l)t()}},o=(n.addEventListener("songchange",e),e(),"os-viewport .lyrics-lyrics-container"),i="os-padding .main-nowPlayingView-content",s={NowPlaying:void 0,FullScreen:void 0},c={NowPlaying:void 0,FullScreen:void 0},d=(e,r)=>{var t;e!==s[r]&&(null!=(t=c[r])&&t.call(c),c[r]=void 0,e&&(c[r]=(e=>{const r=document.createElement("div"),t=(r.classList.add("lyrics-background-container"),document.createElement("img")),n=document.createElement("img");t.classList.add("lyrics-background-color"),n.classList.add("lyrics-background-back"),r.appendChild(t),r.appendChild(n);var o=()=>{var e=null!=(e=null==a?void 0:a.Defualt)?e:"";t.src=e,n.src=e},o=(l.set(e,o),o(),()=>{e.classList.contains("lyrics-background")||e.classList.add("lyrics-background")});o();const i=new MutationObserver(o);return i.observe(e,{attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1}),e.prepend(r),()=>{i.disconnect(),r.remove(),e.classList.remove("lyrics-background"),l.delete(e)}})(e)),s[r]=null!=e?e:void 0)},r=()=>{var e,r=document.body.querySelector("."+i),t=(r=null!=(t=null==(r=null!=(t=null==(r=null!=(t=null==r?void 0:r.parentElement)?t:null)?void 0:r.parentElement)?t:null)?void 0:r.parentElement)?t:null,document.body.querySelector("."+o));t=null!=(e=null==(t=null!=(e=null==t?void 0:t.parentElement)?e:null)?void 0:t.parentElement)?e:null,d(r,"NowPlaying"),d(t,"FullScreen")},t="lyrics-lyrics-contentWrapper",u="main-nowPlayingView-lyricsContent",y={NowPlaying:void 0,FullScreen:void 0},v={NowPlaying:void 0,FullScreen:void 0},b=t=>{const a=new Map;let l=0;const s=(e,r)=>{e.style.fontSize="Active"==r.State?l+.5+"rem":""},n=()=>{let r;for(var[e,t]of a){e=e.classList;e.contains("lyrics-lyricsContent-active")?(t.State="Active",r=t.LayoutOrder):e.contains("lyrics-lyricsContent-unsynced")?t.State="Unsynced":e.contains("lyrics-lyricsContent-highlight")?t.State="Sung":t.State="Unsung"}for(var[n,o]of a){var i="Active"===o.State||"Unsynced"===o.State;let e;e=i?0:void 0===r?4:Math.min(Math.abs(o.LayoutOrder-r),4);i=i?"var(--lyrics-color-active)":"Sung"===o.State?"var(--lyrics-color-passed)":"var(--lyrics-color-inactive)";!1===n.classList.contains("lyric")&&n.classList.add("lyric"),s(n,o),n.style.color="transparent",n.style.textShadow=`0 0 ${e}px `+i}};let o,c;{const r=i=>{var e=Array.from(t.children).indexOf(i);new MutationObserver(n).observe(i,{attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1});let r=!1;void 0===c&&0===i.innerText.length&&((c=new ResizeObserver(e=>{var r,t,n,o;l=(r=i,r=getComputedStyle(i),t=getComputedStyle(document.documentElement),parseFloat(r.fontSize)/parseFloat(t.fontSize));for([n,o]of a)s(n,o)})).observe(i),r=!0),a.set(i,{Observer:o,LayoutOrder:e,State:"Unsung",IsFontSizeObserver:r}),n()},i=e=>{e instanceof HTMLDivElement&&e.classList.contains("lyrics-lyricsContent-lyric")&&r(e)};(o=new MutationObserver(e=>{for(const t of e)if("childList"===t.type){for(const n of t.addedNodes)i(n);for(const o of t.removedNodes){var r;o instanceof HTMLDivElement&&(null!=(r=a.get(o))&&r.IsFontSizeObserver&&(null!=c&&c.disconnect(),c=void 0),a.delete(o))}}})).observe(t,{attributes:!1,childList:!0,subtree:!1});for(const e of t.childNodes)i(e)}return()=>{o.disconnect(),null!=c&&c.disconnect();for(const e of a.values())e.Observer.disconnect()}},g=(e,r)=>{var t;e!==y[r]&&(null!=(t=v[r])&&t.call(v),v[r]=void 0,e&&(v[r]=b(e)),y[r]=null!=e?e:void 0)},m=()=>{var e=document.body.querySelector("."+u),r=document.body.querySelector("."+t);g(e,"NowPlaying"),g(r,"FullScreen")};var f=async function(){r(),m(),new MutationObserver(()=>{r(),m()}).observe(document.body,{attributes:!1,childList:!0,subtree:!0})};(async()=>{await f()})()})();(async()=>{var e;document.getElementById("beautifulDlyrics")||((e=document.createElement("style")).id="beautifulDlyrics",e.textContent=String.raw`
  .main-lyricsCinema-controls,.main-nowPlayingView-lyricsControls{mix-blend-mode:overlay}.lyric:hover{text-shadow:0 0 0 var(--lyrics-color-active)!important}.lyrics-lyricsContent-active{margin-top:.25em;margin-bottom:.25em}.lyrics-container .main-trackInfo-artists{opacity:.75;filter:brightness(1.15)}.main-nowPlayingView-coverArt{opacity:.85;box-shadow:rgba(0,0,0,.2705882353) 0 9px 20px 0}.main-nowPlayingView-section{background-color:var(--background-tinted-base)!important}.os-host:has(.lyrics-background) .os-scrollbar{padding:5px}.os-host:has(.lyrics-background) .os-scrollbar .os-scrollbar-handle{mix-blend-mode:overlay;background-color:rgba(11,11,11,.35)!important}.lyrics-lyrics-container,.main-nowPlayingView-section{--lyrics-color-inactive:rgb(240 240 240 / 51%)!important}.lyrics-background{overflow:hidden;position:relative}.lyrics-background.main-nowPlayingView-sectionHeaderSpacing.main-nowPlayingView-lyricsGradient,.lyrics-background.os-viewport .lyrics-lyrics-background{background-color:rgba(0,0,0,0)}.lyrics-background.os-padding,.lyrics-background.os-viewport{position:absolute}.lyrics-background.os-viewport:not(:has(.main-nowPlayingView-content)){overflow:visible}.lyrics-background.os-viewport:not(:has(.main-nowPlayingView-content))>.lyrics-background-container{position:sticky;max-width:35%;max-height:30%;scale:290% 340%;transform-origin:left top;margin-bottom:-18vh}.lyrics-background.os-padding:has(.main-nowPlayingView-content) .lyrics-background-container{filter:saturate(2) brightness(.7)}.lyrics-background-container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;overflow:hidden;border-radius:var(--border-radius-1);filter:saturate(1.5) brightness(.8)}.lyrics-background-back,.lyrics-background-color{width:200%;position:absolute;border-radius:100em;animation:rotate 35s linear infinite}.lyrics-background-color{right:0;top:0;filter:blur(40px);z-index:10;mix-blend-mode:revert}.lyrics-background-back{left:0;bottom:0;filter:blur(40px);z-index:1;animation-direction:reverse}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}:root{--beautiful-lyrics-random-degree:258deg}@keyframes rotate{0%{transform:rotate(var(--beautiful-lyrics-random-degree))}100%{transform:rotate(calc(var(--beautiful-lyrics-random-degree) + 360deg))}}
      `.trim(),document.head.appendChild(e))})();