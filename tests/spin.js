/*!
 * The Empanada SPIN Game
 * Created by Zach <3
 *
 * Yes, it IS possible to cheat in this game (in more ways than one). But
 * There is no room for cheaters in the book of Spin Masters. ;)
 *
 * https://empanadas.io -- A website by Zach
 */
'use strict';
const gameversion = "v4.9.12";
const pagetitle = "Empanada Spin";

//                             isburnt  notmainwindow, canclickwarnings, spinvar
//                Replaced Vars: ewiryov, iththvodl, yrotlbfr, tepvbl

confetti.gradient = true;

let hasgameloaded = false;
let peppershot = false;
let spinactive = false;
let playaudio = true;
let lowquality = false;

let aacprev = 0;
let tepvbl = 0;
let canclick = true;
let yrotlbfr = 0;

let ewiryov = false;

let lastms = 0;
let lastclick = 0;
let aaccooldown = false;
let hasclickedyet = false;
let canupdatestats = true;
let canupdatesave = false;
let hasinitalsaved = false;
let lastsave = 0;
let lastserversave = 0;
let serverresponsems;

let iththvodl = false;

const spin1 = new Audio('/Content/Sounds/SpinGame/Speenz/1.mp3');
const spin2 = new Audio('/Content/Sounds/SpinGame/Speenz/2.mp3');
const spin3 = new Audio('/Content/Sounds/SpinGame/Speenz/3.mp3');
const spin4 = new Audio('/Content/Sounds/SpinGame/Speenz/4.mp3');
const spin5 = new Audio('/Content/Sounds/SpinGame/Speenz/5.mp3');
const spin6 = new Audio('/Content/Sounds/SpinGame/Speenz/6.mp3');
const spin7 = new Audio('/Content/Sounds/SpinGame/Speenz/7.mp3');
const spin8 = new Audio('/Content/Sounds/SpinGame/Speenz/8.mp3');
const a2 = new Audio('/Content/Sounds/button.mp3');
const a3 = new Audio('/Content/Sounds/soundtoggle.mp3');
const aerr = new Audio('/Content/Sounds/error.wav');
const alock = new Audio('/Content/Sounds/SpinGame/locked.mp3');
const azap = new Audio('/Content/Sounds/SpinGame/zap.mp3');
const asmokealarm = new Audio('/Content/Sounds/SpinGame/smokealarm.mp3');
const aextinguish = new Audio('/Content/Sounds/SpinGame/Extinguish.mp3');
let atimetravel;
const emp = document.getElementById('mysweetboi');
const empimg = document.getElementById('mrempanada');
const storebutton = document.getElementById("storebutton")
const gear = document.getElementById('settingsbutton');
const settingspage = document.getElementById("settings");
const gameinfoitem = document.getElementById('gameinfo');
let upgrademenu = document.getElementById("upgrades");


const autospinitem = document.getElementById('autospin_item');
const prestigeitem = document.getElementById('prestige_item');
const extinguisheritem = document.getElementById('extinguisher_item');
const smokealarmitem = document.getElementById('smokealarm_item');
const ascenditem = document.getElementById('ascend_item');
const timetravelitem = document.getElementById('timetravel_item');
const goldenitem = document.getElementById('goldenempanadas_item');

const autospinpriceid = document.getElementById('autospin_price');
const extinguisherpriceid = document.getElementById('extinguisher_price');
const smokealarmpriceid = document.getElementById('smokealarm_price');
const timetravelpriceid = document.getElementById('timetravel_price');
const timetraveliconid = document.getElementById('timetravel_icon');
const goldenpriceid = document.getElementById('golden_price');


const pc = document.getElementById('pepperbox');
const firebox = document.getElementById('firebox');
const smokefire = document.getElementById('smokefire');
const smokebox = document.getElementById('smokealarmbox');
const smokenumber = document.getElementById('smokealarmnumber');
const extinguisherbox = document.getElementById('extinguisherbox');
const extinguishernumber = document.getElementById('extinguishernumber');

const gameinfotip = tippy(gameinfoitem, {
    appendTo: () => document.body,
    followCursor: false,
    theme: 'bland',
    inlinePositioning: false,
    allowHTML: true,
    arrow: true,
    placement: 'top'
});

const autospintip = tippy(autospinitem, {
    appendTo: () => document.body,
    followCursor: false,
    inlinePositioning: true,
    theme: 'shopmenu',
    allowHTML: true,
    dynamicTitle: true,
    arrow: false,
    placement: 'left'
});

const extinguishertip = tippy(extinguisheritem, {
    appendTo: () => document.body,
    followCursor: false,
    inlinePositioning: true,
    theme: 'shopmenu',
    allowHTML: true,
    dynamicTitle: true,
    arrow: false,
    placement: 'left'
});

const prestigetip = tippy(prestigeitem, {
    appendTo: () => document.body,
    followCursor: false,
    inlinePositioning: true,
    theme: 'shopmenu',
    allowHTML: true,
    dynamicTitle: true,
    arrow: false,
    placement: 'left'
});

const smokealarmtip = tippy(smokealarmitem, {
    appendTo: () => document.body,
    followCursor: false,
    inlinePositioning: true,
    theme: 'shopmenu',
    allowHTML: true,
    dynamicTitle: true,
    arrow: false,
    placement: 'left'
});

const ascendtip = tippy(ascenditem, {
    appendTo: () => document.body,
    followCursor: false,
    inlinePositioning: true,
    theme: 'shopmenu',
    allowHTML: true,
    dynamicTitle: true,
    arrow: false,
    placement: 'left'
});

const timetraveltip = tippy(timetravelitem, {
    appendTo: () => document.body,
    followCursor: false,
    inlinePositioning: true,
    theme: 'shopmenu',
    allowHTML: true,
    dynamicTitle: true,
    arrow: false,
    placement: 'left'
});

const goldtip = tippy(goldenitem, {
    appendTo: () => document.body,
    followCursor: false,
    inlinePositioning: true,
    theme: 'shopmenu',
    allowHTML: true,
    dynamicTitle: true,
    arrow: false,
    placement: 'left'
});

let vrank = 0;
const rankimg = document.getElementById("rankimg");
const rname = document.getElementById('rankname');
const rinfo = document.getElementById('rankinfo');

const scoretxt = document.getElementById('spins');

let win = false;
let winaudioplaying = false;
let vibecheck = true;

let shopcooldown = false;
let settingscooldown = false;
let autospinning = false;

let autospinwarning = false;
let autospinwarning2 = false;
let prestigewarning = false;
let smokealarmwarning = false;
let goldenempanadawarning = false;
let timetravelwarning = false;
let hasseenburntip = false;

let showingflame = false;

let latestdataversion = 7;
let JSONData = {
    Peppers: 0,
    Spins: 0,
    Prestige: 1,
    Auto_Spinners: 0,
    Golden_Empanadas: 0,
    Extra_Spins: 0,
    Total_Resets: 0,
    Smoke_Alarms: 0,
    Burnt_Clicks: 0,
    Spins_Until_Burnt: 0,
    Extinguishers: 0,
    Used_Extinguishers: 0,
    Lifetime_Spins: 0,
    Game_Started: 0,
    Time_Travel: 0,
    Used_Time_Travels: 0,
    Rank: 0,
    AAC: 0,
    Data_Version: latestdataversion,
    Spent_Peppers: 0,
    Bonus_Spins: 0,
    Game_Version: gameversion
};

let JSONSettings = {
    lowquality: false,
    muted: false,
    Data_Version: 1
};

window.addEventListener("backOnline", gameBackOnline, false);
window.addEventListener("wentOffline", gameWentOffline, false);
window.addEventListener("checkedStorage", loadPlayerDataFromEvent, false);
window.addEventListener("pepperChange", userUpdatePeppers, false);
window.addEventListener("gotGameData", finishedDataFromServer, false);
window.addEventListener("savedGameData", finishedDataToServer, false);
window.addEventListener("gotBoosters", finishedBoosters, false);

function vibe() {
    navigator.vibrate([5, 200, 20]);
}

function pop() {
    if (playaudio) {
        a2.play();
    }
}

function gbeapep(amount) {
   let final = amount;
   if(ssid !== 0 && sspm > 1) {
      final += Math.round(amount*sspm);
   }
   beapep(final);
}

function updateRank(sound, startup, useblank) {
    if (tepvbl >= 10 && tepvbl <= 99) {
        if (JSONData.Rank <= 0 && !startup) {
                pop();
                confetti.start(1000);
                JSONData.Rank = 1;
                gbeapep(1);
                discordWebhook("Game Progress", "Spin Game Rankup!", "{user} just unlocked the Spin Rookie Medal.", "https://empanadas.io/Content/Images/SpinGame/Medals/3.png", false);
        }

        if (startup || vrank != 1) {
            rankimg.src = '/Content/Images/SpinGame/Medals/3.png';
            rname.innerHTML = "Spin Rookie";
            rinfo.style.left = "24px";
            rinfo.style.top = null;
            rname.style.left = null;
            rname.style.top = null;
            rname.style.fontSize = null;
            rankimg.width = 100;
            vrank = 1;
        }
        let precent = Math.floor((tepvbl / 100) * 100);
        rinfo.innerHTML = precent + "% to Level Up";

    } else if (tepvbl >= 100 && tepvbl <= 999) {
        if (JSONData.Rank <= 1 && !startup) {
                pop();
                confetti.start(1000);
                JSONData.Rank = 2;
                gbeapep(4);
                discordWebhook("Game Progress", "Spin Game Rankup!", "{user} just unlocked the Spin Cadet Medal.", "https://empanadas.io/Content/Images/SpinGame/Medals/2.png", false);
        }

        if (startup || vrank != 2) {
            rankimg.src = '/Content/Images/SpinGame/Medals/2.png';
            rname.innerHTML = "Spin Cadet";
            rinfo.style.left = "22px";
            rinfo.style.top = null;
            rname.style.left = null;
            rname.style.top = null;
            rname.style.fontSize = null;
            rankimg.width = 100;
            vrank = 2;
        }
        let precent = Math.floor(((tepvbl - 100) / 900) * 100);
        rinfo.innerHTML = precent + "% to Level Up";

    } else if (tepvbl >= 1000 && tepvbl <= 3999) {
        if (JSONData.Rank <= 2 && !startup) {
                pop();
                confetti.start(1000);
                JSONData.Rank = 3;
                gbeapep(8);
                if (JSONData.Prestige == 2) {
                    Swal.fire("Beware of Burnt Empanadas!", "You've now unlocked burnt empanadas! Make sure you avoid clicking them, otherwise you'll lose spins. You can easily find them by buying a smoke detector!", "info");
                }
                discordWebhook("Game Progress", "Spin Game Rankup!", "{user} just unlocked the Spin Master I medal.", "https://empanadas.io/Content/Images/SpinGame/Medals/1.png", false);
        }
        if (startup || vrank != 3) {
            rankimg.src = '/Content/Images/SpinGame/Medals/1.png';
            rname.innerHTML = "Spin Master I";
            rinfo.style.left = "30px";
            rinfo.style.top = null;
            rname.style.left = null;
            rname.style.top = null;
            rname.style.fontSize = null;
            rankimg.width = 100;
            vrank = 3;
        }
        let precent = Math.floor(((tepvbl - 1000) / 3000) * 100);
        rinfo.innerHTML = precent + "% to Level Up";

    } else if (tepvbl >= 4000 && tepvbl <= 7999) {
        if (JSONData.Rank <= 3 && !startup) {
                pop();
                confetti.start(1000);
                JSONData.Rank = 4;
                gbeapep(10);
                discordWebhook("Game Progress", "Spin Game Rankup!", "{user} just leveled up to Spin Master II.", "https://empanadas.io/Content/Images/SpinGame/Medals/1.png", false);
        }
        if (startup || vrank != 4) {
            rankimg.src = '/Content/Images/SpinGame/Medals/1.png';
            rname.innerHTML = "Spin Master II";
            rinfo.style.left = "32px";
            rinfo.style.top = null;
            rname.style.left = null;
            rname.style.top = null;
            rname.style.fontSize = null;
            rankimg.width = 100;
            vrank = 4;
        }

        let precent = Math.floor(((tepvbl - 4000) / 4000) * 100);
        rinfo.innerHTML = precent + "% to Level Up";

    } else if (tepvbl >= 8000 & tepvbl <= 9999) {
        if (JSONData.Rank <= 4 && !startup) {
                pop();
                confetti.start(1000);
                JSONData.Rank = 5;
                gbeapep(6);
                discordWebhook("Game Progress", "Spin Game Rankup!", "{user} just leveled up to Spin Master III.", "https://empanadas.io/Content/Images/SpinGame/Medals/1.png", false);
        }
        if (startup || vrank != 5) {
            rankimg.src = '/Content/Images/SpinGame/Medals/1.png';
            rname.innerHTML = "Spin Master III";
            rinfo.style.left = "34px";
            rinfo.style.top = null;
            rname.style.left = null;
            rname.style.top = null;
            rname.style.fontSize = null;
            rankimg.width = 100;
            vrank = 5;
        }
        let precent = Math.floor(((tepvbl - 8000) / 2000) * 100);
        rinfo.innerHTML = precent + "% to Level Up";

    } else if (tepvbl >= 10000 & tepvbl <= 49999) {
        if (JSONData.Rank <= 5 && !startup) {
                pop();
                confetti.start(1000);
                JSONData.Rank = 6;
                gbeapep(8);
                discordWebhook("Game Progress", "Spin Game Rankup!", "{user} just unlocked the Spin Olympian medal.", "https://empanadas.io/Content/Images/SpinGame/Medals/4.gif", false);
        }

        if (startup || vrank != 6) {
            rankimg.src = '/Content/Images/SpinGame/Medals/4.gif';
            rankimg.width = 150;

            rname.innerHTML = "Spin Olympian";
            rinfo.style.left = "58px";
            rinfo.style.top = "187px";
            rname.style.left = "37px";
            rname.style.top = "155px";
            vrank = 6;
        }
        let precent = Math.floor(((tepvbl - 10000) / 40000) * 100);
        rinfo.innerHTML = precent + "% to Level Up";

    } else if (tepvbl >= 50000 && tepvbl <= 99999) {
        if (JSONData.Rank <= 6 && !startup) {
                pop();
                confetti.start(1000);
                JSONData.Rank = 7;
                gbeapep(5);
                discordWebhook("Game Progress", "Spin Game Rankup!", "{user} just leveled up to Spin Olympian II.", "https://empanadas.io/Content/Images/SpinGame/Medals/4.gif", false);
        }

        if (startup || vrank != 7) {
            rankimg.src = '/Content/Images/SpinGame/Medals/4.gif';
            rankimg.width = 150;

            rname.innerHTML = "Spin Olympian II";
            rinfo.style.left = "62px";
            rinfo.style.top = "187px";
            rname.style.left = "37px";
            rname.style.top = "155px";
            vrank = 7;
        }

        let precent = Math.floor(((tepvbl - 50000) / 50000) * 100);
        rinfo.innerHTML = precent + "% to Level Up";

    } else if (tepvbl >= 100000 && JSONData.Prestige >= 100) {
        if (JSONData.Rank != 9 && !startup) {
          if (JSONData.Rank <= 9) {
            updateShopData(false); // Just to be safe
            JSONData.Rank = 9;
            gbeapep(10);
            discordWebhook("Game Progress", "Spin Game Rankup!", "{user} got all the way to Tier 100 and beat the final level... They have unlocked **Spin OVERLORD** as a reward for their hard work!", "https://empanadas.io/Content/Images/SpinGame/Medals/6.gif", true);
          }
        }
        if (vrank != 9) {
            document.getElementById("rank").style.zIndex = "4";
            rankimg.src = '/Content/Images/SpinGame/Medals/6.gif';
            rankimg.width = 300;
            rname.classList.add('rainbow');
            scoretxt.classList.add('rainbow');
            scoretxt.classList.add('zoom');
            rname.innerHTML = "SPIN OVERLORD";
            rinfo.innerHTML = "";
            rinfo.style.left = null;
            rinfo.style.top = null;
            rname.style.left = "56px";
            rname.style.top = "185px";
            rname.style.fontSize = "30px";
            vrank = 9;
        }
    } else if (tepvbl >= 100000) {
        if (JSONData.Rank <= 7 && !startup) {
                pop();
                tepvbl = 100000;
                JSONData.Rank = 8;
                gbeapep(20);
                discordWebhook("Game Progress", "Spin Game Rankup!", "{user} just beat the game and got the **Spin Sensei** medal!", "https://empanadas.io/Content/Images/SpinGame/Medals/5.gif", true);
        }

        confetti.start();
        rankimg.src = '/Content/Images/SpinGame/Medals/5.gif';
        rankimg.width = 250;

        rname.innerHTML = "Spin Sensei";
        rinfo.style.left = null;
        rinfo.style.top = null;
        rname.style.left = "68px";
        rname.style.top = "240px";
        rname.style.fontSize = "28px";
        rinfo.innerHTML = "";
        vrank = 8;
    } else {
        if (useblank) {
            rankimg.src = '/Content/Images/blank.png';
            rinfo.innerHTML = "";
            rname.innerHTML = "";
            vrank = 0;
        }
    }
    if (sound) {
        try {
            pop();
        } catch (e) {}
    }
}

function playerWon(rewards) {
    if (win) {
        return;
    }

    autospinning = false;
    ewiryov = false;
    JSONData.Extinguishers = 0;
    JSONData.Auto_Spinners = 0;
    tepvbl = 100000;
    JSONData.Spins = 100000;

    closeStore();
    closeSettings();

    if (playaudio) {
        asmokealarm.pause()
        asmokealarm.currentTime = 0;
    }

    win = true;
    // updateRank(Play inital Sound?, Is Startup?, Use blank if needed?)
    if (rewards) {
        updateRank(false, false, true);
    } else {
        updateRank(false, true, true);
    }

    if (JSONData.Prestige >= 100) {
        pepperbox.style.display = "none";
        scoretxt.innerHTML = "You've Beat The Game!";
        document.title = pagetitle + " | Spin Overlord";
        setTimeout(function() {
            emp.children[0].classList.remove('spin');
        }, 500);
        setTimeout(function() {
            emp.children[0].classList.add('slowspin');
        }, 1000);
    } else {
        scoretxt.innerHTML = "100,000 Spins";
        document.title = pagetitle + " | 100,000 Spins";
    }

    JSONData.Time_Travel = 0;

    storebutton.style.display = null;
    pc.style.display = "none";
    gear.style.display = null;

    smokebox.style.display = "none";
    firebox.style.display = "none";
    extinguisherbox.style.display = "none";

    updateShopData(false);

    if (JSONData.Prestige < 100) {
        Swal.fire("Congratulations!", "You've proven yourself worthy, and have obtained 100,000 spins. This remarkable achievement will be remembered in the book of the spin masters. Thank you for playing!", "success");
    } else {
        confetti.stop();
        Swal.fire({
            title: "You've Done it All!",
            text: "While we are concerned for your health at this point, we have no choice but to honor your hard work and dedication. You can either keep your victory, or Ascend and reset all of your progress back to Tier 1.",
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: '<i class="fas fa-cloud"></i>&nbsp;&nbsp;Ascend',
            confirmButtonAriaLabel: 'Ascend',
            cancelButtonText: 'Keep Victory'
        }).then((result) => {
            if (result.value) {
                buyAscend();
            } else {
                // Aborted, restore confetti;
                confetti.start();
                Swal.fire({
                    title: "You're Not Ascending?",
                    text: "We understand. You've come so far! Should you change your mind, you're able to Ascend by clicking the item in the Spin Store.",
                    icon: 'info',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top',
                    timer: 30000,
                    timerProgressBar: true
                });
            }
        });
    } // End of if JSONData.Prestige equals 100

    if (playaudio && !winaudioplaying) {
        let a4 = new Audio('/Content/Sounds/SpinGame/spinwin.mp3'); // Victory Screetch! REEE
        a4.play();
        winaudioplaying = true;

        a4.addEventListener('timeupdate', function() {
            if (!win || !playaudio) {
                winaudioplaying = false;
                this.pause();
                this.currentTime = 0;
                this.removeEventListener('timeupdate', this);
            }
        }, false);

        a4.addEventListener('ended', function() {
            if (win) {
                this.currentTime = 0;
                this.play();
                winaudioplaying = true;
            } else {
                winaudioplaying = false;
                this.pause();
                this.currentTime = 0;
                this.removeEventListener('ended', this);
            }
        }, false);
    }
    //setTimeout(function() {   ---- For some reason, using this method actually causes massive issues with the rest of the website.
    //    if (playaudio && !winaudioplaying) {
    //        const contentlink = "https://www.youtube.com/watch?v=PGNiXGX2nLU";
    //        document.getElementById("content").innerHTML += '<object id="winmusic" type="application/x-shockwave-flash" width="1" height="1" data="' + contentlink + '?version=2&autoplay=1&loop=1&theme=light" style="visibility:hidden;display:inline;z-index: -1;"><param name="movie" value="' + contentlink + '?version=2&autoplay=1&loop=1&theme=light" /><param name="wmode" value="transparent" /></object>';
    //        winaudioplaying = true;
    //    }
    //}, 1000);
}


function preloadImages(urls, allImagesLoadedCallback){
  const loader = document.getElementById("loadingstatus");
  let loadedCounter = 0;
  let toBeLoadedNumber = urls.length;
  urls.forEach(function(url){
    preloadImage(url, function(){
        loadedCounter++;
        loader.innerHTML = "Downloading (" + Math.ceil((loadedCounter/toBeLoadedNumber)*100) + "%)...";
      if(loadedCounter == toBeLoadedNumber){
        allImagesLoadedCallback();
      }
    });
  });
  function preloadImage(url, anImageLoadedCallback){
      var img = new Image();
      img.onload = anImageLoadedCallback;
      img.src = url;
  }
}

function doSpin(isauto, other=false) {
    if (!hasgameloaded) {
        return;
    }

    if(!synced) {
        noSyncMsg();
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (iththvodl) {
        multiSessionMsg();
        return;
    }

    let didaaccheck = false;
    if (!aaccooldown && !isauto) {
        aaccooldown = true;
        didaaccheck = true;

        if (JSONData.AAC >= 30) {
            bespep(0, false);
            deleteGameStorage(false, false, true);
            updateRank(false, true, true);
            closeStore();
            Swal.fire({
                icon: 'error',
                html: "&nbsp;&nbsp;Because you were cheating, your progress was reset!",
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 10000,
                timerProgressBar: true
            });
            if (playaudio) {
                aerr.play();
            }
            return;
        } else if (JSONData.AAC >= 12) {
            if (JSONData.AAC <= aacprev) {
                Swal.fire({
                    icon: 'warning',
                    html: "&nbsp;&nbsp;Cheating Suspected. Continued cheating will result in a game reset.",
                    showConfirmButton: false,
                    toast: true,
                    position: 'top',
                    timer: 10000,
                    timerProgressBar: false
                });
            }
        }

        setTimeout(function() {
            aaccooldown = false;
        }, 3736);

        let d = new Date();
        let currentmili = d.getTime();
        let thisms = currentmili - lastclick;
        let differencems = Math.abs(thisms - lastms);

        if (differencems < 1) {
            JSONData.AAC += 4;
        } else if (differencems < 3) {
            JSONData.AAC += 3;
        } else if (differencems < 5) {
            JSONData.AAC += 2;
        } else if (differencems < 10) {
            JSONData.AAC += 1;
        } else {
            if (JSONData.AAC > 0) {
                let newwarnings = Math.max(0, JSONData.AAC - 1);
                JSONData.AAC = newwarnings;
            }
        }

        lastms = thisms;
        lastclick = currentmili;
    }

    if (yrotlbfr >= 12) {
        if (JSONData.AAC >= 32) {
            return;
        }
        JSONData.AAC += 5;
        yrotlbfr = 0;
    }

    if (!canclick && !isauto) {
        yrotlbfr += 2;
        return;
    }

    setTimeout(function() {
        canclick = true;
    }, 10);

    if (tepvbl >= 100000 || JSONData.Rank == 8) {
        playerWon(false);
        return;
    }

    if (vibecheck && !lowquality) {
        try {
            vibe();
        } catch (e) {
            vibecheck = false;
        }
    }

    if (!hasclickedyet) {
        // Show hidden elements after 1 Spin.
        if (canStorage) {
            pc.style.display = null;
            storebutton.style.display = null;
        }
        gear.style.display = null;
        storebutton.style.display = null;
        let overflow = tepvbl + 1;
        if (JSONData.Prestige >= 2) {
            overflow = (tepvbl) + (JSONData.Auto_Spinners * JSONData.Prestige) + JSONData.Extra_Spins;
        } else {
            overflow = tepvbl + JSONData.Auto_Spinners;
        }
        if (overflow < 99990) {
            doAutoSpin();
        }
        if (JSONData.Smoke_Alarms >= 1) {
            smokebox.style.display = null;
            smokenumber.innerHTML = JSONData.Spins_Until_Burnt;
        }
        if (JSONData.Extinguishers >= 1) {
            extinguisherbox.style.display = null;
            extinguishernumber.innerHTML = JSONData.Extinguishers;
        }
    }

    hasclickedyet = true;
    aacprev = JSONData.AAC;

    if (ewiryov && !isauto) {
        burntSpin();
    }

    if (isauto) {
        // Is from the Auto Spinner/
        let increment = 1;
        if(!other) {
            increment = JSONData.Auto_Spinners;
        }
        if (JSONData.Prestige >= 2) {
            // Auto Spin and Has Tier
            tepvbl += (increment * JSONData.Prestige);
        } else {
            // Just auto, no tier.
            tepvbl += increment;
        }

    } else {
        // Is not from auto-spinner

        JSONData.Lifetime_Spins += 1;

        if (JSONData.Prestige >= 2) {
            tepvbl = tepvbl + JSONData.Prestige;
        } else {
            tepvbl += 1;
        }

        tepvbl = tepvbl + JSONData.Extra_Spins;

        if(ssid !== 0 && sssm > 1) {
            let bonusspins = Math.round((JSONData.Extra_Spins + JSONData.Prestige) * sssm); // Spin Multipler from Specials
            if(bonusspins < 1) {
                bonusspins = 1;
            }
            tepvbl += bonusspins;
            JSONData.Bonus_Spins += bonusspins;
        }

        canclick = false;
        yrotlbfr = Math.max(0, yrotlbfr - 1);
        setTimeout(function() {
            canclick = true;
        }, 50);

        if (tepvbl > 1000 && JSONData.Prestige >= 2) {
            if (ewiryov) {
                burntSpin();
            }

            JSONData.Spins_Until_Burnt = Math.max(0, JSONData.Spins_Until_Burnt - 1);
            if (JSONData.Smoke_Alarms >= 1) {
                smokenumber.innerHTML = JSONData.Spins_Until_Burnt;
            }
            if (JSONData.Spins_Until_Burnt <= 10) {
                if (!showingflame) {
                    showingflame = true;
                    if (JSONData.Smoke_Alarms >= 1) {
                        smokefire.src = '/Content/Images/SpinGame/fire.png';
                        if (playaudio) {
                            asmokealarm.play();
                        }
                    } else {
                        firebox.style.display = null;
                    }
                }
            }
            burnCheck();
        }

    }

    scoretxt.innerHTML = tepvbl + " Spins";

    if (!lowquality) {
        scoretxt.classList.remove('bounce');
        scoretxt.classList.add('bounce');
        setTimeout(function() {
            scoretxt.classList.remove('bounce');
        }, 100);
    }

    if (canupdatestats) {
        if (lowquality) {
            canupdatestats = false;
            setTimeout(function() {
                canupdatestats = true;
            }, 5113);
        } else {
            document.title = pagetitle + " | " + addCommas(tepvbl) + " Spins";
            canupdatestats = false;
            setTimeout(function() {
                canupdatestats = true;
            }, 1053);
        }
        updateRank(false, false, false);
        if (canupdatesave) {
            canupdatesave = false;
            saveGameData(false, false);
            setTimeout(function() {
                canupdatesave = true;
            }, 11153); // 11.2s
        }
    }


    if (playaudio && !isauto) {
        let sound = Math.floor((Math.random() * 8) + 1);
        if (sound == 1) {
            spin1.play();
        } else if (sound == 2) {
            spin2.play();
        } else if (sound == 3) {
            spin3.play();
        } else if (sound == 4) {
            spin4.play();
        } else if (sound == 5) {
            spin5.play();
        } else if (sound == 6) {
            spin6.play();
        } else if (sound == 7) {
            spin7.play();
        } else if (sound == 8) {
            spin8.play();
        }
    }

    if (tepvbl >= 100000) {
        playerWon(true);
    }

    if (spinactive || isauto) {
        return;
    }

    spinactive = true;
    emp.children[0].classList.remove('spin');
    emp.children[0].classList.add('spin');
    setTimeout(function() {
        emp.children[0].classList.remove('spin');
        spinactive = false;
    }, 510);
}

function burntSpin() {
    if (!ewiryov) {
        return;
    }

    if (JSONData.Extinguishers >= 1) {
        JSONData.Extinguishers -= 1;
        JSONData.Used_Extinguishers += 1;
        if (playaudio) {
            aextinguish.play();
        }

        extinguishernumber.innerHTML = JSONData.Extinguishers;
        if (JSONData.Extinguishers == 0) {
            extinguisherbox.style.display = "none";
        }
    } else {
        let lostspins = 100;
        if (JSONData.Prestige >= 2) {
            lostspins = 250 * JSONData.Prestige;
        }
        tepvbl = Math.max(0, tepvbl - lostspins);
        JSONData.Burnt_Clicks += 1;
        if (!hasseenburntip && JSONData.Smoke_Alarms == 0) {
            Swal.fire("You Burnt Your Empanada!", "You clicked on the empanada while it was burnt! This cost you <strong>" + lostspins + "</strong> spins! Next time, wait for the empanada to not be burnt before clicking it.<br><br>A fire icon will appear when you are close to burning so you can prepare! Buy a Smoke Alarm to know when burnt empanadas are approaching, or buy an Extinguisher and avoid losing spins!", "warning");
            hasseenburntip = true;
        }
        if (playaudio) {
            azap.play();
            asmokealarm.pause()
            asmokealarm.currentTime = 0;
        }
    }

    empimg.src = '/Content/Images/empanada.png';
    ewiryov = false;
    if (JSONData.Smoke_Alarms >= 1) {
        smokefire.src = '/Content/Images/blank.png';
    } else {
        firebox.style.display = "none";
    }
    showingflame = false;
    saveGameData(false, true);
    updateShopData(false);
    updateRank(false, true, true);
}

function burnCheck() {
    if (JSONData.Spins_Until_Burnt >= 1) {
        return;
    }

    JSONData.Spins_Until_Burnt = 632 + Math.floor(Math.random() * 150);
    ewiryov = true;
    empimg.src = '/Content/Images/SpinGame/burnt_empanada.png';

    setTimeout(function() {
        if (ewiryov) {
            empimg.src = '/Content/Images/empanada.png';
            ewiryov = false;
            showingflame = false;
            if (JSONData.Smoke_Alarms >= 1) {
                smokenumber.innerHTML = JSONData.Spins_Until_Burnt;
                smokefire.src = '/Content/Images/blank.png';
            } else {
                firebox.style.display = "none";
            }
        }
    }, 2000);
}

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);

function plural(num, single, multi) {
    if (num == 1) {
        return single;
    }

    return multi;
}

function intToRoman(num) {
    if (typeof num !== 'number') {
        return false;
    }

    let digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
        ],
        roman_num = "",
        i = 3;
    while (i--)
        roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
}

//function buyDoubleSpins() {
//    if (!(tepvbl >= price)) {
//        Swal.fire("Not Enough Peppers!", "You need " + price + " peppers to purchase the Double Spin booster. You currently have " + tepvbl + " peppers.", "error");
//        return;
//    }
//    pop();
//    takePeppers(price);
//    JSONData.Spent_Peppers += price;
//    JSONData.Extra_Spins = JSONData.Extra_Spins + 1;
//    Swal.fire("Purchase Successful!", "Each click will now count as " + JSONData.Extra_Spins + " spins instead of 1.", "success");
//    setStorage("Spin_Extra_Spins", JSONData.Extra_Spins); // NOT FINISHED. Need to account for prev spins and add.
//}

function buyAutoSpinner() {
    if(!synced) {
        noSyncMsg();
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (iththvodl) {
        multiSessionMsg(true);
        return;
    }

    if (win || tepvbl >= 99990) {
        Swal.fire("Cannot Purchase", "You must Prestige in order to purchase this item.", "error");
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (JSONData.Auto_Spinners >= 1000) {
        Swal.fire("Max Auto Spinners", "You have 1,000 auto spinners. This is the maximum amount.", "info");
        return;
    }

    const price = getAutoSpinPrice();
    const peppers = JSONData.Peppers;
    const missing = price - peppers;
    if (!(peppers >= price)) {
        if (playaudio) {
            aerr.play();
        }
        Swal.fire("Not Enough Peppers!", "You need <strong>" + missing + "</strong> more " + plural(missing, "pepper", "peppers") + " to purchase an Auto Spinner.", "error");
        return;
    }

    if (!autospinwarning && tepvbl >= 50000) {
        let result;
        Swal.fire({
            title: 'Are You Sure?',
            html: 'You are really close to 100,000 spins. Buying an Auto Spinner this late may not be worth it, as once you reach 100k and Prestige, you lose your auto spinners!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Buy Anyways',
            cancelButtonText: 'Cancel Purchase'
        }).then((result) => {
            if (result.value) {
                autospinwarning = true;
                buyAutoSpinner();
                setTimeout(function() {
                    autospinwarning = false;
                }, 100);
            }
        });
        return;
    }

    const timeLeft = getTimeTravelTimeLeft();
    if (!autospinwarning2 && timeLeft >= 1) {
        let result;
        Swal.fire({
            title: 'Are You Sure?',
            html: 'You currently have a Time Travel active on your spins. Buying an Auto Spinner now will cancel your Time Travel!<br><br>You have <strong>' + Math.round(timeLeft) + '</strong> seconds remaining.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Buy & Stop Time Travel',
            cancelButtonText: 'Cancel Purchase'
        }).then((result) => {
            if (result.value) {
                autospinwarning2 = true;
                autospinwarning = true;
                buyAutoSpinner();
                JSONData.Time_Travel = 0;
                setTimeout(function() {
                    autospinwarning = false;
                    autospinwarning2 = false;
                }, 100);
            }
        });

        return;
    }

    pop();
    JSONData.Auto_Spinners += 1;

    if(atimetravel  == null && JSONData.Auto_Spinners == 1) {
        atimetravel = new Audio('/Content/Sounds/SpinGame/timetravel.mp3');
    }

    doAutoSpin();

    JSONData.Spent_Peppers += price;
    takePeppers(price);

    let totalspins = JSONData.Auto_Spinners;
    if (JSONData.Prestige >= 2) {
        totalspins = totalspins * JSONData.Prestige;
    }

    if (totalspins == 1) {
        Swal.fire("Purchase Successful!", "Every 1s, you will now earn 1 spin.", "success");
    } else {
        Swal.fire("Purchase Successful!", "Every 1s, you will now earn " + totalspins + " spins.", "success");
    }

    closeStore();
}

function getTimeTravelTimeLeft() {
    const currentTime = Date.now();
    return Math.max(0, 61 - ((currentTime - JSONData.Time_Travel) / 1000));
}

function buyTimeTravel() {
    if(!synced) {
        noSyncMsg();
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (iththvodl) {
        multiSessionMsg(true);
        return;
    }

    if (JSONData.Auto_Spinners < 1) {
        Swal.fire("Item Is Locked", "You need at least <strong>1</strong> Auto Spinner to Time Travel.", "info");
        if (playaudio) {
            alock.play();
        }
        return;
    }

    const ttt = getTimeTravelTimeLeft();
    if (ttt >= 1) {
        Swal.fire("Item Is Locked", "You are still traveling through time!<br><br>You have <strong>" + Math.round(ttt) + " seconds</strong> of Time Travel left", "info");
        if (playaudio) {
            alock.play();
        }
        return;
    }

    if (win || tepvbl >= 99990) {
        Swal.fire("Cannot Purchase", "You must Prestige in order to purchase this item.", "error");
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    const price = getTimeTravelPrice();
    const peppers = JSONData.Peppers;
    const missing = price - peppers;
    if (!(peppers >= price)) {
        if (playaudio) {
            aerr.play();
        }
        Swal.fire("Not Enough Peppers!", "You need <strong>" + missing + "</strong> more " + plural(missing, "pepper", "peppers") + " to Time Travel.", "error");
        return;
    }

    if (!timetravelwarning && JSONData.Auto_Spinners <= 2) {
        Swal.fire({
            title: 'Are You Sure?',
            html: 'You only have ' + JSONData.Auto_Spinners + ' ' + plural(JSONData.Auto_Spinners, "Auto Spinner", "Auto Spinners") + '. Time Traveling cost more each time you use it, and is stronger when you have more Auto Spinners!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Time Travel Anyways',
            cancelButtonText: 'Cancel Purchase'
        }).then((result) => {
            if (result.value) {
                timetravelwarning = true;
                buyTimeTravel();
                setTimeout(function() {
                    timetravelwarning = false;
                }, 100);
            }
        });
        return;
    }

    if (playaudio) {
        atimetravel.play();
    }


    JSONData.Time_Travel = Date.now();
    JSONData.Used_Time_Travels += 1;

    takePeppers(price);
    JSONData.Spent_Peppers += price;
    Swal.fire("Purchase Successful!", "For 60s your Auto Spinners will have 4x the power.", "success");
    closeStore();
}

function buySmokeAlarm() {
    if(!synced) {
        noSyncMsg();
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (iththvodl) {
        multiSessionMsg(true);
        return;
    }

    if (JSONData.Prestige < 2) {
        Swal.fire("Item Is Locked", "There's no need to purchase a Smoke Alarm, because you won't be able to burn empanadas until you Prestige.", "info");
        if (playaudio) {
            alock.play();
        }
        return;
    }

    if (tepvbl < 1000) {
        Swal.fire("Item Is Locked", "You don't need to worry about burnt empanadas until you pass 1,000 spins.", "info");
        if (playaudio) {
            alock.play();
        }
        return;
    }

    if (win || tepvbl >= 99990) {
        Swal.fire("Cannot Purchase", "You must Prestige in order to purchase this item.", "error");
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (JSONData.Smoke_Alarms >= 1) {
        Swal.fire("Max Smoke Alarms", "You can only purchase 1 Smoke Alarm for now.", "info");
        return;
    }

    const price = getSmokeAlarmPrice();
    const peppers = JSONData.Peppers;
    const missing = price - peppers;
    if (!(peppers >= price)) {
        if (playaudio) {
            aerr.play();
        }
        Swal.fire("Not Enough Peppers!", "You need <strong>" + missing + "</strong> more " + plural(missing, "pepper", "peppers") + " to purchase a Smoke Alarm.", "error");
        return;
    }

    if (!smokealarmwarning && tepvbl >= 50000) {
        Swal.fire({
            title: 'Are You Sure?',
            html: 'You are really close to 100,000 spins. Buying a Smoke Alarm this late may not be worth it. Once you Prestige, you lose your Smoke Alarm!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Buy Anyways',
            cancelButtonText: 'Cancel Purchase'
        }).then((result) => {
            if (result.value) {
                smokealarmwarning = true;
                buySmokeAlarm();
                setTimeout(function() {
                    smokealarmwarning = false;
                }, 100);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Purchase Canceled
            }
        });
        return;
    }

    pop();

    JSONData.Smoke_Alarms += 1;

    smokebox.style.display = null;
    smokenumber.innerHTML = JSONData.Spins_Until_Burnt;

    firebox.style.display = "none";
    if (showingflame) {
        smokefire.src = '/Content/Images/SpinGame/fire.png';
    }

    takePeppers(price);
    JSONData.Spent_Peppers += price;
    Swal.fire("Purchase Successful!", "You'll now be shown how many spins until a burnt Empanada appears!", "success");
    closeStore();
}

function buyGoldenEmpanadas() {
    if(!synced) {
        noSyncMsg();
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (iththvodl) {
        multiSessionMsg(true);
        return;
    }

    if (JSONData.Prestige < 10) {
        Swal.fire("Item Is Locked", "You'll unlock Golden Empanadas once you Prestige to Tier 10.", "info");
        if (playaudio) {
            alock.play();
        }
        return;
    }

    if (win || tepvbl >= 99990) {
        Swal.fire("Cannot Purchase", "You must Prestige in order to purchase this item.", "error");
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (JSONData.Golden_Empanadas >= 5) {
        Swal.fire("Max Golden Empanadas", "You can only purchase 5 Golden Empanada upgrades.", "info");
        return;
    }

    const price = getSmokeAlarmPrice();
    const peppers = JSONData.Peppers;
    const missing = price - peppers;
    if (!(peppers >= price)) {
        if (playaudio) {
            aerr.play();
        }
        Swal.fire("Not Enough Peppers!", "You need <strong>" + missing + "</strong> more " + plural(missing, "pepper", "peppers") + " to purchase Golden Empanadas.", "error");
        return;
    }

    if (!goldenempanadawarning && tepvbl >= 75000) {
        Swal.fire({
            title: 'Are You Sure?',
            html: 'You are really close to 100,000 spins. Buying Golden Empanadas this late may not be worth it, as once you reach 100k and Prestige, you lose your Golden Empanada booster!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Buy Anyways',
            cancelButtonText: 'Cancel Purchase'
        }).then((result) => {
            if (result.value) {
                goldenempanadawarning = true;
                buyGoldenEmpanadas();
                setTimeout(function() {
                    goldenempanadawarning = false;
                }, 100);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Purchase Canceled
            }
        });
        return;
    }

    pop();

    JSONData.Golden_Empanadas += 1;

    takePeppers(price);
    JSONData.Spent_Peppers += price;
    Swal.fire("Purchase Successful!", "At random, a Golden Empanada has 5% change of appearing every minute. Click it to get a burst of spins!", "success");
    closeStore();
    startGoldenTimer();
}

function buyExtinguisher() {
    if(!synced) {
        noSyncMsg();
        if (playaudio) {
            aerr.play();
        }
        return;
    }
    if (iththvodl) {
        multiSessionMsg(true);
        return;
    }

    if (JSONData.Prestige < 2) {
        Swal.fire("Item Is Locked", "There's no need to purchase an Extinguisher, because you can't burn empanadas until after you've Prestiged.", "info");
        if (playaudio) {
            alock.play();
        }
        return;
    }

    if (tepvbl < 1000) {
        Swal.fire("Item Is Locked", "You don't need to worry about burnt empanadas until you pass 1,000 spins.", "info");
        if (playaudio) {
            alock.play();
        }
        return;
    }

    if (win || tepvbl >= 99990) {
        Swal.fire("Cannot Purchase", "You must Prestige in order to purchase this item.", "error");
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (JSONData.Extinguishers >= 10) {
        Swal.fire("Max Extinguishers", "You can only hold 10 Fire Extinguishers.", "info");
        return;
    }

    const price = getExtPrice();
    const peppers = JSONData.Peppers;
    const missing = price - peppers;
    if (!(peppers >= price)) {
        if (playaudio) {
            aerr.play();
        }
        Swal.fire("Not Enough Peppers!", "You need <strong>" + missing + "</strong> more " + plural(missing, "pepper", "peppers") + " to purchase an Extinguisher.", "error");
        return;
    }
    pop();

    JSONData.Extinguishers += 1;

    if (JSONData.Extinguishers == 1) {
        // Show box if it's a first purchase.
        extinguisherbox.style.display = null;
    }

    takePeppers(price);
    JSONData.Spent_Peppers += price;

    extinguishernumber.innerHTML = JSONData.Extinguishers;
    Swal.fire("Purchase Successful!", "You now have an extra Extinguisher!<br>You can now click <strong>" + JSONData.Extinguishers + "</strong> " + plural(JSONData.Extinguishers, "Burnt Empanada", "Burnt Empanadas") + " without losing any spins.", "success");
    closeStore();
}

function buyAscend() {
    if(!synced) {
        noSyncMsg();
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (iththvodl) {
        multiSessionMsg(true);
        return;
    }

    if (JSONData.Prestige < 100) {
        Swal.fire("Item Is Locked", "You need Tier 100 or higher to Ascend.<br>You are currently on <strong>Tier " + JSONData.Prestige + "</strong>", "info");
        if (playaudio) {
            alock.play();
        }
        return;
    }

    if (tepvbl < 100000) {
        Swal.fire("Item Is Locked", "You'll need to have 100k Spins to Ascend.<br>Only <strong>" + (100000 - tepvbl) + "</strong> more spins to go!", "info");
        if (playaudio) {
            alock.play();
        }
        return;
    }

    confetti.stop();

    Swal.fire({
        title: "Are You Sure?",
        html: "This will reset your entire game back to the very beginning. If you want to keep your victory, you can change your mind at any point. However if you Ascend now, you cannot go back.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fas fa-cloud"></i>&nbsp;&nbsp;Ascend',
        confirmButtonAriaLabel: 'Ascend',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.value) {
            const originalaudio = playaudio;
            let ascendmsg = "As you gaze upon your remarkable achievements, you watch your noble Empanada answer its calling up in the clouds. Your hard work will forever be honored.<br><br>";
            const ascendaudio = new Audio('/Content/Sounds/SpinGame/ascend.mp3');

            if (playaudio) {
                ascendaudio.play();
            }

            playaudio = false;
            canclick = false;
            win = false;

            closeStore();
            closeSettings();

            emp.children[0].classList.remove('slowspin');
            emp.children[0].classList.remove('spin');
            emp.children[0].classList.add('slowspin');

            emp.style.transitionDuration = '8.0s';
            document.body.style.transitionDuration = '4.5s';
            document.body.style.backgroundColor = 'rgb(35, 35, 35)';

            storebutton.style.transitionDuration = '3.5s';
            rankinfo.style.transitionDuration = '3.5s';
            rankimg.style.transitionDuration = '3.5s';
            scoretxt.style.transitionDuration = '3.5s';
            storebutton.style.opacity = '0';
            rankimg.style.opacity = '0';
            rankinfo.style.opacity = '0';
            rankname.style.opacity = '0';
            scoretxt.style.opacity = '0';
            gear.style.opacity = '0';

            pepperbox.style.display = null;
            pepperbox.style.opacity = '0';
            pepperbox.style.transitionDuration = '3.5s';

            setTimeout(function() {
                emp.style.top = '-52%';
                gear.style.opacity = '0';
            }, 3500);

            setTimeout(function() {
                setTimeout(function() {
                    document.body.style.transitionDuration = null;
                    storebutton.style.transitionDuration = null;
                    rankinfo.style.transitionDuration = null;
                    rankimg.style.transitionDuration = null;
                    rankname.style.transitionDuration = null;
                    scoretxt.style.transitionDuration = null;
                    pepperbox.style.transitionDuration = null;
                }, 4000);
                document.body.style.backgroundColor = null;

                storebutton.style.opacity = null;
                rankimg.style.opacity = null;
                rankinfo.style.opacity = null;
                rankname.style.opacity = null;
                scoretxt.style.opacity = null;
                gear.style.opacity = null;
                pepperbox.style.opacity = null;

                deleteGameStorage(false, true, false);
                JSONData.Total_Resets += 1;
                canclick = true;
                closeStore();
                closeSettings();
                emp.style.transitionDuration = null;
                emp.style.top = null;
                if (JSONData.Total_Resets == 1) {
                    ascendmsg = "Your first ascension. You've worked tirelessly to spin your empanada. Just to give it all up and start from scratch? But fear not. This notable act of bravery will not go unnoticed. Only the strongest are willing to give up everything. In return, you have been awarded a shiny Rainbow Rank.";
                } else if(JSONData.Total_Resets == 2) {
                    ascendmsg = "Your second ascension. Even after giving it up all once, you have chosen the path of selflessness. Giving up everything is difficult, and doing so a second time even more so. Your name will be noteworthy in the book of Spin Masters.";
                } else if(JSONData.Total_Resets == 3) {
                    ascendmsg = "Your third ascension. Third times the charm, right? You're making this game look like a slice of cake. What keeps you going? Is it these ending ascension messages that change with every reset? Or is ambition driving you to extraordinary means? Only one way to find out.";
                } else if(JSONData.Total_Resets == 4) {
                    ascendmsg = "Your fourth ascension. Four acentions and several spins ago, our Spin Masters brought forth, upon this website, a new game, conceived in time-wasting and are committed to the proposition that all acentions are in good faith to progress to unknown heights.";
                } else if(JSONData.Total_Resets == 5) {
                    ascendmsg = "Five Ascentions?! Imma level with you and let you know this is the last custom ascention message. That's right folks I am way too tired to add more at the moment. Congratulations on your monumental work!";
                } else {
                    ascendmsg += "You've Ascended <strong>" + JSONData.Total_Resets + "</strong> " + plural(JSONData.Total_Resets, "time", "times") + " so far.";
                }
                Swal.fire("You've Ascended!", ascendmsg, "success");
                playaudio = originalaudio;
            }, 7500);
        } else {
            // Cancelled
            confetti.start();
            closeStore();
        }
    });
    discordWebhook("Game Progress", "Spin Game Ascension!", "{user} just Ascended. They have ascended " + plural(JSONData.Total_Reset, "time", "times") + " total and current have " + JSONData.Lifetime_Spins + " lifetime manual spins. Impressive!", "https://media.swncdn.com/cms/CW/faith/58093-stairs-heaven-1200.1200w.tn.webp", true);
}

function prestige() {
    if(!synced) {
        noSyncMsg();
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (iththvodl) {
        multiSessionMsg(true);
        return;
    }

    if (tepvbl <= 99999) {
        Swal.fire("Not Enough Spins!", "You need 100,000 Spins to be able to prestige.", "error");
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    const plevel = JSONData.Prestige;
    if (plevel >= 100) {
        Swal.fire("Max Prestige Level", "You are currently on Tier 100. This is the highest tier level available!", "info");
        return;
    }

    const nextp = plevel + 1;
    if (!prestigewarning) {
        Swal.fire({
            title: "Are You Sure?",
            html: "Great work on 100k spins! If you choose to Prestige, you will lose all of your spins and auto spinners. However, doing so will give you " + nextp + " spins for each click you make. (You will keep your Peppers)",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Prestige to Tier ' + nextp,
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                prestigewarning = true;
                prestige();
                setTimeout(function() {
                    prestigewarning = false;
                }, 100);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Cancelled
            }
        });
        return;
    }

    closeStore();

    if (plevel === 0 || plevel === 1) {
        JSONData.Prestige = 2;
    } else {
        JSONData.Prestige += 1;
    }

    if(lowquality && JSONData.Prestige >= 5) {
        toggleQuality();
    }
    pop();
    Swal.fire("Prestiged to Tier " + intToRoman(nextp), "You have prestiged to Tier " + nextp + ". Your spins have been reset back to zero, however you now have a " + nextp + "x Multipler on your spins!", "success");
    deleteGameStorage(true, true, false);
    discordWebhook("Game Progress", "Spin Game Prestige", "{user} just Prestiged to Tier " + nextp, "http://assets.stickpng.com/images/580b585b2edbce24c47b264e.png", true);
}

function saveGameData(storageonly, skipcooldown) {
   let now = new Date().getTime();
   const lastsavesecs = (now-lastsave)/1000;
   if(lastsavesecs < 15 && !skipcooldown) {
       // 15s general save cooldown.
       return;
   }

   if(!canStorage) {
        Swal.fire({
            icon: 'warning',
            title: 'Game Not Saved.',
            text: "We're not able to save your progress because you have browser storage & cookies disabled.",
            showConfirmButton: false,
            timer: 8000,
            toast: true,
            position: 'top'
        });
        return;
    }
    JSONData.Spins = tepvbl;
    if(signedin && !storageonly) {
        const lastserversavesecs = (now-lastserversave)/1000;
        if(lastserversavesecs >= 30 || skipcooldown) {
            saveToServer("spin", JSONData, !hasinitalsaved, true);
            lastserversave = now;
        }
    }
    setStorage("Spin_Data", JSON.stringify(JSONData));
    hasinitalsaved = true;
    lastsave = now;
}

function saveSettings() {
    setStorage("Spin_Settings", JSON.stringify(JSONSettings));
}
                                                  // if full = true, we reset the start date & lifetime spins.
function deleteGameStorage(skippres, skipascend, full) {
    document.title = pagetitle;
    if(full) {
        JSONData.Game_Started = date;
        JSONData.Lifetime_Spins = 0;
    }
    JSONData.AAC = 0;
    yrotlbfr = 0;
    JSONData.Auto_Spinners = 0;
    JSONData.Spins = 0;
    tepvbl = 0;
    JSONData.Extra_Spins = 0;
    JSONData.Smoke_Alarms = 0;
    JSONData.Extinguishers = 0;
    JSONData.Used_Extinguishers = 0;
    JSONData.Time_Travel = 0;
    JSONData.Used_Time_Travels = 0;
    JSONData.Rank = 0;
    if (!skippres) {
        JSONData.Prestige = 1;
    }
    if (!skipascend) {
        JSONData.Total_Resets = 0;
        rname.classList.remove('rainbow');
    }
    JSONData.AAC = 0;

    rankimg.src = '/Content/Images/blank.png';
    rankimg.width = "100";
    rname.innerHTML = "";
    rinfo.innerHTML = "";
    confetti.stop();

    if (canStorage) {
        pc.style.display = null;
        storebutton.style.display = null;
    }

    gear.style.display = null;
    smokebox.style.display = "none";
    extinguisherbox.style.display = "none";
    firebox.style.display = "none";
    showingflame = false;

    JSONData.Spins_Until_Burnt = 632 + Math.floor(Math.random() * 150); // Reset spins until burnt
    canclick = true;
    canupdatesave = true;
    canupdatestats = true;
    win = false;

    empimg.src = '/Content/Images/empanada.png';

    updateRank(false, true, true);
    updateShopData(true);
    emp.children[0].classList.remove('slowspin');
    emp.children[0].classList.remove('spin');

    storebutton.style.display = null;
    scoretxt.classList.remove('rainbow');
    scoretxt.classList.remove('zoom');

    scoretxt.innerHTML = "";
    smokenumber.innerHTML = 0;
    extinguishernumber.innerHTML = JSONData.Extinguishers;
    saveGameData(false, true);

    if(lowquality && JSONData.Prestige >= 5) {
        toggleQuality();
    }
}

function randomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Startup Code -----------------------
let startloadingms = new Date().getTime();
gear.style.display = "none";
pc.style.display = "none";

storebutton.style.display = "none";

confetti.stop();

setTimeout(function() {
    if (!hasgameloaded) {
        console.log("Game Failed to Load! (Running " + gameversion + ") :(");
        Swal.fire({
                icon: 'error',
                title: "Something isn't right here...",
                html: "The Spin Game is currently being unresponsive. This may be due to a slow connection, or an issue with the Spin Game itself. Try reloading the page!",
                showConfirmButton: true,
                confirmButtonText: '<i class="fas fa-redo-alt"></i>&nbsp;&nbsp;Reload Game',
                confirmButtonAriaLabel: 'Reload Game'
            }).then((result) => {
            if (result.value) {
                reloadPage();
            }
        });
    }
}, 30000);
// END of Startup Code -----------------


function userUpdatePeppers(e) { // Fired from peppers.js when pepper count changes.
    if(!synced || !peppershot) {
        return;
    }
    const pepstorage = getPeppers();
    if (pepstorage == null) {
        getPepperStorage();
        JSONData.Peppers = 0;
    } else {
        JSONData.Peppers = pepstorage;
    }
    updateShopData(false); // update shop data gets pepper count again. find a way to optimize?
    saveGameData(false, true);
}

function loadPlayerDataFromEvent(e) { // Fired after Storage checkedStorage
    loadPlayerData(true);
}

function onSGStorageUpdateEvent(e) { // Fired when storage is updated at all. I think.
    if (!hasgameloaded) {
        return;
    }
    if (e.key == "activepages") {
        if (!iththvodl) {
            closeSettings();
            closeStore();
            multiSessionMsg();
            gear.style.display = "none";
            storebutton.style.display = "none";
            iththvodl = true;
        }
    }
}

function multiSessionMsg(other=false) {
    if(other) {
        Swal.fire("Multiple Sessions Active", "You have more than one instance of the game open. Please reload the page and try again.", "error");
        if (playaudio) {
            aerr.play();
        }
        return;
    }
    Swal.fire({
        icon: 'warning',
        title: "Multiple Sessions Active",
        html: "You've opened the Spin Game in a new tab! To prevent your progress being overwritten, we've paused this game. You may resume this game by clicking the button below.",
        showConfirmButton: true,
        confirmButtonText: '<i class="fas fa-redo-alt"></i>&nbsp;&nbsp;Resume Game',
        confirmButtonAriaLabel: 'Resume Game'
    }).then((result) => {
        if (result.value) {
            localStorage.activepages = Date.now();
            iththvodl = false;
            gear.style.display = null;
            storebutton.style.display = null;
            document.getElementById("content").style.display = "none";
            thinkingPrompt("Resuming Game...");
            loadPlayerData(false);
        }
    });
}

function startFailsafeTimers() {
    setTimeout(function() {
    if(!accountfetch) {
        Swal.fire({
            icon: 'warning',
            title: "Slow Connection",
            html: "&nbsp;&nbsp;Fetching your data is taking longer than usual...",
            showConfirmButton: false,
            toast: true,
            position: 'top',
            timer: 10000,
            timerProgressBar: false
        });
        setTimeout(function() {
            if(!accountfetch && !signedin) {
            Swal.fire({
                icon: 'error',
                title: "Failed To Connect",
                html: "&nbsp;&nbsp;We were unable to fetch your account information.",
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 10000,
                timerProgressBar: false
            });
                postDataSet(true);
                console.log("Couldn't fetch server results AT ALL. Defaulting to storage.");
            }
        }, 10000);
    }
    }, 10000);
}

let finishedimgpreload = false;
function loadPlayerData(startup) {
    if (!canStorage || !canCookies) {
        Swal.fire("Cookies Are Disabled", "We use Cookies & Storage on your browser to save and restore your game progress. Enable these features to save your progress!", "warning");
        if (startup) {
            finishLoading();
        }
        return;
    }
    document.getElementById("content").style.display = "none";
    if(!finishedimgpreload && startup) {
        document.title = pagetitle;
        localStorage.activepages = Date.now(); // Broadcasts this tab has opened for session check.
        setTimeout(function() {
            window.addEventListener("storage", onSGStorageUpdateEvent, false); // Add event AFTER storage check.
        }, 100);

        document.getElementById("loadingstatus").innerHTML = "Downloading...";
        preloadImages([
            '/Content/Images/SpinGame/burnt_empanada.png',
            '/Content/Images/SpinGame/Medals/1.png',
            '/Content/Images/SpinGame/Medals/2.png',
            '/Content/Images/SpinGame/Medals/3.png',
            '/Content/Images/SpinGame/Medals/4.gif',
            '/Content/Images/SpinGame/Medals/5.gif',
            '/Content/Images/SpinGame/Medals/6.gif'
        ], function(){
            finishedimgpreload = true;
            loadPlayerData(startup);
        });
        return;
    }

    startFailsafeTimers();

    getBoosters();

    if (startup) {
        document.getElementById("loadingstatus").innerHTML = "Syncing...";
    }

    getServerSave();

    if(getStorage("Spin_Settings") != null) {
        JSONSettings = JSON.parse(getStorage("Spin_Settings"));
    }

    if (JSONSettings.lowquality) {
        if(JSONData.Prestige < 5) {
            lowquality = true;
        }
    }

    if (JSONSettings.muted) {
        playaudio = false;
    } else {
        playaudio = true;
    }

    const ssm = getSStorage("Spin_Menu");
    if (ssm != null) {
        if (ssm == "true") {
            openStore();
        } else {
            closeStore();
        }
    }
}

function postDataSet(startup) {
    let saveend = false;
    peppershot = false;
    if(startup) {
        document.getElementById("loadingstatus").innerHTML = "Setting Data...";
    } else {
        saveend = true;
    }

    let SpinStorage = getStorage("Spin_Data");
    let ServerJSON;
    if(!serverhadnullreply && signedin && accountfetch && accountData.Spin_Game != null) {
        ServerJSON = accountData.Spin_Game;
    }

    try {
        let parsedjson;
        if(SpinStorage != null) {
            parsedjson = JSON.parse(SpinStorage);
            console.log("Found Spin Storage. (Storage was not null)");
        }
        if(SpinStorage != null && (!signedin || !accountfetch || serverhadnullreply || ServerJSON == null ||
        parsedjson.Total_Resets > ServerJSON.Total_Resets || // Use storage if it has more ascentions
        parsedjson.Prestige > ServerJSON.Prestige && parsedjson.Total_Resets >= ServerJSON.Total_Resets || // Use storage if it has a higher prestige and greater or equal ascention
        (parsedjson.Spins > ServerJSON.Spins && parsedjson.Prestige >= ServerJSON.Prestige && parsedjson.Total_Resets >= ServerJSON.Total_Resets))) { // If prestige and Resets are greater or equal, and spins are higher, use storage.

            JSONData = parsedjson;
            tepvbl = parsedjson.Spins;
            if(startup) {
                console.log("Using storage, it's better progressed than server.");
            }
            saveend = true;
        } else if(accountfetch && signedin && !serverhadnullreply) {
            JSONData = ServerJSON;
            tepvbl = ServerJSON.Spins;
            console.log("Using server, it's better progressed than storage.");
            saveGameData(true, true); // Storage Only Save
            if(JSONData.Peppers !== getPeppers()) {
                saveend = true;
                bespep(JSONData.Peppers, true);
            }
        } else {
            console.log("No data placed.");
        }
    } catch (err) {
        if(startup) {
            document.getElementById("loadingstatus").innerHTML = "Data Error.";
        }
        Swal.fire("Data Error", "We found your previous game,<br>but couldn't restore it properly.<br>Feel free to contact us about this!<br><br><br><strong>Error:</strong><br>" + err.message, "warning");
        console.log("Couldn't read player data JSON: " + err.message);
        deleteStorage("Spin_Data");
        saveend = false;
    }
    if (JSONData.Prestige >= 2 && tepvbl >= 1000) {
        const sub = JSONData.Spins_Until_Burnt;
        if (sub <= 10) {
            JSONData.Spins_Until_Burnt = 11;
            saveend = true;
        }
    }

    // Update Data

    if(JSONData.Data_Version == null || latestdataversion > JSONData.Data_Version) {
        if(JSONData.Data_Version == null) {
            JSONData.Data_Version = 0;
        }
        const cdv = JSONData.Data_Version;
        if(JSONData.Spent_Peppers == null || cdv <= 3) {
            JSONData.Spent_Peppers = 0;
        }
        if(JSONData.Burnt_Clicks == null || cdv <= 4) {
            JSONData.Burnt_Clicks = 0;
        }
        if(JSONData.Burnt_Clicks == null || cdv <= 5) {
            JSONData.Golden_Empanadas = 0;
        }
        if(JSONData.Burnt_Clicks == null || cdv <= 6) {
            JSONData.Bonus_Spins = 0;
        }
        JSONData.Data_Version = latestdataversion;
        saveend = true;
        console.log("Updating user data from version " + cdv + " to version " + latestdataversion);
    }

    // End of Data Updates

    if (JSONData.Total_Resets >= 1) {
        rname.classList.add('rainbow');
    } else {
        rname.classList.remove('rainbow');
    }

    updateSoundIcon();
    updateQualityIcon();
    updateShopData(true);
    updateRank(false, true, false);

    if (JSONData.Game_Started == null || JSONData.Game_Started === 0 || new Date(JSONData.Game_Started) == "Invalid Date" || new Date(JSONData.Game_Started).getFullYear() <= 2018) {
        JSONData.Game_Started = date;
        saveend = true;
    }

    canupdatesave = false;
    setTimeout(function() {
        canupdatesave = true;
    }, 15222); // 15.2s

    JSONData.Game_Version = gameversion;
    JSONData.Peppers = getPeppers();

    if (saveend && tepvbl >= 10) {
        saveGameData(false, true);
    } else {
        updateSyncData("spin");
    }

    updateGameInfoTip();
    if(startup) {
        finishLoading();
    } else {
        document.getElementById("content").style.display = null;
        if(ssid == 0) {
            Swal.close();
        }
        doAutoSpin(); // start auto spinners automatically after loading
    }
    peppershot = true;
}

function finishedDataToServer(e) {
    // Called when data is saved to server.
    updateAccountIcon(false);
}

function finishedDataFromServer(e) {
    updateAccountIcon(false);
    if(!hasgameloaded) {
        postDataSet(true);
    } else {
        postDataSet(false);
    }
}

function updateGameInfoTip() {
  const startdate = new Date(JSONData.Game_Started).toDateString();
  let gitip = "<i class='fas fa-book'></i>&nbsp;&nbsp;<strong>Game Info</strong><br>General information about this game.";
  gitip += "<br><br><strong>Lifetime Spins:</strong> " + JSONData.Lifetime_Spins + "<br>";
  gitip += "<strong>You Started:</strong> " + startdate + "<br>";
  gitip += "<br><strong>Game Version:</strong> " + gameversion;
  gameinfotip.setProps({
      content: gitip
  });
}

function finishLoading() {
    if (hasgameloaded) {
        return;
    }

    if(signedin && ssid == 0) {
        Swal.close();
    }

    if(JSONData.Auto_Spinners >= 1) {
        atimetravel = new Audio('/Content/Sounds/SpinGame/timetravel.mp3');
    }

    window.removeEventListener("checkedStorage", loadPlayerDataFromEvent);

    document.getElementById("loadingstatus").innerHTML = "Done!";
    document.getElementById("no-script").parentNode.removeChild(document.getElementById("no-script"));

    const currenttime = new Date().getTime();
    const loadtime = currenttime - startloadingms;
    console.log("Done in " + loadtime + "ms! Running Empanada Spin, by Zach (" + gameversion + ")");

    hasgameloaded = true;

    document.getElementById("content").style.display = null;
    document.getElementById("loader").parentNode.removeChild(document.getElementById("loader"));
    startGoldenTimer();

    if (getTimeTravelTimeLeft() > 1) {
        const normalvalue = playaudio;
        playaudio = false;
        doSpin(true, true);
        playaudio = normalvalue;
    }
}

//function addSombrero() {
//    let hat = document.createElement("img");
//    hat.setAttribute("src", "/Content/Images/sombrero.png");
//    hat.setAttribute("width", "200");
//    document.getElementById("hats").appendChild(hat);
//}


function gameBackOnline(e) {
    console.log("Game is Online again! Checking server for updates...");
    getServerSave();
}

function gameWentOffline(e) {
    if(signedin) {
        signedin = false;
        Swal.fire({
            icon: 'warning',
            title: 'Connection Lost.',
            text: "Check your internet connection.",
            showConfirmButton: false,
            timer: 8000,
            toast: true,
            position: 'top'
        });
    }
    updateAccountIcon(true);
}

let currentboostid = 0;
function finishedBoosters() {
    if(ssid == currentboostid) {
        return;
    }
    currentboostid = ssid;
    Swal.fire(ssmh, ssmm, "info");
}

function empanadaClicked() {
    // User Clicked
    doSpin(false, false);
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        empanadaClicked();
    }
}

function doAutoSpin() {
    if (autospinning || JSONData.Auto_Spinners === 0 || iththvodl || !synced) {
        return;
    }
    autospinning = true;
    doSpin(true, false);
    setTimeout(function() {
        autospinning = false;
        doAutoSpin();
        setTimeout(function() {
            if (JSONData.Time_Travel !== 0) {
                const timeleft = getTimeTravelTimeLeft();
                if (timeleft > 0) {
                    doSpin(true, false);
                    setTimeout(function() {
                        doSpin(true, false);
                        setTimeout(function() {
                            doSpin(true, false);
                        }, 250);
                    }, 250);
                    timetraveltip.setProps({
                        content: "<i class='fas fa-history fa-flip-horizontal'></i>&nbsp;&nbsp;<strong>Time Travel</strong><br>Increases your Auto Spinners<br>to four times the power for 60 seconds.<br><br>Time Travel Active:<br><strong>" + Math.round(timeleft) + "</strong>" + " seconds remaining." //avoid plural call to save resources
                    });
                } else {
                    JSONData.Time_Travel = 0;
                    updateShopData(false);
                    const ttprice = getTimeTravelPrice();
                    if (JSONData.Peppers >= ttprice) {
                        Swal.fire({
                            icon: 'info',
                            html: "&nbsp;&nbsp;&nbsp;Your time traveling has ended.",
                            showConfirmButton: true,
                            confirmButtonText: 'Buy Again&nbsp;&nbsp;' + getTimeTravelPrice() + '&nbsp;<i class = "fas fas fa-pepper-hot"></i>',
                            confirmButtonAriaLabel: 'Buy Again',
                            toast: true,
                            position: 'top',
                            timer: 12000,
                            timerProgressBar: true
                        }).then((result) => {
                            if (result.value) {
                                buyTimeTravel();
                            }
                        });
                    } else {
                        Swal.fire({
                            icon: 'info',
                            html: "&nbsp;&nbsp;Your time traveling has ended.",
                            showConfirmButton: false,
                            toast: true,
                            position: 'top',
                            timer: 6000,
                            timerProgressBar: false
                        });
                    }
                }
            }
        }, 250);
    }, 1000);
}

function clcGEmp(wasclick=false, id) {
    var gid = document.getElementById(id);
    if(typeof(gid) == 'undefined' && gid == null) {
        return;
    }
    gid.remove();
    if(wasclick) {
        let bonus = JSONData.Golden_Empanadas*(JSONData.Prestige)*2;
        for (var i = 0; i < bonus; i += 3) {
            setTimeout(function(){
                doSpin(true, true);
            }, 50*i);
        }
        console.log("Golden Empanada Click Bonus: " + bonus);
    }
}

function cGEmp() {
    if(JSONData.Golden_Empanadas == 0) {
        return;
    }
    var img = document.createElement("img");
    img.src = "/Content/Images/SpinGame/golden_empanada.png";
    img.id = randomId(5);
    img.style.zIndex = 101;
    img.style.position = "absolute";
    img.style.cursor = "pointer";
    img.style.left = Math.floor((Math.random() * 75) + 15) + "%";
    img.style.top = Math.floor((Math.random() * 75) + 15) + "%";
    img.width = "" + Math.floor((Math.random() * 42) + 28) + "";
    //img.style.transform = 'rotate('+Math.floor((Math.random() * 50) + -50)+'deg)';
    img.classList.add('fa-spin');
    document.body.appendChild(img);
    const gid = document.getElementById(img.id);
    gid.addEventListener("click", function(){
        clcGEmp(true, img.id);
    });
    setTimeout(function(){
        gid.removeEventListener("click", function(){
            clcGEmp(true, img.id);
        });
        clcGEmp(false, img.id);
    }, 10000);
}

function rndgemp() {
    if(!hasgameloaded) {
        return;
    }
    if(Math.floor((Math.random() * 20) + 1) == 5) { // 5%
        cGEmp();
    }
}

let gdntia = false;
function startGoldenTimer() {
    if(gdntia || JSONData.Golden_Empanadas == 0) {
        return;
    }
    gdntia = true;
    let loop = setInterval(() => {
        if(JSONData.Golden_Empanadas == 0) {
            clearInterval(loop);
        } else {
            rndgemp();
        }
    }, 60356);
}

// Price Calculators
function getAutoSpinPrice() {
    let price = 8;
    price += JSONData.Auto_Spinners;
    if (JSONData.Prestige >= 2) {
        price = price + (JSONData.Prestige / 8);
    }
    return Math.round(price);
}

function getGoldenEmpanadasPrice() {
    let price = 32;
    price += (JSONData.Golden_Empanadas)*3;
    return price;
}

function getExtPrice() {
    let price = 3;
    price += JSONData.Extinguishers;
    price += JSONData.Used_Extinguishers;
    return price;
}

function getSmokeAlarmPrice() {
    let price = 25;
    if (JSONData.Prestige >= 3) {
        price -= (price * ((JSONData.Prestige / 1.5) * 0.01));
    }
    return Math.round(price);
}

function getTimeTravelPrice() {
    let price = 2;
    price += (getAutoSpinPrice()*1.15);
    price += Math.pow(JSONData.Auto_Spinners, 1.1);
    price += (JSONData.Used_Time_Travels * 1.45);
    if(spins >= 80000) {
        price -= 1;
    }
    return Math.round(price);
}
// End of Price Calcs

// Custom Event Polyfill for Older Browsers (Below Safari 10 and IE 9)
(function() {

    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        let evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

// Settings Menu -----------
function openSettings() {
    if (settingscooldown) {
        return;
    }
    settingscooldown = true;
    updateGameInfoTip();
    settingspage.style.height = "100%";
    gear.style.opacity = "0.0";
    setTimeout(function() {
        settingscooldown = false;
    }, 155);
}

function closeSettings() {
    if (settingscooldown) {
        return;
    }
    settingscooldown = true;
    settingspage.style.height = "0%";

    setTimeout(function() {
        gear.style.opacity = "1";
        settingscooldown = false;
    }, 155);
}

function toggleSound() {
    if (playaudio) {
        playaudio = false;
        JSONSettings.muted = true;
        saveSettings();
    } else {
        playaudio = true;
        a3.play();
        JSONSettings.muted = false;
        saveSettings();
    }
    updateSoundIcon();
}

function toggleQuality() {
    if (lowquality) {
        lowquality = false;
        JSONSettings.lowquality = false;
        saveSettings();
    } else if(JSONData.Prestige >= 5) {
         Swal.fire({
            icon: 'error',
            html: "&nbsp;&nbsp;To prevent losing peppers, you cannot use Low Quality mode when at Tier 5 or higher.",
            showConfirmButton: false,
            toast: true,
            position: 'top',
            timer: 5000,
            timerProgressBar: false
        });
        if(playaudio) {
            aerr.play();
        }
    } else {
        lowquality = true;
        JSONSettings.lowquality = true;
        saveSettings();
    }
    updateQualityIcon();
}

function udpateAccountIcon() {
    if (signedin) {
        document.getElementById('accounticon').innerHTML = '<i class="fas fa-user-circle"></i>&nbsp;&nbsp;View Account';
    } else {
        document.getElementById('accounticon').innerHTML = '<i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Sign In';
    }
}
function updateSoundIcon() {
    if (playaudio) {
        document.getElementById('soundicon').innerHTML = '<i class="fas fa-volume-up"></i>&nbsp;&nbsp;Sound On';
    } else {
        document.getElementById('soundicon').innerHTML = '<i class="fas fa-volume-mute"></i>&nbsp;&nbsp;Sound Off';
    }
}

function updateQualityIcon() {
    const qicon = document.getElementById('qualityicon');
    if(JSONData.Prestige >= 5) {
        qicon.style.opacity = 0.4;
    }
    if (lowquality) {
        document.title = pagetitle;
        upgrademenu.style.background = "linear-gradient(90deg, rgba(111, 101, 245) 0%, rgba(0, 212, 255) 100%)";
        qicon.innerHTML = '<i class="fas fa-battery-quarter"></i></i>&nbsp;&nbsp;Reduced Quality';
        confetti.gradient = false;
    } else {
        confetti.gradient = true;
        upgrademenu.style.background = null;
        qicon.innerHTML = '<i class="fas fa-bolt"></i>&nbsp;&nbsp;Normal Quality';
    }
}

function updateAccountIcon(loading) {
    const aicon = document.getElementById('accounticon');
    if (accountfetch && signedin) {
        aicon.innerHTML = '<i class="fas fa-user"></i>&nbsp;&nbsp;Manage Account';
        aicon.href = "/server/dashboard";
    } else if(loading) {
        aicon.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>&nbsp;&nbsp;Reconnecting...';
        aicon.href = "/server/dashboard";
    } else {
        aicon.innerHTML = '<i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Login to Account';
        aicon.href = "/server/login?redirect=spin";
    }
}

// End of Settings Menu stuff

// Upgrade Menu -----------------------------------------------
function updateShopData(forceUpdate) {
    if (!forceUpdate && upgrademenu.style.width == "0px") {
        return;
    }

    const peppers = JSONData.Peppers;

    const autoprice = getAutoSpinPrice();
    const extprice = getExtPrice();
    const smokealarmprice = getSmokeAlarmPrice();
    const timetravelprice = getTimeTravelPrice();
    const goldenprice = getGoldenEmpanadasPrice();

    if (peppers < autoprice || win || tepvbl >= 100000) {
        autospinitem.style.opacity = "0.35";
    } else {
        autospinitem.style.opacity = "1";
    }

    if (peppers < extprice || JSONData.Prestige < 2 || tepvbl < 1000 || JSONData.Extinguishers >= 10 || win || tepvbl >= 100000) {
        extinguisheritem.style.opacity = "0.35";
    } else {
        extinguisheritem.style.opacity = "1";
    }

    if (peppers < timetravelprice || JSONData.Auto_Spinners < 1 || JSONData.Time_Travel !== 0) {
        timetravelitem.style.opacity = "0.35";
    } else {
        timetravelitem.style.opacity = "1";
    }

    if (peppers < smokealarmprice || JSONData.Prestige < 2 || tepvbl < 1000 || JSONData.Smoke_Alarms >= 1 || win || tepvbl >= 100000) {
        smokealarmitem.style.opacity = "0.35";
    } else {
        smokealarmitem.style.opacity = "1";
    }


    if (peppers < goldenprice || JSONData.Golden_Empanadas > 5 || JSONData.Prestige < 5) {
        goldenitem.style.opacity = "0.35";
    } else {
        goldenitem.style.opacity = "1";
    }

    if (tepvbl < 100000 || JSONData.Prestige < 100) {
        if (JSONData.Prestige >= 100 || JSONData.Total_Resets >= 1) {
            ascenditem.style.display = null;
            ascenditem.style.opacity = "0.35";
        } else {
            ascenditem.style.display = "none";
            ascenditem.style.opacity = null;
        }
    } else {
        ascenditem.style.display = null;
        ascenditem.style.opacity = "1";
    }

    if (tepvbl >= 100000 && JSONData.Prestige < 100) {
        prestigeitem.style.display = null;
        prestigeitem.style.opacity = "1";
    } else {
        if (JSONData.Prestige >= 100) {
            prestigeitem.style.display = "none";
            prestigeitem.style.opacity = null;
        } else {
            prestigeitem.style.display = null;
            prestigeitem.style.opacity = "0.35";
        }
    }

    let autospintipmsg = "<i class='fas fa-robot'></i>&nbsp;&nbsp;<strong>Auto Spinner</strong><br>Automatically spins your empanada for you.";
    if (JSONData.Auto_Spinners >= 1) {
        autospintipmsg += "<br><br>You currently have <strong>" + JSONData.Auto_Spinners + "</strong> " + plural(JSONData.Auto_Spinners, "Auto Spinner", "Auto Spinners") + ".";
        if (JSONData.Prestige >= 2 || JSONData.Time_Travel != 0) {
            let spinspersec;
            if (JSONData.Prestige >= 2) {
                spinspersec = (JSONData.Auto_Spinners * JSONData.Prestige);
            } else {
                spinspersec = JSONData.Auto_Spinners;
            }
            if (JSONData.Time_Travel != 0) {
                spinspersec = spinspersec * 4;
            }
            autospintipmsg += "<br>Generating <strong>" + spinspersec + "</strong> spins every second.";
        }
    }
    autospintip.setProps({
        content: autospintipmsg
    });

    let exttip = "<i class='fas fa-fire-extinguisher'></i>&nbsp;&nbsp;<strong>Extinguisher</strong><br>Lets you click on a burnt empanada without losing any of your spins!";
    let smoketip = "<i class='fas fa-fire-alt'></i>&nbsp;&nbsp;<strong>Smoke Alarm</strong><br>A device strong enough to tell you exactly how many spins until a burnt empanada appears!";
    if (JSONData.Prestige >= 2 && tepvbl >= 1000) {
        if (JSONData.Extinguishers >= 1 || JSONData.Used_Extinguishers >= 1) {
            if (JSONData.Used_Extinguishers == 0) {
                exttip + "<br><br>You currently have <strong>" + JSONData.Extinguishers + "</strong> " + plural(JSONData.Extinguishers, "Extinguisher", "Extinguishers") + ".";
            } else {
                exttip += "<br><br>You currently have <strong>" + JSONData.Extinguishers + "</strong> " + plural(JSONData.Extinguishers, "Extinguisher", "Extinguishers") + ".<br>You've used <strong>" + JSONData.Used_Extinguishers + "</strong> " + plural(JSONData.Used_Extinguishers, "Extinguisher", "Extinguishers") + " this round.";
            }
        }
    } else {
        if (JSONData.Prestige >= 2) {
            exttip = "<i class='fas fa-lock'></i>&nbsp;&nbsp;<strong>Extinguisher</strong><br>This item is locked!<br><br>You need over <strong>1,000</strong> spins to unlock.";
            smoketip = "<i class='fas fa-lock'></i>&nbsp;&nbsp;<strong>Smoke Alarm</strong><br>This item is locked!<br><br>You need over <strong>1,000</strong> spins to unlock.";
        } else {
            exttip = "<i class='fas fa-lock'></i>&nbsp;&nbsp;<strong>Extinguisher</strong><br>This item is locked!<br><br>You need <strong>Tier 2</strong> or higher to purchase.";
            smoketip = "<i class='fas fa-lock'></i>&nbsp;&nbsp;<strong>Smoke Alarm</strong><br>This item is locked!<br><br>You need <strong>Tier 2</strong> or higher to purchase.";
        }
    }

    extinguishertip.setProps({
        content: exttip
    });

    smokealarmtip.setProps({
        content: smoketip
    });

    let ascendtipmsg;
    if (tepvbl >= 100000 || JSONData.Prestige >= 100) {
        ascendtipmsg = "<i class='fas fa-cloud'></i>&nbsp;&nbsp;<strong>Ascend</strong><br>Lift your Empanada to the clouds<br>as a sacrifice to the sky!";
        if (JSONData.Total_Resets >= 1) {
            ascendtipmsg += "<br><br>You have Ascended <strong>" + JSONData.Total_Resets + "</strong> " + plural(JSONData.Total_Resets, "time", "times") + ".";
        }
    } else {
        ascendtipmsg = "<i class='fas fa-lock'></i>&nbsp;&nbsp;<strong>Ascend</strong><br>This item is locked!<br>You need 100k spins & Tier 100 to buy this.";
        if (JSONData.Total_Resets >= 1) {
            ascendtipmsg += "<br><br>You have Ascended <strong>" + JSONData.Total_Resets + "</strong> " + plural(JSONData.Total_Resets, "time", "times") + ".";
        }
    }

    ascendtip.setProps({
        content: ascendtipmsg
    });

    if (JSONData.Time_Travel == 0) {
        if (JSONData.Auto_Spinners >= 1) {
            const timetraveldesc = "<i class='fas fa-history fa-flip-horizontal'></i>&nbsp;&nbsp;<strong>Time Travel</strong><br>Increases your Auto Spinners<br>to four times the power for 60 seconds.";
            if (JSONData.Used_Time_Travels == 0) {
                timetraveltip.setProps({
                    content: timetraveldesc
                });
            } else {
                timetraveltip.setProps({
                    content: timetraveldesc + "<br><br>You've time traveled <strong>" + JSONData.Used_Time_Travels + "</strong> " + plural(JSONData.Used_Time_Travels, "time", "times") + " in this round."
                });
            }
        } else {
            timetraveltip.setProps({
                content: "<i class='fas fa-lock'></i>&nbsp;&nbsp;<strong>Time Travel</strong><br>This item is locked!<br><br>You need at least <strong>1</strong> Auto Spinner."
            });
        }
    }

    let goldtipmsg = "<i class='fas fa-star'></i>&nbsp;&nbsp;<strong>Golden Empanadas</strong><br>Spawns Golden Empanadas at random. Click them for a burst of bonus spins! Upgrade to increase the spin bonus.";
    if (JSONData.Golden_Empanadas >= 1) {
        goldtipmsg += "<br><br>You currently have <strong>" + JSONData.Golden_Empanadas + "</strong> " + plural(JSONData.Golden_Empanadas, "Golden Boost", "Golden Boosters") + ".";
    }
    goldtip.setProps({
        content: goldtipmsg
    });

    if (JSONData.Time_Travel == 0) {
        timetraveliconid.className = 'fas fa-history fa-flip-horizontal';
    } else {
        timetraveliconid.className = 'far fa-clock fa-spin';
    }

    prestigetip.setProps({
        content: "<i class='fas fa-meteor'></i>&nbsp;&nbsp;<strong>Prestige</strong><br>Legend has it that the prestige is so powerful, its aura gives extra spins.<br><br>You are on <strong>Tier " + JSONData.Prestige + "</strong>"
    });

    autospinpriceid.innerHTML = autoprice;
    extinguisherpriceid.innerHTML = extprice;
    smokealarmpriceid.innerHTML = smokealarmprice;
    timetravelpriceid.innerHTML = timetravelprice;
    goldenpriceid.innerHTML = goldenprice;

}

function openStore() {
    if(!hasgameloaded) {
        return;
    }
    if(!synced) {
        noSyncMsg();
        if (playaudio) {
            aerr.play();
        }
        return;
    }

    if (iththvodl) {
        multiSessionMsg(true);
        return;
    }

    if (shopcooldown || !upgrademenu.style.width == "0px") {
        return;
    }

    shopcooldown = true;

    if (document.body.clientWidth > 550) {
        upgrademenu.style.width = "325px";
        pc.style.marginRight = "322px";
        if (JSONData.Smoke_Alarms >= 1) {
            smokebox.style.marginRight = "322px";
        } else {
            firebox.style.marginRight = "322px";
        }
        extinguisherbox.style.marginRight = "322px";
    } else {
        // most likely mobile
        upgrademenu.style.width = "260px";
    }
    storebutton.style.opacity = "0.0";
    document.getElementById("closebtn").style.opacity = "0.85";
    setSStorage("Spin_Menu", true);

    let inputs = document.getElementsByName("shopitem");
    for (let xs = 0; xs < inputs.length; xs += 1) {
        inputs[xs].style.display = null;
    }

    setTimeout(function() {
        for (let xs = 0; xs < inputs.length; xs += 1) {
            inputs[xs].style.opacity = "1";
        }

    }, 50);

    setTimeout(function() {
        shopcooldown = false;
    }, 510);

    upgrademenu = document.getElementById("upgrades");

    setTimeout(function() {
        updateShopData(false);
    }, 100);
}

function closeStore() {
    if (shopcooldown || upgrademenu.style.width == "0px") {
        return;
    }

    shopcooldown = true;

    upgrademenu.style.width = "0";
    storebutton.style.opacity = "1.0";
    document.getElementById("closebtn").style.opacity = "0.0";
    pc.style.marginRight = null;
    smokebox.style.marginRight = null;
    firebox.style.marginRight = null;
    extinguisherbox.style.marginRight = null;
    setSStorage("Spin_Menu", false);

    let inputs = document.getElementsByName("shopitem");
    for (let xs = 0; xs < inputs.length; xs += 1) {
        inputs[xs].style.opacity = "0";
    }

    setTimeout(function() {
        for (let xs = 0; xs < inputs.length; xs += 1) {
            inputs[xs].style.display = "none";
        }
        shopcooldown = false;
    }, 510);

    upgrademenu = document.getElementById("upgrades");
}

// Prevent Double Tap on Mobile
var doubleTouchStartTimestamp = 0;
document.addEventListener("touchstart", function(event){
    var now = +(new Date());
    if (doubleTouchStartTimestamp + 500 > now){
        event.preventDefault();
    };
    doubleTouchStartTimestamp = now;
});
