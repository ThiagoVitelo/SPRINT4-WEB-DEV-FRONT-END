// Título padrão das seções: rótulo pequeno (eyebrow) + título grande
const SectionHeading = ({ eyebrow, titulo, id }) => {
  return (
    <div className="mb-12 max-w-[760px] md:mb-20">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="text-4xl md:text-6xl">
        {titulo}
      </h2>
    </div>
  );
};

export default SectionHeading;
