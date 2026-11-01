import Link from "next/link";

// Logo do projeto (bolinha roxa + nome)
const Brand = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 font-display text-[15px] font-semibold whitespace-nowrap" aria-label="JOVI Smart Assist — início">
      <span className="h-[15px] w-[15px] rounded-full border-[3px] border-[#bd85ff] bg-primary shadow-[0_0_16px_rgba(106,0,255,0.7)]" aria-hidden="true" />
      <span>
        JOVI <strong className="font-medium text-muted">Smart Assist</strong>
      </span>
    </Link>
  );
};

export default Brand;
