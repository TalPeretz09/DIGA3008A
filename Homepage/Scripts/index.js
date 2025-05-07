function CalculateArea(width,height)
{
    let area=width*height;
    return area;
}

console.log(CalculateArea(2,3));

//---------------------------------------------------------------------

function sumDaNums(num1,num2)
{
    let out;

    if(num1!=num2)
    {
        out=num1+num2;
    }
    else
    {
        out=3*(num1+num2);
    }

    return out;
}

console.log(sumDaNums(5,4));

//---------------------------------------------------------------------

function GenNum(min, max)
{
    let num1= Math.floor(Math.random()*(max-min)+min);
    let num2= Math.floor(Math.random()*(max-min)+min);

    console.log(num1);
    console.log(num2);

    if(num1==50 || num2==50)
    {
        return true;
    }
    else if(num1+num2==50)
    {
        return true;
    }
    else
    {
        return false;
    }

}

console.log(GenNum(0,100));

//---------------------------------------------------------------------

function calcPower(voltage, current)
{
    let power=voltage*current;

    return power;
}

console.log(calcPower(6,7));

//---------------------------------------------------------------------

function randomInt()
{
    let num=Math.floor(Math.random()*9+1);

    let lessThanFive;
    let str;
    let oddOrEven;

    if(num<5)
    {
        lessThanFive=true;
    }
    else
    {
        lessThanFive=false;
    }

    if(lessThanFive==true)
    {
        str="The number is less than five and ";
    }
    else
    {
        str="The number is greater than or equal to five and ";
    }

    if(num%2==0)
    {
        oddOrEven="Even";
    }
    else
    {
        oddOrEven="Odd";
    }

    return str+oddOrEven;
}

console.log(randomInt());

//---------------------------------------------------------------------

function addString(str)
{
    let out="Py";
    
    if(str.slice(0,2)==="Py")
    {
        return str;
    }
    else
    {
        return out+str;
    }
}

console.log(addString("tralello"));

//---------------------------------------------------------------------