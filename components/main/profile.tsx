import Image from "next/image";

export default function Profile() {
  return (
    <div className="m-10">
      <h2 className="text-2xl mt-3 mb-1 font-serif text-primary">
        Sobre o Psicanalista
      </h2>
      <hr className="w-12 border-secondary mb-3" />
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/1/12/Sigmund_Freud_LIFE.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <p className="my-3 text-sm font-jost">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit
        maiores, dolores nam soluta nemo dolor voluptatum magni nobis
        exercitationem aut fugit sunt a sint recusandae natus itaque quia porro!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit
        maiores, dolores nam soluta nemo dolor voluptatum magni nobis
        exercitationem aut fugit sunt a sint recusandae natus itaque quia porro!
      </p>
    </div>
  );
}
