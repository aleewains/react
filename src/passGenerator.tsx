import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  type JSX,
} from "react";
function PassGenerator(): JSX.Element {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(8);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const passGenerator = useCallback((): void => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let generatedPassword = "";
    if (includeNumbers) {
      chars += numbers;
    }
    if (includeSymbols) {
      chars += symbols;
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setPassword(generatedPassword);
  }, [length, includeNumbers, includeSymbols, setPassword]);

  useEffect(() => {
    passGenerator();
    setCopied(false);
  }, [length, includeNumbers, includeSymbols, passGenerator]);

  const handleCopy = (): void => {
    if (passwordRef.current) {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, password.length); // For mobile devices
      window.navigator.clipboard.writeText(password);
      setCopied(true);
    }
  };
  return (
    <>
      <div className="bg-amber-100 p-1 flex flex-col max-w-lg mt-10 mx-auto rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mt-2 mb-8 text-amber-500">
          Password Generator
        </h1>
        <div className="flex align-center justify-center mb-4 relative">
          <input
            ref={passwordRef}
            type="text"
            placeholder={password || "Your Generated Password"}
            value={password}
            readOnly
            className="bg-amber-50 py-2 px-4 rounded-l-xl h-12 w-100 focus:outline-none
                 focus:ring-2
                 focus:ring-amber-400
                 focus:ring-inset"
          />
          <button
            className="bg-amber-500 py-2 h-12 px-4 rounded-r-xl cursor-pointer text-amber-50"
            onClick={handleCopy}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="flex  gap-8 items-start justify-center mb-6">
          <div className="flex align-center">
            <input
              type="range"
              name="range"
              id="range"
              min={8}
              max={30}
              value={length}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLength(Number(e.target.value))
              }
            />
            <label htmlFor="range">Legth({length})</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="NumberAllowed"
              id="NumberAllowed"
              checked={includeNumbers}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIncludeNumbers(e.target.checked)
              }
            />
            <label htmlFor="NumberAllowed">Numbers Allowed</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="SymbolsAllowed"
              id="SymbolsAllowed"
              checked={includeSymbols}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIncludeSymbols(e.target.checked)
              }
            />
            <label htmlFor="SymbolsAllowed">Symbols Allowed</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassGenerator;
