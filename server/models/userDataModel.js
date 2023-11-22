const todoSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    emailadress: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
