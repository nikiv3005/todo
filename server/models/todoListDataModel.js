const todoSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      required: true,
    },

    user_id: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
