let allEmp = document.querySelector('#allemp')
allEmp.addEventListener('click',function(){
	let count = 0;
	 let  listEmp = `<table> \n `
	 listEmp += `<tr> \n <th> id </th> \n <th> first_name </th> \n <th> last_name </th> \n <th> email </th> \n <th> gender </th>\n <th> country </th></tr>`
	 for(let emp of newArray())
	 {
	 	count++
	 	listEmp += `<tr> \n <td> ${emp.id} </td> \n <td> ${emp.first_name} </td> \n <td> ${emp.last_name} </td> \n <td>${emp.email} </td>\n <td> ${emp.gender}</td>\n <td> ${emp.country}</td></tr>`
	 }
	 listEmp += `</table> \n `
	 document.querySelector('#list').innerHTML = listEmp;
	 document.querySelector('#total').innerText = `Total Number Employee ${count}`
	});
// All Male Candidates
	let allEmp2 = document.querySelector('#maleemp')
	allEmp2.addEventListener('click',function(){
		let count = 0;
		 let  listEmp = `<table> \n `
		 listEmp += `<tr> \n <th> id </th> \n <th> first_name </th> \n <th> last_name </th> \n <th> email </th> \n <th> gender </th>\n <th> country </th></tr>`
		 for(let emp of newArray())
		 {
		 	
		 	if(emp.gender === 'Male')
		 	{
		 		count++
		 		listEmp += `<tr> \n <td> ${emp.id} </td> \n <td> ${emp.first_name} </td> \n <td> ${emp.last_name} </td> \n <td>${emp.email} </td>\n <td> ${emp.gender}</td>\n <td> ${emp.country}</td></tr>`
		 	}
		 	}
		 	 listEmp += `</table> \n `
		 document.querySelector('#list').innerHTML = listEmp
	   	document.querySelector('#total').innerText = `Total Male Employee ${count}`
	 // console.log(listEmp)
	 
})
// All Female Candidates
let allEmp3 = document.querySelector('#femaleemp')
allEmp3.addEventListener('click',function(){
	let count = 0;
	 let  listEmp = `<table> \n `
	 listEmp += `<tr> \n <th> id </th> \n <th> first_name </th> \n <th> last_name </th> \n <th> email </th> \n <th> gender </th>\n <th> country </th></tr>`
	 for(let emp of newArray()){
	 	if(emp.gender === 'Female'){
	 		count++
	 		listEmp += `<tr> \n <td> ${emp.id} </td> \n <td> ${emp.first_name} </td> \n <td> ${emp.last_name} </td> \n <td>${emp.email} </td>\n <td> ${emp.gender}</td>\n <td> ${emp.country}</td></tr>`
	 }
	 	}
	 	 listEmp += `</table> \n `
	 document.querySelector('#list').innerHTML = listEmp
	  document.querySelector('#total').innerText = `Total Female Employee ${count}`
	 // console.log(listEmp)
	 
})
