// src/components/Task.stories.js

// import React from "react";
// import { action } from "@storybook/addon-actions";

// import Task from "./Task";

// export default {
//   component: Task,
//   title: "Task",
//   // Our exports that end in "Data" are not stories.
//   excludeStories: /.*Data$/,
// };

// export const taskData = {
//   id: "1",
//   title: "Test Task",
//   state: "TASK_INBOX",
//   updatedAt: new Date(2018, 0, 1, 9, 0),
// };

// export const actionsData = {
//   onPinTask: action("onPinTask"),
//   onArchiveTask: action("onArchiveTask"),
// };

// export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

// export const Pinned = () => (
//   <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
// );

// export const Archived = () => (
//   <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
// );

import React from "react";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
})

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

{
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}
