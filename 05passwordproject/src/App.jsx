import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "@#$!&%";
    }

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // useRef
  const passwordRef = useRef(null);
  return (
    <div className="w-full max-w-md mx-auto my-10 p-6 bg-gray-700 rounded-xl shadow-lg text-center text-orange-400">
      <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-lg"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipBoard}
          className="bg-blue-700 text-white px-4 py-2 text-sm md:text-base"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-4 text-white text-sm md:text-base">
        <div className="flex items-center gap-x-3">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="whitespace-nowrap">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Include Numbers</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Include Special Characters</label>
        </div>

        <button
          onClick={passwordGenerator}
          className="bg-green-600 w-full py-2 rounded-lg text-white font-semibold hover:bg-green-700"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
