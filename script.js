//your JS code here. If required.
let form=document.querySelector(".form-group");
let input=form.querySelectorAll("input");
let book=document.querySelector("#book-list")
let btn=form.querySelector("button");
btn.addEventListener("click",(e)=>{
	e.preventDefault();
 let tr=document.createElement("tr");
	for(let i of input)
		{
			if(!i.value)
			{
				return;
			}
			let td=document.createElement("td");
			td.innerText=i.value;
			tr.append(td);
			i.value='';
		}
	let td=document.createElement("td");
let clear_btn=document.createElement("button");
	clear_btn.class="delete";
	clear_btn.innerText="x"
	clear_btn.style.backgroundColor="red";
	clear_btn.style.color="white";
	td.append(clear_btn);
	tr.append(td);
   book.append(tr);
clear_btn.addEventListener("click",()=>{
	tr.remove();
})
	
	
})