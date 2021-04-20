function multiplica() {

num=document.getElementById("num").value;
for (let i =1; i <=10; i++ ) 
{
multi = num * i;
document.getElementById("multiplica").innerHTML += num +"x"+i+"="+multi+"</br>" ;
    }

}