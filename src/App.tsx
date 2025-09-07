import "./App.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BcSelect,
  BcSelectValue,
  BcSelectTrigger,
  BcSelectContent,
  BcSelectLabel,
  BcSelectItem,
  BcSelectGroup,
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

        <BcSelect>
          <BcSelectTrigger className="w-[260px]">
            <BcSelectValue placeholder="Select a Laracon" />
          </BcSelectTrigger>
          <BcSelectContent>
            <BcSelectGroup>
              <BcSelectLabel>Locations</BcSelectLabel>
              <BcSelectItem value="Denver">
                <div className="flex space-x-2 items-center">
                  <img
                    className="size-4"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png"
                    alt=""
                  />{" "}
                  <span>Denver, USA</span>
                </div>
              </BcSelectItem>
              <BcSelectItem value="Brisbane">
                <div className="flex space-x-2 items-center">
                  <img
                    className="size-4"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Australia_flag_icon_round.svg/2048px-Australia_flag_icon_round.svg.png"
                    alt=""
                  />{" "}
                  <span>Brisbane, Australia</span>
                </div>
              </BcSelectItem>
              <BcSelectItem value="Amsterdam">
                <div className="flex space-x-2 items-center">
                  <img
                    className="size-4"
                    src="https://cloudscene.global.ssl.fastly.net/CountryFlags/NL.png"
                    alt=""
                  />{" "}
                  <span>Amsterdam, Netherlands</span>
                </div>
              </BcSelectItem>
              <BcSelectItem value="Gandhinagar">
                <div className="flex space-x-2 items-center">
                  <img
                    className="size-4"
                    src="https://vectorflags.s3.amazonaws.com/flags/in-circle-01.png"
                    alt=""
                  />{" "}
                  <span>Gandhinagar, India</span>
                </div>
              </BcSelectItem>
            </BcSelectGroup>
          </BcSelectContent>
        </BcSelect>
      </div>
    </div>
  );
}

export default App;
