const Stat = ({ s }) => {
  const Icon = s.icon;
  return (
    <div className="flex items-center gap-3 bg-[#f7fafe] border border-slate-200 rounded-[18px] px-4 py-[14px] transition-colors hover:bg-sky-100 hover:border-sky-200">
      <span className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-[11px] bg-sky-100 text-sky-700 flex-shrink-0">
        <Icon size={17} strokeWidth={2.25} />
      </span>
      <div className="min-w-0">
        <span className="block text-[11.5px] font-semibold text-slate-500">
          {s.label}
        </span>
        <span className="block text-[16px] font-bold leading-tight">
          {s.value}
        </span>
      </div>
    </div>
  );
};

export default Stat;
