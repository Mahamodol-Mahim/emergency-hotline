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
            console.log(newCopyIconValue)
        }
        else{
            console.log('Copy Canceled')
        }
    })
}
