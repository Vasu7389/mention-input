import { useState, ChangeEvent } from "react";
import users from "../../../data.json";
import { MentionsInput, Mention } from "react-mentions";
import { MentionOption, User } from "../../common/Types";

const names: MentionOption[] = users.map((user: User) => ({
  id: user.id,
  display: user.first_name,
}));

const MentionInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedNames, setSelectedNames] = useState<MentionOption[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const onAdd = (id: number, display: string) => {
    setSelectedNames([...selectedNames, { id, display }]);
  };

  // const handleSubmit = () => {};

  return (
    <div className="container">
      <MentionsInput
        className="mentionInput"
        placeholder="Mention"
        value={inputValue}
        onChange={handleInputChange}
      >
        <Mention
          trigger="@"
          data={names}
          displayTransform={(_id: number, display: string) => `@${display}`}
          onAdd={onAdd}
        />
      </MentionsInput>
    </div>
  );
};

export default MentionInput;
