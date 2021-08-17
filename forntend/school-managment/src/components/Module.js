const Module = ({ name, coeff}) => (
    <div class="h-80 w-60 p-8 mx-14 my-14 shadow-lg box-border bg-white	w-4/5	rounded-b-lg">
      <p class="flex my-2"><p class="p-2 rounded bg-purple text-white mr-4">Name: </p>{name}</p>
      <p class="flex  my-2"><p class="p-2 rounded bg-purple text-white mr-4">Coeff: </p>{coeff}</p>
    </div>
);

export default Module;