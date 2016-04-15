import React from 'react';
import marked from 'marked';
import store from '../store'
import request from 'request';

const ActiveFile = ( {file} ) => {
  if (!file) { return <div>Please select a file or make a new note.</div>}

  const content = renderText(file.content);

  return (
    <div className="active-file">
      {renderTitle(file)}
      <textarea onChange={updateContent.bind(this, file)} className="raw-file-content" value={file.content}></textarea>
    </div>
  );
};

const renderTitle = (file) => {
  if (file) {
    return (
      <h3>Title: {file.fileName}</h3>
    );
  }
};

const updateContent = (file, event) => store.saveContent(file.id, event.target.value);

const renderText = (text) => {
  return { __html: marked(text, { sanitized: true }) };
};

module.exports = ActiveFile;
