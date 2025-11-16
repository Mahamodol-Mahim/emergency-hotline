// heart icon feature
const cards = document.getElementsByClassName('heart-card');
for (const card of cards) {
    card.addEventListener('click', function () {
        const iconValue = parseInt(document.getElementById('heart-nav').innerText)
        const newIconValue = iconValue + 1
        document.getElementById('heart-nav').innerText = newIconValue
    });
}

//copy button feature
const copyBtns=document.getElementsByClassName('copy-card')
for(const copyBtn of copyBtns){
    copyBtn.addEventListener('click',function(){

        const userConfirmed=confirm("Do you want to copy?");
        if(userConfirmed){
            const copyIconValue=parseInt(document.getElementById('copy-nav').innerText)
            const newCopyIconValue=copyIconValue+1;
            document.getElementById('copy-nav').innerText=newCopyIconValue
        }
        else{
            console.log('Copy Canceled')
        }
    })
}


// call button feature
// national emergency call button
document.getElementById('national-btn')
.addEventListener('click',function(){
    const starValue=parseInt(document.getElementById('star-nav').innerText)
    if(starValue>=20){
        const newStarValue=starValue-20;
        document.getElementById('star-nav').innerText=newStarValue;
        console.log(newStarValue)

        const emergencyNumber=document.getElementById('emergencyNumId').innerText;

        const historContainer=document.getElementById('history-list')
        
        // historContainer.innerText=''

        let time = new Date().toLocaleTimeString();
        const div=document.createElement('div')
        div.innerHTML=`
                    <div class="rounded-[8px] bg-[#FAFAFA] my-2 flex justify-between items-center">
                        <div class="">
                            <p class="font-semibold">National Emergency Number</p>
                            <p class="text-[#5C5C5C]">${emergencyNumber}</p>
                        </div>
                        <div>
                            ${time}
                        </div>
                    </div>    
                `
        historContainer.appendChild(div)
    }
    else{
        alert('Points is not availabe!')
    }
})


// police helpline call button
document.getElementById('police-btn')
.addEventListener('click',function(){
    const starValue=parseInt(document.getElementById('star-nav').innerText)
    if(starValue>=20){
        const newStarValue=starValue-20;
        document.getElementById('star-nav').innerText=newStarValue;
        console.log(newStarValue)

        const emergencyNumber=document.getElementById('policeNumId').innerText;

        const historContainer=document.getElementById('history-list')
        
        // historContainer.innerText=''

        let time = new Date().toLocaleTimeString();
        const div=document.createElement('div')
        div.innerHTML=`
                    <div class="rounded-[8px] bg-[#FAFAFA] my-2 flex justify-between items-center">
                        <div class="">
                            <p class="font-semibold">Police Helpline Number</p>
                            <p class="text-[#5C5C5C]">${emergencyNumber}</p>
                        </div>
                        <div>
                            ${time}
                        </div>
                    </div>    
                `
        historContainer.appendChild(div)
    }
    else{
        alert('Points is not availabe!')
    }
})


// fire service call button
const historContainer=document.getElementById('history-list')        
document.getElementById('fire-btn')
.addEventListener('click',function(){

    document.getElementById('history-list').style.display='block'   // this is because when clearing(clear-btn) history-list is none

    const starValue=parseInt(document.getElementById('star-nav').innerText)
    if(starValue>=20){
        const newStarValue=starValue-20;
        document.getElementById('star-nav').innerText=newStarValue;
        console.log(newStarValue)

        const emergencyNumber=document.getElementById('fireNumId').innerText;

        // const historContainer=document.getElementById('history-list')
        
        // historContainer.innerText=''

        let time = new Date().toLocaleTimeString();
        const div=document.createElement('div')
        div.innerHTML=`
                    <div class="rounded-[8px] bg-[#FAFAFA] my-2 flex justify-between items-center">
                        <div class="">
                            <p class="font-semibold">Fire Service Number</p>
                            <p class="text-[#5C5C5C]">${emergencyNumber}</p>
                        </div>
                        <div>
                            ${time}
                        </div>
                    </div>    
                `
                historContainer.appendChild(div)
    }
    else{
        alert('Points is not availabe!')
    }
})



// clear button
document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById('history-list').style.display='none';

    historContainer.innerText=''
})



// Only first three card is implemented all features. Ignoring repeatitive task