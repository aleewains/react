import { useId } from "react";
type Props = {
  label: string;
  amount?: number;
  onAmountChange?: (amount: number) => void;
  onCurrencyChange?: (amount: string) => void;
  currencyOptions: string[];
  selectedCurrency?: string;

  amountDisabled?: boolean;
  currecyDiabled?: boolean;

  className?: string;
};

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",

  amountDisabled = false,
  currecyDiabled = false,

  className = "",
}: Props) {
  const id = useId();
  return (
    <div className={`bg-amber-100 p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2 p-1">
        <label
          htmlFor={id}
          className="text-amber-600 mb-2 inline-block font-bold"
        >
          {label}
        </label>
        <input
          id={id}
          className="outline-none w-full  py-1.5 bg-amber-50 rounded p-1"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          //onAmountChange - it's reference will be passed to parent component
          // && - is used to double check if its availble then only use onAmountChange
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-amber-600 font-bold mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-amber-50 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currecyDiabled}
        >
          {currencyOptions.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
