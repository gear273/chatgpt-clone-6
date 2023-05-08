import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-klCAADzOnxq5WcY660Qef158",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;
