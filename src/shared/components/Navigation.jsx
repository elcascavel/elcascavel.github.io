import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = (props) => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-baseline space-x-4">
              <p className="text-slate-900 text-2xl font-semibold">Simão</p>
            </div>
          </div>
          <div className="flex items-baseline space-x-4">
            {props.navigation.map((nav) => (
            <a
              href={nav.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={nav.color}
                icon={["fab", "linkedin"]}
                size={nav.size}
              />
            </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
