import React from "react";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

export const SearchableDropdown = ({ name, values, setValue }) => {
  return (
    <FormControl isRequired>
      <FormLabel>{name} ID:</FormLabel>
      <AutoComplete openOnFocus>
        <AutoCompleteInput
          variant="filled"
          placeholder={`${name} ID...`}
          onChange={(e) => setValue(e.target.value)}
        />
        <AutoCompleteList>
          {values.map((val, index) => (
            <AutoCompleteItem
              value={val.id.toString() + " " + val.name}
              key={`option-${index}`}
              textTransform="capitalize"
            >
              {val.id} - {val.name}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
      <FormHelperText>Bitte geben sie das ID ausdrücklich ein!</FormHelperText>
    </FormControl>
  );
};
