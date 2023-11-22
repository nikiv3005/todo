const todoSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },

    TodoList_id: {
      type: Number,
      required: true,
    },

    createdAt: {
      type: Date,
      required: true,
    },

    updatedAt: {
      type: Date,
      required: true,
    },

    deadlineAt: {
      type: Date,
      required: true,
    },

    assignedTo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
