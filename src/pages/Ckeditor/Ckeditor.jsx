import React from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PendingActions from "@ckeditor/ckeditor5-core/src/pendingactions";
import { useNavigate } from "react-router-dom";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

const Ckeditor = () => {
  const navigate = useNavigate();

  return (
    <EditorBox>
      <Editor>
        <CKEditor
          // editor={ClassicEditor}
          config={{ placeholder: "내용을 입력하세요" }}
          data="<p>내용을 입력하세요</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </Editor>
      <button>전송</button>
    </EditorBox>
  );
};

export default Ckeditor;

const EditorBox = styled.div`
  /* margin-top: 200px; */
`;

const Editor = styled.div`
  height: 500px;
  border: 1px solid #717171;
`;
