import { Select } from "@chakra-ui/react";
export function DropdownMenu({ setValue, optionsToSelect }) {
  return (
    <Select
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
