interface student {
    firstame: string;
    lastname: string;
    age: number;
    location: string;
}
const student1: student = {
    firstame: 'lary';
    lastname: 'lobster';
    age: 678;
    location: 'bikini bottom';
}
const student2: student = {
    firstame: 'mermaid man';
    lastname: 'man';
    age: 678;
    location: 'the invisible boat mobile';
}
let studentlist: student[] = [];
studentlist.push(student1);
studentlist.push(student2);
let myvar = document.createElement('table');
for (let i = 0; i < studentlist.length; i++);{
let row = myvar.insertRow();
let name = row.insertCell();
let location = row.insertCell();
name.innerHtml = studentlist[i].firstname;
location.innerHtml = studentlist[i].location;
}
document.bodyappendChild(myvar);