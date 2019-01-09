var vacancies = [
  'Web Developer',
  'Accountant fancy schmancy',
  'Full Stack Developer',
  'boris',
  'floris'
];


var specificJobtitle = 'boris';

let vacancylist = "";
vacancies.forEach( function( offer )
{
  if (offer.includes (specificJobtitle))
  {

    vacancylist = vacancylist + offer + "\n" ;

  }

});
console.log(vacancylist);
