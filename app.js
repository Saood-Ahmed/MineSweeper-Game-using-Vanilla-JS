//NODE-LIST FOR ALL CELLS
var allCells = document.querySelectorAll('td');
var mine = Math.floor((Math.random() * 5) + 1);
//Flag Count
var flag = 6;

console.log(mine);

//Refreshing cells
allCells.forEach(cur => {
    while(cur.classList.contains('mine')){
    cur.classList.remove('mine');
}
    while(cur.classList.contains('safe_cell')){
    cur.classList.remove('safe_cell');
}
})

//Loop to attach 'HIDDEN' mines class
for(var i = 1 ; i <= 6 ; i++){

    let j = mine*(i);
    allCells[j].classList.add('mine');
}

//LOOP TO DECLARE AND ATTACH MINES TO CELL


var exposeMines = function() {
for(var i = 1 ; i <= 6 ; i++){

    let j = mine*(i);
    //allCells[j].classList.add('mine');
    allCells[j].textContent = 'MINE';
    allCells[j].style.backgroundColor = 'red';
}
}
//Calling The Function Of Expose Mines 
for(var i = 1 ; i <=6 ; i++){
    let j = mine*(i);
    allCells[j].addEventListener('click', function(){
        document.querySelector('#smiley').src = 'img/Lost.png';
        exposeMines();
        setTimeout(gameOver,5000);
    })
};

//GAME OVER FUNCTION
var gameOver = function() {
    document.getElementById('all_cells').style.display = 'none';
    document.getElementById('btn').style.display = 'block';
    document.getElementById('smiley').style.display = 'none';
}

//Adding class 'safe_cell' to other mines
for(var s = 0;s < 36; s++){
    if(allCells[s].classList.contains('mine')){
        continue;
    }
    else {
        allCells[s].classList.add('safe_cell');
    }
}


allCells.forEach(cur => cur.addEventListener('click', function(){
    
    checkIfWin(allCells);

    if(cur.classList.contains('mine')){
        console.log('mine' + cur.cellIndex);
    }
    else {
    cur.style.backgroundColor = 'green';
    }
}))

 //Exposing Number of nearby mines
allCells.forEach(cur => cur.addEventListener('click', function(){
var mineNum = 0;
checkIfWin(allCells);
if(cur.classList.contains('safe_cell')){
   
//FOR ROW # 01
if(cur.cellIndex > 0 && cur.cellIndex < 5)
{
    if(allCells[cur.cellIndex + 1] !== undefined && allCells[cur.cellIndex + 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 1] !== undefined && allCells[cur.cellIndex - 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 5] !== undefined && allCells[cur.cellIndex + 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 6] !== undefined && allCells[cur.cellIndex + 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 7] !== undefined && allCells[cur.cellIndex + 7].classList.contains('mine')){
        mineNum++;
    }
    //cur.textContent = mineNum;
}
//FOR ROW #02
if(cur.cellIndex > 6 && cur.cellIndex < 11)
{
    if(allCells[cur.cellIndex - 1] !== undefined && allCells[cur.cellIndex - 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 1] !== undefined && allCells[cur.cellIndex + 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 5] !== undefined && allCells[cur.cellIndex - 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 6] !== undefined && allCells[cur.cellIndex - 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 7] !== undefined && allCells[cur.cellIndex - 7].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 5] !== undefined && allCells[cur.cellIndex + 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 6] !== undefined && allCells[cur.cellIndex + 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 7] !== undefined && allCells[cur.cellIndex + 7].classList.contains('mine')){
        mineNum++;
    }
    //cur.textContent = mineNum;
    //mineNum = 0;
}
//FOR ROW #03

if(cur.cellIndex > 12 && cur.cellIndex < 17)
{
    if(allCells[cur.cellIndex - 1] !== undefined && allCells[cur.cellIndex - 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 1] !== undefined && allCells[cur.cellIndex + 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 5] !== undefined && allCells[cur.cellIndex - 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 6] !== undefined && allCells[cur.cellIndex - 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 7] !== undefined && allCells[cur.cellIndex - 7].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 5] !== undefined && allCells[cur.cellIndex + 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 6] !== undefined && allCells[cur.cellIndex + 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 7] !== undefined && allCells[cur.cellIndex + 7].classList.contains('mine')){
        mineNum++;
    }
    //cur.textContent = mineNum;
    //mineNum = 0;
}
//For ROW #4
if(cur.cellIndex > 18 && cur.cellIndex < 23)
{
    if(allCells[cur.cellIndex - 1] !== undefined && allCells[cur.cellIndex - 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 1] !== undefined && allCells[cur.cellIndex + 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 5] !== undefined && allCells[cur.cellIndex - 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 6] !== undefined && allCells[cur.cellIndex - 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 7] !== undefined && allCells[cur.cellIndex - 7].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 5] !== undefined && allCells[cur.cellIndex + 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 6] !== undefined && allCells[cur.cellIndex + 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 7] !== undefined && allCells[cur.cellIndex + 7].classList.contains('mine')){
        mineNum++;
    }
    //cur.textContent = mineNum;
}
//FOR ROW #05
if(cur.cellIndex > 24 && cur.cellIndex < 29)
{
    if(allCells[cur.cellIndex - 1] !== undefined && allCells[cur.cellIndex - 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 1] !== undefined && allCells[cur.cellIndex + 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 5] !== undefined && allCells[cur.cellIndex - 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 6] !== undefined && allCells[cur.cellIndex - 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 7] !== undefined && allCells[cur.cellIndex - 7].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 5] !== undefined && allCells[cur.cellIndex + 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 6] !== undefined && allCells[cur.cellIndex + 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 7] !== undefined && allCells[cur.cellIndex + 7].classList.contains('mine')){
        mineNum++;
    }
    //cur.textContent = mineNum;
}
//For ROW #06

if(cur.cellIndex >30 && cur.cellIndex < 35)
{
    if(allCells[cur.cellIndex - 1] !== undefined && allCells[cur.cellIndex - 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 1] !== undefined && allCells[cur.cellIndex + 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 5] !== undefined && allCells[cur.cellIndex - 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 6] !== undefined && allCells[cur.cellIndex - 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 7] !== undefined && allCells[cur.cellIndex - 7].classList.contains('mine')){
        mineNum++;
    }
    //cur.textContent = mineNum;
}

//---For Cells (1 & 6), Cells (7 & 12), Cells (13 & 18), Cells (19 & 24), Cells (25 & 30), Cells (31 & 36)
//FOR COLUMN NO: 01

if(cur.cellIndex == 0)
{
    if(allCells[cur.cellIndex + 1] !== undefined && allCells[cur.cellIndex + 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 6] !== undefined && allCells[cur.cellIndex + 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 7] !== undefined && allCells[cur.cellIndex + 7].classList.contains('mine')){
        mineNum++;
    }
   // cur.textContent = mineNum;
}

if(cur.cellIndex == 6 || cur.cellIndex == 12 || cur.cellIndex == 18 || cur.cellIndex == 24)
{
    if(allCells[cur.cellIndex - 6] !== undefined && allCells[cur.cellIndex - 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 5] !== undefined && allCells[cur.cellIndex - 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 1] !== undefined && allCells[cur.cellIndex + 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 6] !== undefined && allCells[cur.cellIndex + 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 7] !== undefined && allCells[cur.cellIndex + 7].classList.contains('mine')){
        mineNum++;
    }
    //cur.textContent = mineNum;
}


if(cur.cellIndex == 30)
{
    if(allCells[cur.cellIndex - 6] !== undefined && allCells[cur.cellIndex - 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 5] !== undefined && allCells[cur.cellIndex - 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 1] !== undefined && allCells[cur.cellIndex + 1].classList.contains('mine')){
        mineNum++;
    }
    //cur.textContent = mineNum;
}

//FOR COLUMN NO: 06

if(cur.cellIndex == 5)
{
    if(allCells[cur.cellIndex - 1] !== undefined && allCells[cur.cellIndex - 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 5] !== undefined && allCells[cur.cellIndex + 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 6] !== undefined && allCells[cur.cellIndex + 6].classList.contains('mine')){
        mineNum++;
    }
   // cur.textContent = mineNum;
}

if(cur.cellIndex == 11 || cur.cellIndex == 17 || cur.cellIndex == 23 || cur.cellIndex == 29)
{
    if(allCells[cur.cellIndex - 7] !== undefined && allCells[cur.cellIndex - 7].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 6] !== undefined && allCells[cur.cellIndex - 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 1] !== undefined && allCells[cur.cellIndex - 1].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 5] !== undefined && allCells[cur.cellIndex + 5].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex + 6] !== undefined && allCells[cur.cellIndex + 6].classList.contains('mine')){
        mineNum++;
    }
    //cur.textContent = mineNum;
}


if(cur.cellIndex == 35)
{
    if(allCells[cur.cellIndex - 7] !== undefined && allCells[cur.cellIndex - 7].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 6] !== undefined && allCells[cur.cellIndex - 6].classList.contains('mine')){
        mineNum++;
    }

    if(allCells[cur.cellIndex - 1] !== undefined && allCells[cur.cellIndex - 1].classList.contains('mine')){
        mineNum++;
    }
    //cur.textContent = mineNum;
}

cur.textContent = mineNum;
mineNum = 0;
}
})
)

/*
 if(allCells[cur.cellIndex + 1] !== undefined && allCells[cur.cellIndex + 1].classList.contains('mine')){
    mineNum++;
}

if(allCells[cur.cellIndex + 5] !== undefined && allCells[cur.cellIndex + 5].classList.contains('mine')){
    mineNum++;
}

if(allCells[cur.cellIndex + 6] !== undefined && allCells[cur.cellIndex + 6].classList.contains('mine')){
    mineNum++;
}

if(allCells[cur.cellIndex + 7] !== undefined && allCells[cur.cellIndex + 7].classList.contains('mine')){
    mineNum++;
}

if(allCells[cur.cellIndex - 1] !== undefined && allCells[cur.cellIndex - 1].classList.contains('mine')){
    mineNum++;
}

if(allCells[cur.cellIndex - 6] !== undefined && allCells[cur.cellIndex - 6].classList.contains('mine')){
    mineNum++;
}

if(allCells[cur.cellIndex - 5] !== undefined && allCells[cur.cellIndex - 5].classList.contains('mine')){
    mineNum++;
}

if(allCells[cur.cellIndex - 7] !== undefined && allCells[cur.cellIndex - 7].classList.contains('mine')){
    mineNum++;
}
*/



//Play Again Button work
document.getElementById('btn').addEventListener('click', function(){
   
    allCells.forEach(cur => {
        while(cur.classList.contains('mine')){
        cur.classList.remove('mine');
    }
        while(cur.classList.contains('safe_cell')){
        cur.classList.remove('safe_cell');
    }
    })
    window.location.reload();
});


//Right Click Event
document.getElementById('r-click').addEventListener('dblclick', function(e) {
    alert('success');
})
//Double click Event
document.getElementById('r-click').oncontextmenu = function() {
    alert('right click!')
  }
//Declaring Flag function for mine cells 
allCells.forEach(cur => {
    cur.oncontextmenu = function(event) {
        event.preventDefault();
        if(flag > 0) {
        if(cur.classList.contains('flag')){
            cur.classList.remove('flag');
            if(cur.classList.contains('safe_cell')){
                console.log('');
                cur.textContent = 'c-'+cur.cellIndex;
            }
            else {
                cur.classList.add('mine');
            }
            checkIfWin(allCells);
        }
        else {
            cur.classList.add('flag');
            cur.classList.remove('mine');
            cur.style.backgroundColor = 'blue';
            cur.textContent = 'Flag';

            //adding event listener again
            cur.oncontextmenu = function() {
                
                event.preventDefault();
                if(cur.classList.contains('flag')){
                    flag++;
                    cur.classList.remove('flag');
                    cur.style.backgroundImage = 'linear-gradient(rgb(246, 181, 29), rgb(255, 221, 30))';
                    if(cur.classList.contains('safe_cell')){
                        console.log('');
                        cur.textContent = 'c-'+cur.cellIndex;
                    }
                    else {
                        cur.classList.add('mine');
                    }
                }
            }
            checkIfWin(allCells);
    }
}
flag--;
    }
})

//Check If Win 
var checkIfWin = function(arr) {
arr.forEach(cur => {
    if(flag == 1) {
    if(cur.classList.contains('flag') && !(cur.classList.contains('safe_cell'))){
        alert('YOU WIN!');
        setTimeout(gameOver, 2000);
    }
}
})
}