const CLIENT_ID = 'keECa1lpVtgABa1F';
const splash=document.querySelector('.splash');
const stuffjs=document.querySelector('.stuff');
const memberlist=document.querySelector('.members-list')
const messagelist=document.querySelector('.messages')
const msgforminput=document.querySelector('.message-form__input');
const msgformbutton=document.querySelector('.message-form__button');
const settingsbutton=document.querySelector('.settingsbutton');
const settings=document.querySelector('.settings');
const credit=document.querySelector('.credit')
var notifselect2;
var yourname;
const timestamplist=document.querySelector('.timestamps')
var memberlisted=document.querySelector('.members-list');
var timealr=false;
var darkmode;
var notificationsetting2=false;
var notifselect;
var isDarkMade;
var notifsetting2;
var notifsetting;
var notificationsetting=false;
var darkmodeselect;
var encodedhours;
var ampm;
var para;
let members = [];
var lastuser,lastmsg,lastusercontent;
function newnotif(){
  lastmsg=messagelist.lastElementChild;
  lastuser=lastmsg.firstElementChild.textContent.length;
  lastusercontent=lastmsg.firstElementChild.textContent;
  console.log(lastmsg,lastuser,lastusercontent);
  if(notificationsetting==true&&notificationsetting2==false&&lastusercontent!=yourname){
  const greeting = new Notification('New activity on FloofChat!',{
    body: "User "+lastusercontent+' says '+messagelist.lastElementChild.textContent.slice(lastuser),
    icon: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png'
  });}
  if(notificationsetting2==true&&notificationsetting==false){
    const greeting = new Notification('New user on FloofChat!',{
      body: "i",
      icon: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png'
    });}
    if(notificationsetting==true&&notificationsetting2==true){
      const greeting = new Notification('New alert from FloofChat!',{
        body: "You thought you would find a weird bug by selecting both notification settings. Well, there is no bug so that just proves you're stupid. Select one setting or the other like a normal person",
        icon: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png'
      });}
  messagelist.scrollIntoView(lastmsg);
  
}
/*const settingsimg=document.querySelector('.settingsimg');*/
const collapsesetting=document.querySelector('.collapsesettings');
messagelist.addEventListener ("DOMNodeInserted", (e)=>{
  console.log(Event.target)
  newnotif();
  
});
memberlisted.addEventListener("DOMNodeInserted",(e)=>{
  
})

var isSettingPressed=false;
//This is function for making dark mode button. I made it a function bc I might want to make more theme options later and want 
//code to be reusable
function addButton(val,color,color2){
  darkmode=document.createElement("button",value=val )
  darkmode.classList.add('darkmode')
  settings.appendChild(darkmode)
  darkmode.innerHTML="Enable Dark Mode"
  darkmodeselect=document.querySelector('.darkmode');
  isDarkMade=true;
  darkmodeselect.addEventListener('click',(e)=>{
    console.log('this works')
    console.log('this still works')
    //This is the part that changes the color
    document.body.style.background = color;
    document.body.style.color= color2;
    msgforminput.style.background=color;
    msgforminput.style.color=color2;
    msgformbutton.style.background=color;
    msgformbutton.style.color=color2;
    collapsesetting.style.background=color;
    collapsesetting.style.color=color2;
    settingsbutton.style.color=color2;
    settingsbutton.style.background=color;
  })
}
function addButtonNotif(val){
  notifsetting=document.createElement("button",value=val )
  notifsetting.classList.add('notifclass')
  settings.appendChild(notifsetting)
  notifsetting.innerHTML="Enable notifications for incoming messages and new users!!"
  notifselect=document.querySelector('.notifclass');
  notifselect.addEventListener('click',(e)=>{
    console.log('this work')
    notificationsetting=true;
    console.log('this work');
  })
}
function addButtonNotif2(val){
  notifsetting2=document.createElement("button",value=val )
  notifsetting2.classList.add('notifclass2')
  notifsetting2.id='notifsetting2'
  settings.appendChild(notifsetting2)
  notifsetting2.innerHTML="Enable notifications for just new users!"
  notifselect2=document.getElementById('notifsetting2')
  notifselect2.addEventListener('click',(e)=>{
    console.log('this work')
    notificationsetting2=true;
    console.log('this work');
  })
}
var usermade;
var drone;
const inputnamefield = document.querySelector('.inputnamefield');
const button = document.querySelector('.submitbtn');
  // multi tab detection
  function register_tab_GUID() {
    // detect local storage available
    if (typeof (Storage) !== "undefined") {
        // get (set if not) tab GUID and store in tab session
        if (sessionStorage["tabGUID"] == null) sessionStorage["tabGUID"] = tab_GUID();
        var guid = sessionStorage["tabGUID"];
        // add eventlistener to local storage
        window.addEventListener("storage", storage_Handler, false);
        // set tab GUID in local storage
        localStorage["tabGUID"] = guid;
    }
}
function storage_Handler(e) {
    // if tabGUID does not match then more than one tab and GUID
    if (e.key == 'tabGUID') {
        if (e.oldValue != e.newValue) tab_Warning();
    }
}
function tab_GUID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}
//Closes connection and deletes most elements so user will not have many tabs. not foolproof but good enough
function tab_Warning() {
    alert("Another tab is open! Please close this tab so you can return to your work. We do not allow users to have multiple tabs open because the API we are using has a limit of 20 concurrent users. ");
    if(usermade!==true){
    button.parentElement.removeChild(button)
    inputnamefield.parentElement.removeChild(inputnamefield)
    }
    msgformbutton.parentElement.removeChild(msgformbutton)
    msgforminput.parentElement.removeChild(msgforminput)
    messagelist.parentElement.removeChild(messagelist)
    memberlist.parentElement.removeChild(memberlist)
    if(usermade==true){
    drone.close();
    }
}
//Listen for click on settings button and makes dark mode button when clicked and disables settings button.
settingsbutton.addEventListener('click',(e)=>{
  isSettingPressed=true;
  addButton("Dark Mode",'black','white')
  addButtonNotif("Enable notifications for all events!");
  addButtonNotif2("Enable notifications for just new users");
  settingsbutton.classList.add('disable')
  /*settingsimg.classList.add('disable')*/
  document.querySelector('.settingsbutton').disabled = 'true';
  /*document.querySelector('.settingsimg').disabled = 'true';*/
})
//listens for click on collapse settings button and removes darkmode button when pressed and enables settings button again
collapsesetting.addEventListener('click',(e)=>{
  darkmode.parentNode.removeChild(darkmode)
  notifselect.parentNode.removeChild(notifselect)
  document.querySelector('.settingsbutton').disabled = false;
  /*document.querySelector('.settingsimg').disabled = false;*/
})
//listens for press on submit name button and sets name to the user's name input in text box, and then makes scaledrone connection
button.addEventListener('click', (e) => {
   setTimeout(() => {
        yourname = inputnamefield.value
       button.classList.add('display-none');
       usermade=true;
       inputnamefield.parentElement.removeChild(inputnamefield);
       button.parentElement.removeChild(button);
       drone = new ScaleDrone(CLIENT_ID, {
        data: { // Will be sent out as clientData via events
          name: yourname,
          color: getRandomColor(),
        },
      });
      
      drone.on('open', error => {
        if (error) {
          return console.error(error);
        }
        console.log('Successfully connected to Scaledrone');
        const room = drone.subscribe('observable-room');
        room.on('open', error => {
          if (error) {
            return console.error(error);
          }
          console.log('Successfully joined room');
        });
        room.on('members', m => {
          members = m;
          updateMembersDOM();
        });
        room.on('member_join', member => {
          members.push(member);
          updateMembersDOM();
        });
        room.on('member_leave', ({id}) => {
          const index = members.findIndex(member => member.id === id);
          members.splice(index, 1);
          updateMembersDOM();
        });
        room.on('data', (text, member) => {
          if (member) {
            addMessageToListDOM(text, member);
            
          } else {
            // Message is from server
          }
        });
      });
      drone.on('close', event => {
        console.log('Connection was closed', event);
      });
      drone.on('error', error => {
        console.error(error);
      });
      //random name(not rlly using anymore but keeping it just in case)
      function getRandomName() {
        const adjs = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
        const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
        return (
          adjs[Math.floor(Math.random() * adjs.length)] +
          "_" +
          nouns[Math.floor(Math.random() * nouns.length)]
        );
      }
      //random color
      function getRandomColor() {
        return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      }
      //-------------  More DOM Stuff
      const DOM = {
        membersCount: document.querySelector('.members-count'),
        membersList: document.querySelector('.members-list'),
        messages: document.querySelector('.messages'),
        input: document.querySelector('.message-form__input'),
        form: document.querySelector('.message-form'),
      };
      //this is just for sending messages 
      DOM.form.addEventListener('submit', sendMessage);
      function sendMessage() {
        const value = DOM.input.value;
        if (value === '') {
          return;
        }
        DOM.input.value = '';
        drone.publish({
          room: 'observable-room',
          message: value,
        });
      }
      //lists members
      function createMemberElement(member) {
        const { name, color } = member.clientData;
        const el = document.createElement('div');
        el.appendChild(document.createTextNode(name));
        el.className = 'member';
        el.style.color = color;
        return el;
      }
      function updateMembersDOM() {
        DOM.membersCount.innerText = `${members.length} users in room:`;
        DOM.membersList.innerHTML = '';
        members.forEach(member =>
          DOM.membersList.appendChild(createMemberElement(member))
        );
        timealr=false;
      }
      //makes messages 
      function createMessageElement(text, member) {
        const el = document.createElement('div');
        el.appendChild(createMemberElement(member));
        el.appendChild(document.createTextNode(text));
        el.className = 'message';
        return el;
      }
      function addMessageToListDOM(text, member) {
        const el = DOM.messages;
        const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
        el.appendChild(createMessageElement(text, member));
        
        let permission = Notification.requestPermission();
        var today2 = new Date();
        if(timealr==true){
          var memberlists=document.querySelector('.members-list')
          memberlists.removeChild(para)
        }
        para = document.createElement("p");
        var hours=today2.getHours();
        if(hours>12 || hours==12){
          encodedhours=hours-12;
          ampm="PM";
        }else{
          encodedhours=hours;
          ampm="AM";
        }
var time2 = "Last message sent at "+encodedhours + ":" + today2.getMinutes()+" "+ampm;
console.log(time2)
var lastmsg2=messagelist.lastElementChild;
  let textNode = document.createTextNode(time2); 
  para.appendChild(textNode); 
  memberlisted.appendChild(para);
  timealr=true;
  
  para.classList.add('timestamp');
        if (wasTop) {
          el.scrollTop = el.scrollHeight - el.clientHeight;
        }
      }
   }, 1);
  
})
//splash screen code
document.addEventListener('DOMContentLoaded',(e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
    splash.parentElement.removeChild(splash);
    register_tab_GUID()
    console.log(msgformbutton)
  },2000);
})
splash.addEventListener('mousedown',
(e)=>{
  setTimeout(()=>{
    splash.parentElement.removeChild(splash);
    
  },1);
})