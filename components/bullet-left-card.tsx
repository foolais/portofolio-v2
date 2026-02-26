const BulletLeftCard = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative z-10 size-3 bg-primary rounded-full mt-1.5 shrink-0" />
      <div className="absolute top-3 bottom-0 w-px bg-slate-300 left-1/2 -translate-x-1/2" />
    </div>
  );
};

export default BulletLeftCard;
