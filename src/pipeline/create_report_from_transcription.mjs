import { Configuration, OpenAIApi } from 'openai';

// Function that takes an object containing prompts and returns an object containing responses to the prompts
export default async function create_report_from_transcription(model, prompts, api_key){
    const configuration = new Configuration({
        apiKey: api_key,
        });

    const openai = new OpenAIApi(configuration);

    console.log('Creating report...');

    // Creating an empty report object to which we incrementally add the generated responses
    let report = {};

    // Iterate over the different prompts, the responses to which together make up the medical record
    for(const key in prompts){
        try {
            // Calling the ChatCompletion API with the current prompt
            let completion = await openai.createChatCompletion({
                model: model,
                messages: prompts[key],
                });
            report[key] = completion.data.choices[0].message["content"];
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else {
                console.log(error.message);
            }
        }
    }
    console.log("Finished creating report")
    return report;
}




