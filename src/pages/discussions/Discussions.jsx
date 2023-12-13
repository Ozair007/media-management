import React, { useState } from "react";
import CustomSlider from "../../components/slider/Slider";
import { contents, selectedContentTypes } from "../../assets/constants";

function Discussions() {
  const [selectedContent, setSelectedContent] = useState("Fun");
  const [selectedContentType, setSelectedContentType] = useState([]);
  return (
    <div className="mt-4">
      <h3>Content Type</h3>
      <p className=" mb-4">
        Choose the content type that best fits your needs.
      </p>

      <div>
        <h6>What type of content are you creating?</h6>
        {contents.map((content, index) => (
          <button
            key={index}
            defaultValue={selectedContent}
            className="btn btn-primary me-2 mb-2"
            onClick={() => {
              setSelectedContent(content);
              setSelectedContentType(selectedContentTypes[index][content]);
            }}
          >
            {content}
          </button>
        ))}
      </div>
      <div className="w-50">
        <h6 className="my-2">{`Which type of "${selectedContent}" do you want to create?`}</h6>
        <select
          className="form-select mb-3"
          aria-label=".form-select-lg example"
        >
          <option value="#">Select</option>
          {selectedContentType.map((content) => (
            <option key={content} value={content}>
              {content}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h6>Set the number of words for output text.</h6>
        <CustomSlider />
      </div>
    </div>
  );
}

export default Discussions;
