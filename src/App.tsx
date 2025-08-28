import "./App.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Select>
        <SelectTrigger className="w-[336px] h-[48px]">
          <SelectValue placeholder="Select a Laracon" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Denver">Denver, USA</SelectItem>
          <SelectItem value="Brisbane">Brisbane, Australia</SelectItem>
          <SelectItem value="Amsterdam">Amsterdam, Netherlands</SelectItem>
          <SelectItem value="Gandhinagar">Gandhinagar, India</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default App;
