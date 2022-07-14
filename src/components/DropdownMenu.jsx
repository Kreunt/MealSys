import { Select } from "@chakra-ui/react";
export function DropdownMenu({ setValue, optionsToSelect, currentVal }) {
  return (
    <Select
      isRequired
      value={currentVal}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Bitte wählen..."
    >
      {optionsToSelect.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
