// elemnts
const output = document.querySelector(".output")



const members = [
   {
      completeName:"Wayne Barnett",
      role:"Founder & CEO",
      img:"wayne-barnett-founder-ceo.jpg",
   },
   {
      completeName:"Angela Caroll",
      role:"Chief Editor	",
      img:"angela-caroll-chief-editor.jpg",
   },
   {
      completeName:"Walter Gordon",
      role:"Office Manager",
      img:"wayne-barnett-founder-ceo.jpg",
   },
   {
      completeName:"Angela Lopez",
      role:"Social Media Manager",
      img:"angela-lopez-social-media-manager.jpg",
   },
   {
      completeName:"Scott Estrada",
      role:"Developer	",
      img:"scott-estrada-developer.jpg",
   },
   {
      completeName:"Barbara Ramos",
      role:"Graphic Designe",
      img:"barbara-ramos-graphic-designer.jpg",
   },
]

// milestone1
for(let member of members){
   console.log(member);
   // milestone2
   output.innerHTML+=`
   <li>
      <p>Name: ${member.completeName} - Role: ${member.role} - img:${member.img} </p>
   </li>
   `
}

console.log(members[3].completeName)

