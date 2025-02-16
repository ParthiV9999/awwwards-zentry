function Button({ id, title, rightIcon, leftIcon, containerClass, hidden }) {
  return (
    <div>
      <button
        type="button"
        id={id}
        className={`group relative w-fit cursor-pinter overflow-hidden rounded-full px-6 py-2 md:px-4 md:py-2 text-blue-200 bg-violet-50 flex-center ${containerClass} ${hidden}`}
      >
        <span className="relative inline-flex overflow-hidden font-bold uppercase font-general">
          <div className="flex-center gap-2 translate-y-0 skew-y-0 opacity-100 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-[160%] group-hover:skew-y-12">
            <span className="text-xl sm:text-2xl md:text-xl">{leftIcon}</span>
            <span className="text-xs sm:text-lg md:text-sm">{title}</span>
            <span className="text-xl sm:text-2xl md:text-xl">{rightIcon}</span>
          </div>
          <div className="flex-center gap-2 absolute translate-y-[200%] skew-y-12 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:skew-y-0">
            <span className="text-xl sm:text-2xl md:text-xl">{leftIcon}</span>
            <span className="text-xs sm:text-lg md:text-sm">{title}</span>
            <span className="text-xl sm:text-2xl md:text-xl">{rightIcon}</span>
          </div>
        </span>
      </button>
    </div>
  );
}

export default Button;
