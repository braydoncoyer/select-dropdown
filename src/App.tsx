import "./App.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BraydonSelect,
  BraydonSelectContent,
  BraydonSelectItem,
  BraydonSelectTrigger,
  BraydonSelectValue,
} from "./components/ui/braydon-select";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex space-x-12">
        <Select maxItems={4}>
          <SelectTrigger className="w-[336px] h-[48px]">
            <SelectValue placeholder="Select a Laracon" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Denver">Denver, USA</SelectItem>
            <SelectItem value="Brisbane">Brisbane, Australia</SelectItem>
            <SelectItem value="Amsterdam">Amsterdam, Netherlands</SelectItem>
            <SelectItem value="Gandhinagar">Gandhinagar, India</SelectItem>
            {/* These items below won't show because of the maxItems prop on the Select component */}
            <SelectItem value="London">London, UK</SelectItem>
            <SelectItem value="Toronto">Toronto, Canada</SelectItem>
          </SelectContent>
        </Select>

        <BraydonSelect maxItems={4}>
          <BraydonSelectTrigger className="w-[300px] h-[48px]">
            <BraydonSelectValue placeholder="Select a Laracon" />
          </BraydonSelectTrigger>
          <BraydonSelectContent>
            <BraydonSelectItem value="Denver">Denver, USA</BraydonSelectItem>
            <BraydonSelectItem value="Brisbane">
              Brisbane, Australia
            </BraydonSelectItem>
            <BraydonSelectItem value="Amsterdam">
              Amsterdam, Netherlands
            </BraydonSelectItem>
            <BraydonSelectItem value="Gandhinagar">
              Gandhinagar, India
            </BraydonSelectItem>
            {/* These items below won't show because of the maxItems prop on the Select component */}
            <BraydonSelectItem value="London">London, UK</BraydonSelectItem>
            <BraydonSelectItem value="Toronto">
              Toronto, Canada
            </BraydonSelectItem>
          </BraydonSelectContent>
        </BraydonSelect>
      </div>
    </div>
  );
}

export default App;
