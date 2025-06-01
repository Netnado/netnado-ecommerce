import { useCallback, useEffect, useRef, useState } from "react";
import { HiChevronDown, HiSearch } from "react-icons/hi";
import { countries, type Country } from "../../data/countries";

function CountryDropdown() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CountryFlagIcon = useCallback((country = selectedCountry) => {
    return <span className={`fi fi-${country.code.toLowerCase()} mr-2`} />;
  }, [selectedCountry]);

  return (
    <div className="w-[80%] max-w-[80%]">
      <div className="mt-2">
        <div className="flex bg-white outline-1 rounded-3xl -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <div className="grid shrink-0 grid-cols-1 focus-within:relative relative" ref={dropdownRef}>
            <button type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 w-full bg-white border border-1 border-gray-300 rounded-r-md rounded-l-3xl px-3 py-2 text-gray-700 focus:outline-none"
            >
              <div className="mr-2">
                {CountryFlagIcon()}
                <span>{selectedCountry.code}</span>
              </div>
              <HiChevronDown
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </button>
            {isExpanded && (
              <div className="absolute z-10 mt-[40px] w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                <ul className="max-h-60 overflow-y-auto">
                  {countries.map((country) => (
                    <li
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsExpanded(false);
                      }}
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {CountryFlagIcon(country)}
                      <span className="text-gray-700">{country.code}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <input
            id="phone-number"
            name="phone-number"
            type="text"
            placeholder="Enter your keyword"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <button className="flex items-center justify-center bg-white border border-gray-300 rounded-r-3xl rounded-l-md px-3 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none cursor-pointer">
            <HiSearch />
          </button>
        </div>
      </div>
    </div >
  );
}

export default CountryDropdown;
