import React from 'react';

export default () => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={(event) => {
          Session.set('showVisible', !event.target.checked);
        }}/>
        show hidden links
      </label>
    </div>
  );
};
