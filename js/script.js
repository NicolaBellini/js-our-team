// elemnts
const output = document.querySelector(".output")


// milestone0
const members = [
   {
      completeName:"Wayne Barnett",
      role:"Founder & CEO",
      img:"assets/img/wayne-barnett-founder-ceo.jpg",
   },
   {
      completeName:"Angela Caroll",
      role:"Chief Editor	",
      img:"assets/img/angela-caroll-chief-editor.jpg",
   },
   {
      completeName:"Walter Gordon",
      role:"Office Manager",
      img:"assets/img/walter-gordon-office-manager.jpg",
   },
   {
      completeName:"Angela Lopez",
      role:"Social Media Manager",
      img:"assets/img/angela-lopez-social-media-manager.jpg",
   },
   {
      completeName:"Scott Estrada",
      role:"Developer	",
      img:"assets/img/scott-estrada-developer.jpg",
   },
   {
      completeName:"Barbara Ramos",
      role:"Graphic Designe",
      img:"assets/img/barbara-ramos-graphic-designer.jpg" ,
   },
]

// milestone1
for(let member of members){
   console.log(member);
   // milestone2 e bonus1
   output.innerHTML+=`
   <div class="col mb-4">
      <div class="card my_card" style="width: 18rem;">
      <img src="${member.img}" title="${member.completeName}" alt="${member.completeName}">
        <div class="card-body">
         <h4>${member.completeName}</h4>
         <p>${member.role}</p>
        </div>
      </div>
    </div>
   `
}

console.log(members[3].completeName)


// Name: ${member.completeName} - Role: ${member.role} - <img src="${member.img}" title="${member.completeName}" alt="${member.completeName}"> 