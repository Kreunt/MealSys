import { Select } from "@chakra-ui/react";
export function DropdownMenu({ setValue, optionsToSelect }) {
  return (
    <Select
      isRequired
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
