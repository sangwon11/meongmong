import '../../index.css';

const name = document.getElementById('name');
const telnum = document.getElementById('telnum');
const email = document.getElementById('email');
const pswd = document.getElementById('password');

const btn = document.querySelector('form');
let phone='';



btn.addEventListener('submit', function(){
        event.preventDefault();

        postUser();   
        swal("회원가입 완료", "반갑습니다!", "success").then(()=>{
            location.href = '../loginPage/'
        }); 
       
       
        
})


const postUser = () =>{

    fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
         body: JSON.stringify({
            email: email.value,
            password: pswd.value,
            phone: telnum.value,
            name: name.value,
         }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
    
}


   // 숫자가 아닌 정규식
   var replaceNotInt = /[^0-9]/gi;
   const form = document.getElementById('telnumform');

   telnum.addEventListener('keyup', function(){
    telnum.value = telnum.value.replace(replaceNotInt,"");
   } )

   telnum.addEventListener('focusout', function(){
    if(telnum.value){
        if(telnum.value.match(replaceNotInt)){
            telnum.value = telnum.value.replace(replaceNotInt,"");
        }
    }
   })
   
