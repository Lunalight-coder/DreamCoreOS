setInterval(function(){
    document.querySelector("#timee").innerHTML=
    new Date().toLocaleString();
},1000);




document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('#window1, .window1').forEach(win =>{
        dragElement(win);

        win.addEventListener('mousedown', () => bringToFront(win));
    });

});
function dragElement(element){
    var initialX=0;
    var initialY= 0;
    var currentX=0;
    var currentY=0;

    var header= element.querySelector(".windowh")

    if(header){
        header.onmousedown=startDragging;
        }else{
            element.onmousedown=startDragging;
        }
        function startDragging(e){
            e=e||window.event;

            if(['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes(e.target.tagName)){
                return;
            }

            if (e.target.tagName==='INPUT' || e.target.tagName==='TEXTAREA'){
                return;
            }
            e.preventDefault();
            element.style.transition="none";
            var rect=element.getBoundingClientRect();
            
                var rect=element.getBoundingClientRect();
                element.style.transform='none';
                element.style.top=rect.top+'px';
                element.style.left=rect.left+'px';

            
            initialX=e.clientX;
            initialY=e.clientY;
            document.onmouseup=stopDragging;
            document.onmousemove=mouseMoveDrag;
        
    }
    

    function mouseMoveDrag
    
    (e){
        e=e||window.event;
        e.preventDefault();

        var deltaX = e.clientX-initialX;
        var deltaY= e.clientY- initialY;

       
        initialX=e.clientX;
        initialY=e.clientY;
var rect= element.getBoundingClientRect();
        element.style.top=(element.offsetTop+deltaY)+"px";
         element.style.left=(element.offsetLeft+deltaX)+"px";

    }
    function stopDragging(){
        element.style.transition="opacity 0.2s ease-in-out, visibility 0.2s";
        document.onmouseup=null;
        document.onmousemove=null;
    }
}



var window1=document.querySelector("#window1");
var  window1close= document.querySelector("#w1close");
const openw1= document.getElementById('window1open');


if (window1close && window1) {
    window1close.addEventListener('click',()=>{
    window1.style.display="none";
});
}

if (openw1 && window1){
    openw1.addEventListener('click', () => {
        window1.style.display="block";
        bringToFront(window1);
    });
}



openw1.addEventListener('click',()=>{
    window1.style.visibility='visible';
    window1.style.opacity='1';
})

var selectedIcon= undefined

//todo

function addtodo(){
    const input=document.getElementById('todouser');
    if (input && input.value.trim() !==""){
        addTodoItem(input.value.trim());
        input.value="";
    }
    }

function Strike(itemRow){
    const checkbox = itemRow.querySelector('input[type="checkbox"]');
    const textSpan = itemRow.querySelector('.text-letters');

    if (checkbox && textSpan) {
        checkbox.checked= !checkbox.checked;

        if (checkbox.checked) {
            textSpan.style.textDecoration="line-through";
            textSpan.style.color="#808080";

        }else{
            textSpan.style.textDecoration="none";
            textSpan.style.color="inherit";
        }
    }
}


    


document.addEventListener('keypress', function(e){
if (e.key==='Enter'){
    const activeEl = document.activeElement;
    if (activeEl && activeEl.id==='todouser'){
   
            addtodo();
    }
        }
    });

const alogo = document.getElementById('app');
if (alogo){
    alogo.addEventListener('click', function(){
        alogo.classList.toggle('selected');
        opensapp('appw');
    });
}


function opensapp(id){
    const win= document.getElementById(id);
    if (win){
        win.style.transition="none";
        win.style.display="flex";
        win.style.visibility="visible";
        win.style.opacity="1";

        win.style.top="200px";
        win.style.left="300px";
        win.style.transform="none";
        bringToFront(win);
    }
}

function closeWindow(id){
    const win= document.getElementById(id);
    if(win) win.style.display="none";
}

function minwindow(id){
    const win=document.getElementById(id);
    if (win) win.style.display="none";
}

function maxwindow(id){
    const win = document.getElementById(id);
    if (win){
        if (win.style.width === "100vw"){
            win.style.width="280px";
            win.style.height="auto";
            win.style.top="50%";
            win.style.left="50%";
            win.style.transform= "translate(-50%, -50%)";
        } else{
            win.style.transform="none";
            win.style.top="0px";
            win.style.left="0px";
            win.style.width="100vw";
            win.style.height="100vh";
        }

    }
}






function bringToFront(element){
    document.querySelectorAll('#window1, .window1').forEach(win =>{
        win.style.zIndex="10000";
    });
    element.style.zIndex="20000";
}


function addTodoItem(textValue){
    const list=document.getElementById('todoli');
    if(!list) return;

    const itemRow =document.createElement('div');
    itemRow.style.cssText="display:flex; align-items:center; gap:8px; cursor:pointer; padding:2px 0;";

    itemRow.onclick = function(){Strike(itemRow);};
    const checkbox = document.createElement('input')
    checkbox.type="checkbox";
    checkbox.style.cssText="pointer-events:none;accent-color:#000080;";

    const textSpan=document.createElement('span');
    textSpan.className="text-letters";
    textSpan.textContent=textValue;

    itemRow.appendChild(checkbox);
    itemRow.appendChild(textSpan);
    list.appendChild(itemRow);
}
window.addEventListener('load', ()=> {
            alert("Click on the button at the bottom of the screen to know about me, the OS [NOTE: To drag a window use the topbar of that window]");
          
            setTimeout(() => { 
            window.addEventListener('click',()=>{
                const music=document.getElementById('bg-music');
                const overlay= document.querySelector('.poverlay');

                music.play().catch(err=> console.log("Audio blocked:", err));

                overlay.style.display='flex';
                setTimeout(() =>{
                    overlay.style.opacity='1';
                },10);
            },{once:true});
        },100);
        });

const  sounds=["music1.mpeg", "music2.mpeg" , "music3.mpeg", "music4.mpeg"]
let soundsi=0;

const start=document.getElementById('cdaudio');
const dvde= document.getElementById('dvd');

function play(){
    const bgMusic = document.getElementById('bg-music');

    if(start.paused){
        if (bgMusic) bgMusic.pause();
        start.play();
        dvde.classList.add('cdspin');
    }else{
        start.pause();
        dvde.classList.remove('cdspin')
    }
}

function next(){
    const bgMusic = document.getElementById('bg-music');


        if (bgMusic) bgMusic.pause();
    soundsi=(soundsi + 1) % sounds.length;
    start.src=sounds[soundsi];
    start.play();
    dvde.classList.add('cdspin');
}

     
