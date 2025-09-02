const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-base-200 via-base-300 to-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Pattern */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-2xl 
                bg-gradient-to-br from-primary/20 to-primary/40 
                backdrop-blur-sm shadow-lg
                transform transition-all duration-700
                ${i % 2 === 0 ? "animate-pulse" : "animate-bounce-slow"}
                hover:scale-105 hover:rotate-1
              `}
            />
          ))}
        </div>

        {/* Text */}
        <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-base-content/70 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
