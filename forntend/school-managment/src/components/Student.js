const Student = ({ fullName, cin, birthday, field, inscriptionDate}) => (
      <div class="h-80 w-60 p-8 mx-14 my-14 shadow-lg box-border bg-white	w-4/5	rounded-b-lg">
        <p class="flex my-2"><p class="p-2 rounded bg-purple text-white mr-4">Name: </p>{fullName}</p>
        <p class="flex  my-2"><p class="p-2 rounded bg-purple text-white mr-4">CIN: </p>{cin}</p>
        <p class="flex  my-2"><p class="p-2 rounded bg-purple text-white mr-4">Birthday: </p>{birthday}</p>
        <p class="flex  my-2"><p class="p-2 rounded bg-purple text-white mr-4">Field: </p> {field}</p>
        <p class="flex  my-2"><p class="p-2 rounded bg-purple text-white mr-4">Inscription</p> {inscriptionDate}</p>
      </div>
  );

  export default Student;