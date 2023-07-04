var previouspath=null;
//get path element
var infobox=document.getElementById('info-box');
var paths=document.querySelectorAll('.territory');
//create tooltip
paths.forEach(function(path) {
    var tooltip=document.createElement('div');
    tooltip.className='tooltip';
    document.body.appendChild(tooltip);

    // add event listener
    path.addEventListener('mouseover',function(e){
        tooltip.innerHTML = this.getAttribute('id');
        tooltip.style.left = e.pageX + 'px';
        tooltip.style.top = e.pageY + 'px';
        tooltip.style.display = 'block';
    });
    
    path.addEventListener('click',function(e){
        var districtname=this.getAttribute('id');
        var des=this.getAttribute('title');
        infobox.innerHTML=districtname+'<br>'+des;
        infobox.style.color='orange';
        this.style.fill='#5A4108';
        if(previouspath!==null &&previouspath!==this){
            previouspath.style.fill='';
        }
        previouspath=this;
    });
    path.addEventListener('mouseout', function() {
        // Hide the tooltip
        tooltip.style.display = 'none';
    });
});

// flip

const prevbtn1 = document.querySelector('#prev1');
const nextbtn1 = document.querySelector('#next1');
const book1 = document.querySelector('#book1');
const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');

const prevbtn2 = document.querySelector('#prev2');
const nextbtn2 = document.querySelector('#next2');
const book2 = document.querySelector('#book2');
const paper4 = document.querySelector('#p4');
const paper5 = document.querySelector('#p5');
const paper6 = document.querySelector('#p6');

const prevbtn3 = document.querySelector('#prev3');
const nextbtn3 = document.querySelector('#next3');
const book3 = document.querySelector('#book3');
const paper7 = document.querySelector('#p7');
const paper8 = document.querySelector('#p8');
const paper9 = document.querySelector('#p9');

const prevbtn4 = document.querySelector('#prev4');
const nextbtn4 = document.querySelector('#next4');
const book4 = document.querySelector('#book4');
const paper10 = document.querySelector('#p10');
const paper11 = document.querySelector('#p11');
const paper12 = document.querySelector('#p12');

const prevbtn5 = document.querySelector('#prev5');
const nextbtn5 = document.querySelector('#next5');
const book5 = document.querySelector('#book5');
const paper13 = document.querySelector('#p13');
const paper14 = document.querySelector('#p14');
const paper15 = document.querySelector('#p15');

let currentloc1 = 1,currentloc2 = 1,currentloc3 = 1,currentloc4 = 1,currentloc5 = 1;
let noofpapers = 3;

prevbtn1.addEventListener('click', function() {
    goprevpage(1,paper1,paper2,paper3,prevbtn1,nextbtn1,book1);
});
nextbtn1.addEventListener('click', function() {
    gonextpage(1,paper1,paper2,paper3,prevbtn1,nextbtn1,book1);
});

prevbtn2.addEventListener('click', function() {
    goprevpage(2,paper4,paper5,paper6,prevbtn2,nextbtn2,book2);
});
nextbtn2.addEventListener('click', function() {
    gonextpage(2,paper4,paper5,paper6,prevbtn2,nextbtn2,book2);
});

prevbtn3.addEventListener('click', function() {
    goprevpage(3,paper7,paper8,paper9,prevbtn3,nextbtn3,book3);
});
nextbtn3.addEventListener('click', function() {
    gonextpage(3,paper7,paper8,paper9,prevbtn3,nextbtn3,book3);
});

prevbtn4.addEventListener('click', function() {
    goprevpage(4,paper10,paper11,paper12,prevbtn4,nextbtn4,book4);
});
nextbtn4.addEventListener('click', function() {
    gonextpage(4,paper10,paper11,paper12,prevbtn4,nextbtn4,book4);
});

prevbtn5.addEventListener('click', function() {
    goprevpage(5,paper13,paper14,paper15,prevbtn5,nextbtn5,book5);
});
nextbtn5.addEventListener('click', function() {
    gonextpage(5,paper13,paper14,paper15,prevbtn5,nextbtn5,book5);
});



function openbook(pre,nex,boo) {
    const sw=window.innerWidth;
    boo.style.transform = "translateX(50%)";
    if(sw>=800){
        pre.style.transform = "translateX(-170px)";
        nex.style.transform = "translateX(170px)";
    }
    else{
        pre.style.transform = "translateX(-100px)";
        nex.style.transform = "translateX(100px)";
    }
}

function closebook(isatbegin,pre,nex,boo) {
    if (isatbegin) {
        boo.style.transform = "translateX(0%)";
    } else {
        boo.style.transform = "translateX(100%)";
    }
    pre.style.transform = "translateX(0px)";
    nex.style.transform = "translateX(0px)";
}

function goprevpage(bookNumber,pap1,pap2,pap3,pre,nex,boo) {
    const currentloc = getCurrentLoc(bookNumber);
    if (currentloc > 1) {
        switch (currentloc) {
            case 2:
                closebook(true,pre,nex,boo);
                pap1.classList.remove("flipped");
                pap1.style.zIndex = currentloc + 1;
                break;
            case 3:
                pap2.classList.remove("flipped");
                pap2.style.zIndex = currentloc - 1;
                break;
            case 4:
                openbook(pre,nex,boo);
                pap3.classList.remove("flipped");
                pap3.style.zIndex = currentloc - 2;
                break;
            default:
                throw new Error("Unknown state");
        }
        setCurrentLoc(bookNumber, currentloc - 1);
    }
}

function gonextpage(bookNumber,pap1,pap2,pap3,pre,nex,boo) {
    const currentloc = getCurrentLoc(bookNumber);
    const maxlocation = noofpapers + 1;
    if (currentloc < maxlocation) {
        switch (currentloc) {
            case 1:
                openbook(pre,nex,boo);
                pap1.classList.add("flipped");
                pap1.style.zIndex = 1;
                break;
            case 2:
                openbook(pre,nex,boo);
                pap2.classList.add("flipped");
                pap2.style.zIndex = 2;
                break;
            case 3:
                openbook(pre,nex,boo);
                pap3.classList.add("flipped");
                pap3.style.zIndex = 3;
                closebook(false,pre,nex,boo);
                break;
            default:
                throw new Error("Unknown state");
        }
        setCurrentLoc(bookNumber, currentloc + 1);
    }
}

function getCurrentLoc(bookNumber) {
    switch (bookNumber) {
        case 1:
            return currentloc1;
        case 2:
            return currentloc2;
        case 3:
            return currentloc3;
        case 4:
            return currentloc4;
        case 5:
            return currentloc5;
        default:
            throw new Error("Invalid book number");
    }
}

function setCurrentLoc(bookNumber, value) {
    if (bookNumber === 1) {
        currentloc1 = value;
    } 
    else if(bookNumber === 2){
        currentloc2 = value;
    }
    else if(bookNumber === 3){
        currentloc3 = value;
    }
    else if(bookNumber === 4){
        currentloc4 = value;
    }
    else{
        currentloc5 = value;
    }
}

