const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
});
export default stripe;