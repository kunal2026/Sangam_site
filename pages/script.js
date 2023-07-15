var districts = [
  {
    name: 'Sonebhadra',
    description: 'This is the description for Sonebhadra.',
  },
  {
    name: 'Gorakhpur',
    description: 'This is the description for Gorakhpur.',
  },
  {
    name: 'Prayagraj',
    description: 'This is the description for Prayagraj.',
  },
];
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
        tooltip.innerHTML = this.getAttribute('title');
        tooltip.style.left = e.pageX + 'px';
        tooltip.style.top = e.pageY + 'px';
        tooltip.style.display = 'block';
    });
    
    path.addEventListener('click',function(e){
        var districtname=this.getAttribute('title');
        infobox.innerHTML=districtname;
        this.style.fill='orange';
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

