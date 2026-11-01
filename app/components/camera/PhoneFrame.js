// Moldura de celular: no mobile ocupa a tela toda; em telas maiores vira um "aparelho".
export default function PhoneFrame({ children }) {
  return (
    <div className="relative flex h-[calc(100svh-56px)] w-full flex-col overflow-hidden bg-black text-white sm:aspect-[9/19.5] sm:h-[min(820px,calc(100svh-112px))] sm:w-auto sm:rounded-[46px] sm:border-[10px] sm:border-[#1b1b24] sm:shadow-[0_30px_90px_rgba(106,0,255,0.25)]">
      {/* barra de status */}
      <div className="flex h-7 shrink-0 items-center justify-between px-6 text-[11px] font-semibold" aria-hidden="true">
        <span>09:49</span>
        <span className="hidden h-5 w-20 rounded-full bg-[#1b1b24] sm:block" />
        <span>5G ▮▮▮</span>
      </div>
      {children}
    </div>
  );
}
