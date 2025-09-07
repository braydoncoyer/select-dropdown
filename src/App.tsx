import "./App.css";

type LaraconSelect = {
  imgUrl: string;
  location: string;
};

const laraconLocations: LaraconSelect[] = [
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png",
    location: "Denver, USA",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Australia_flag_icon_round.svg/2048px-Australia_flag_icon_round.svg.png",
    location: "Brisbane, Australia",
  },
  {
    imgUrl: "https://cloudscene.global.ssl.fastly.net/CountryFlags/NL.png",
    location: "Amsterdam, Netherlands",
  },
  {
    imgUrl: "https://vectorflags.s3.amazonaws.com/flags/in-circle-01.png",
    location: "Gandhinagar, India",
  },
];

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
            {laraconLocations.map((laracon) => (
              <SelectItem value={laracon.location}>
                {laracon.location}
              </SelectItem>
            ))}
            {/* These items below won't show because of the maxItems prop on the Select component */}
            <SelectItem value="London">London, UK</SelectItem>
            <SelectItem value="Toronto">Toronto, Canada</SelectItem>
          </SelectContent>
        </Select>

        {/* My own take! */}
        <BcSelect>
          <BcSelectTrigger className="w-[260px] h-[44px]">
            <BcSelectValue placeholder="Select a Laracon" />
          </BcSelectTrigger>
          <BcSelectContent>
            <BcSelectGroup>
              <BcSelectLabel>Locations</BcSelectLabel>
              {laraconLocations.map((laracon) => (
                <BcSelectItem value={laracon.location}>
                  <div className="flex space-x-2 items-center">
                    <img className="size-4" src={laracon.imgUrl} alt="" />{" "}
                    <span>{laracon.location}</span>
                  </div>
                </BcSelectItem>
              ))}
            </BcSelectGroup>
          </BcSelectContent>
        </BcSelect>
      </div>
    </div>
  );
}

export default App;
