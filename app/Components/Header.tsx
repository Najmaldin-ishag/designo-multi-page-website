interface ComponentsProps {
  children: React.ReactNode;
  variant?: "web" | "app" | "graphic" | "about" | "contact";
}

const Header = ({ children, variant = "web" }: ComponentsProps) => {
  const backgroundClasses = {
    web: "bg-peach",
    app: "bg-peach",
    graphic: "bg-peach",
    about: "bg-peach",
    contact: "bg-peach",
  };

  const patternImages = {
    web: "/assets/web-design/desktop/bg-pattern-intro-web.svg",
    app: "/assets/app-design/desktop/bg-pattern-intro-app.svg",
    graphic: "/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg",
    about: "/assets/about/desktop/bg-pattern-hero-about-desktop.svg",
    contact: "/assets/contact/desktop/bg-pattern-hero-desktop.svg",
  };

  return (
    <header className="!mt-8">
      <div
        className={`${backgroundClasses[variant]} container rounded-[0.9375rem] p-20 relative overflow-hidden ${
          variant === "contact" ? "" : "flex flex-col items-center"
        }`}
        style={{
          backgroundImage: `url(${patternImages[variant]})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {children}
      </div>
    </header>
  );
};

export default Header;
