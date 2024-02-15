import z from "zod";

const getTodoscSchema = z.object({
  description: z.string().min(3).max(50),
});

export default getTodoscSchema;
