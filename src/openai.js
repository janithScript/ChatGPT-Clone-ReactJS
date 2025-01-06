import OpenAI from 'openai';

const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAI(message) {
    try {
        const res = await openai.completions.create({
            model: "text-davinci-003",
            prompt: message,
            temperature: 0.7,
            max_tokens: 100, // Reduced tokens to conserve credits // else 256
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });
        return res.choices[0].text;
    } catch (error) {
        return " I'm currently at capacity with free credits. Try again in a few moments. ";
    }
}
