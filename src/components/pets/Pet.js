import "./Pet.css";

const iconMap = {
  cat: "🐈",
  dog: "🐕",
};
function filterPet(kind, pet) {
  const icon = iconMap[kind];
  if (kind === "cat") {
    return (
      <h3>
        {icon} {pet.name}
      </h3>
    );
  } else if (kind === "dog") {
    return (
      <h3>
        {icon} {pet.name}
      </h3>
    );
  } else {
    return (
      <h3>
        {icon} {pet.name}
      </h3>
    );
  }
}

//   }
// }
export const Pet = ({ kind, pet }) => {
  // const icon = iconMap[kind];
  // console.log(kind);
  return (
    <article key={pet.id}>
      {/* <h3>
        {icon} {pet.name}
      </h3> */}
      {filterPet(kind, pet)}
    </article>
  );
};

export default Pet;
