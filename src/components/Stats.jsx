const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat label="words" number={stats.numberOfWords} />
      <Stat label="characters" number={stats.numberOfCharacters} />
      <Stat label="instagram" number={stats.instagramCharsLeft} />
      <Stat label="facebook" number={stats.facebookCharsLeft} />
    </section>
  );
};

const Stat = ({ label, number }) => {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
};

export default Stats;
