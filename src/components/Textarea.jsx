import { useState } from "react";
import Warning from "./Warning";

const Textarea = ({ text, setText }) => {
  const [warningText, setWarningText] = useState("");

  const handleOnChange = (e) => {
    setWarningText("");

    if (e.target.value.includes("<script>")) {
      setWarningText("No script tag allowed!");
      e.target.value = e.target.value.replace("<script>", "");
    } else if (e.target.value.includes("@")) {
      setWarningText("No @ symbol allowed!");
      e.target.value = e.target.value.replace("@", "");
    }

    setText(e.target.value);
  };

  return (
    <div className="textarea">
      <textarea
        wrap="hard"
        value={text}
        onChange={handleOnChange}
        placeholder="Enter your text"
        spellCheck={false}
      />
      {warningText && <Warning text={warningText} />}
    </div>
  );
};

export default Textarea;
