import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  let { kind } = useParams();
  let Navigate = useNavigate("");

  function petFilter(kind, cats, dogs) {
    if (kind === "cats") {
      return cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />);
    } else if (kind === "dogs") {
      return dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />);
    }
  }

  useEffect(() => {
    Navigate("/pets/cats");
  }, []);

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} kind={kind} />
      <section className="pets-list">
        {" "}
        {petFilter(kind, cats, dogs)}
        {/* {" "}
        {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))}
        {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))} */}
      </section>
    </section>
  );
};

export default PetsList;
