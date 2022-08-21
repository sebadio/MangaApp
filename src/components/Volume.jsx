import { Chapter } from "./Chapter";

export const Volume = ({ volumen, title }) => {
  const { volume, chapters } = volumen;

  const capitulos = Object.values(chapters).reverse();

  return (
    <div className={`w-full lg:w-2/3 flex flex-col gap-1 p-2`}>
      <h4 className="text-white">
        {volume === "none" || volume === null || volume === ""
          ? "Latest Volume"
          : `Volume: ${volume}`}
      </h4>
      {capitulos.map((capitulo) => (
        <Chapter key={capitulo.id} title={title} id={capitulo.id} />
      ))}
      <hr key={volume.volume + "hr"} className="w-2/4 mt-4 pb-4 m-auto" />
    </div>
  );
};
