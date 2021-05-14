
class medicine
{
    bname:string;
    gname:string;
    stock:number;
    price:number;

    constructor(a:string, b:string,c:number,d:number)
    {
        this.bname=a;
        this.gname=b;
        this.stock=c;
        this.price=d;

    }
}
let med:(medicine)[]=[];
let addRow:Function;
let sell:Function;
let purchase:Function;
let edit: Function;
let clearAmount:Function;
addRow=()=>
{
   const bname =document.querySelector('#bname') as HTMLInputElement;
   const gname =document.querySelector('#gname') as HTMLInputElement;
   const stock =document.querySelector('#stock') as HTMLInputElement;
   const price =document.querySelector('#price') as HTMLInputElement;
   const table =document.querySelector('#medicine') as HTMLTableElement;
   let a= new medicine(bname.value,gname.value,stock.valueAsNumber,price.valueAsNumber);
   med.push(a);
   let count= table.rows.length;
   let row= table.insertRow(count);

   for( let i=count-1;i>=1;i--)
   {
    table.deleteRow(i);
   }
  
  
   for( let i=0,j=1;i<med.length&&j<=med.length;i++)
   {
    let row=table.insertRow(j);
    row.insertCell(0).innerHTML=med[i].bname;
    row.insertCell(1).innerHTML=med[i].gname;
    row.insertCell(2).innerHTML=med[i].stock.toString();
    row.insertCell(3).innerHTML=med[i].price.toString();
   }
   bname.value=""
   gname.value=""
   stock.value=""
   price.value=""
}
 
sell=()=>
{
    const table =document.querySelector('#medicine') as HTMLTableElement;
    const qsell=document.querySelector('#QuantToSell') as HTMLInputElement;
    const msell=document.querySelector('#MedToSell') as HTMLInputElement;
    let count= table.rows.length;
    let flag:any=0;

    for (let i=0;i<med.length;i++)
    {
        if(med[i].bname.toLowerCase()==msell.value.toLowerCase())
        {
            if(qsell.valueAsNumber>med[i].stock)
            {
                alert('Stock is insufficient');
                flag++;
            }
            else
            {
            med[i].stock-=qsell.valueAsNumber;
            flag=1;
            break;
            }
        }

    }
    if(flag==0)
        {
            alert(
                "Medicine is Not in the pharmacy"
            )
        }
    for( let i=count-1;i>=1;i--)
    {
     table.deleteRow(i);
    }
   
   
    for( let i=0,j=1;i<med.length&&j<=med.length;i++)
    {
     let row=table.insertRow(j);
     row.insertCell(0).innerHTML=med[i].bname;
     row.insertCell(1).innerHTML=med[i].gname;
     row.insertCell(2).innerHTML=med[i].stock.toString();
     row.insertCell(3).innerHTML=med[i].price.toString();
    }
    qsell.value="";
    msell.value='';
}
purchase =()=>
{
    const table =document.querySelector('#medicine') as HTMLTableElement;
    const amt= document.querySelector('#amount') as HTMLInputElement;
    const qpur=document.querySelector('#QuantToPurchase') as HTMLInputElement;
    const mpur=document.querySelector('#MedToPurchase') as HTMLInputElement;
    let count= table.rows.length;
    let amount:Number;
    let flag:any;
    flag=0;
    for (let i=0;i<med.length;i++)
    {
        if(med[i].bname.toLowerCase()==mpur.value.toLowerCase())
        {
            if(qpur.valueAsNumber>med[i].stock)
            {
                alert ("Out of Stock");
                flag++;
                break;
            }
            else
            {
            med[i].stock-=qpur.valueAsNumber;
            amount=med[i].price*qpur.valueAsNumber;
            amt.value=amount.toString();
            flag==1;
            break;
            }
        }
    }
    if(flag==0)
    {
        alert("Medicine is Not in the pharmacy");
    }
    for( let i=count-1;i>=1;i--)
    {
     table.deleteRow(i);
    }
    for( let i=0,j=1;i<med.length&&j<=med.length;i++)
    {
     let row=table.insertRow(j);
     row.insertCell(0).innerHTML=med[i].bname;
     row.insertCell(1).innerHTML=med[i].gname;
     row.insertCell(2).innerHTML=med[i].stock.toString();
     row.insertCell(3).innerHTML=med[i].price.toString();
    }
    qpur.value="";
    mpur.value="";
}
edit=()=>
{
    const table =document.querySelector('#medicine') as HTMLTableElement;
    const medit=document.querySelector('#MedToEdit') as HTMLInputElement;
    const bedit=document.querySelector('#BnameToEdit') as HTMLInputElement;
    const gedit=document.querySelector('#GnameToEdit') as HTMLInputElement;
    const sedit=document.querySelector('#StockToEdit') as HTMLInputElement;
    const pedit=document.querySelector('#PriceToEdit') as HTMLInputElement;
    let count= table.rows.length;
    let flag:any=0;

    for (let i=0;i<med.length;i++)
    {
        if(med[i].bname.toLowerCase()==medit.value.toLowerCase())
        {
            flag++;
            if(bedit.value!='')
            {
            med[i].bname=bedit.value
            }
            if(gedit.value!='')
            {
            med[i].gname=gedit.value
            }
            if(sedit.value!='')
            {
            med[i].stock=sedit.valueAsNumber
            }
            if(pedit.value!='')
            {
            med[i].price=pedit.valueAsNumber
            }
            break;
        }
        
    }
    if(flag==0)
    {
        alert("Medicine is Not in the pharmacy");
    }
    for( let i=count-1;i>=1;i--)
    {
     table.deleteRow(i);
    }
    for( let i=0,j=1;i<med.length&&j<=med.length;i++)
    {
     let row=table.insertRow(j);
     row.insertCell(0).innerHTML=med[i].bname;
     row.insertCell(1).innerHTML=med[i].gname;
     row.insertCell(2).innerHTML=med[i].stock.toString();
     row.insertCell(3).innerHTML=med[i].price.toString();
    }
    medit.value=""
    bedit.value=""
    gedit.value=""
    sedit.value=""
    pedit.value=""

}
clearAmount=()=>
{
    const amount=document.querySelector('#amount') as HTMLInputElement;
    amount.value="";
}