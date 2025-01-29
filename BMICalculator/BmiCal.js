const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    


    const hgt=parseInt(document.querySelector('#height').value)

    const wgt=parseInt(document.querySelector('#weight').value)

    const results=document.querySelector('#results')

   if(hgt==='' || hgt<0 || isNaN(hgt)){
    results.innerHTML=`Please give a valid height ${hgt}`
    document.querySelector('#height').value=''
   
   }else if(wgt==='' || wgt<0 || isNaN(wgt)){
    results.innerHTML=`Please give a valid height ${wgt}`
    document.querySelector('#height').value=''

   }else if(hgt>0 && wgt>0){

    const bmi=(wgt/((hgt*hgt)/10000)).toFixed(2)
    let msg=''
    if(bmi<18.6){
         msg='under weight'
    }else if(bmi> 18.6 && bmi<24.9){
        msg='normal weight'
    }else if(bmi>24.9){
        msg='Over weight'
    }
    
          
          
    results.innerHTML=`${bmi} ${msg}`
   }

})