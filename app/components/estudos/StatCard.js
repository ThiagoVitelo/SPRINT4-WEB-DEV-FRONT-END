// Card de estatística (número grande + rótulo)
const StatCard = ({ label, value }) => {
  return (
    <div className="card p-5">
      <dt className="text-xs tracking-[0.1em] text-muted uppercase">{label}</dt>
      <dd className="mt-1 font-display text-3xl font-semibold">{value}</dd>
    </div>
  );
};

export default StatCard;
